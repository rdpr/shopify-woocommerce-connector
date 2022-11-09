import dataSource from "@dataSource";
import express from 'express';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';
import { HTTPClientFactory } from '@woocommerce/api';
require('dotenv').config();

const shopify = (app: express.Application) => {
    const { API_KEY, API_SECRET_KEY, API_VERSION, SCOPES, SHOP, HOST, HOST_SCHEME } = process.env;

    console.log(API_KEY)
    console.log(API_SECRET_KEY)
    Shopify.Context.initialize({
      API_KEY: API_KEY!,
      API_SECRET_KEY: API_SECRET_KEY!,
      SCOPES: [SCOPES!],
      HOST_NAME: HOST!.replace(/https?:\/\//, ""),
      HOST_SCHEME,
      IS_EMBEDDED_APP: false,
      API_VERSION: ApiVersion.July22 // all supported versions are available, as well as "unstable" and "unversioned"
    });
    // Storing the currently active shops in memory will force them to re-login when your server restarts. You should
    // persist this object in your app.
    const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

    // the rest of the example code goes here

    app.get("/", async (req, res) => {
       // This shop hasn't been seen yet, go through OAuth to create a session
      if (ACTIVE_SHOPIFY_SHOPS[SHOP!] === undefined) {
         // not logged in, redirect to login
        res.redirect(`/login`);
      } else {
        res.send("Hello world!");
        // Load your app skeleton page with App Bridge, and do something amazing!
        res.end();
      }
    });

    app.get('/login', async (req, res) => {
      let authRoute = await Shopify.Auth.beginAuth(
        req,
        res,
        SHOP!,
        '/auth/callback',
        false,
      );
      return res.redirect(authRoute);
    });

    app.get('/auth/callback', async (req, res) => {
      try {
        const session = await Shopify.Auth.validateAuthCallback(
          req,
          res,
          req.query as unknown as AuthQuery,
        ); // req.query must be cast to unkown and then AuthQuery in order to be accepted
        ACTIVE_SHOPIFY_SHOPS[SHOP!] = session.scope;
        console.log(session.accessToken);
      } catch (error) {
        console.error(error); // in practice these should be handled more gracefully
      }
      console.log("query here");
      console.log(req.query)
      return res.redirect(`/?host=${req.query.host}&shop=${req.query.shop}`); // wherever you want your user to end up after OAuth completes
    });

    app.listen(3000, () => {
      console.log('your app is now listening on port 3000');
    });

}

const woocommerce = async (app: express.Application) => {

    const { WOOCOMMERCE_API_KEY, WOOCOMMERCE_API_KEY_SECRET } = process.env;
    // You can create an API client using the client factory with pre-configured middleware for convenience.
    //let client = HTTPClientFactory.build('https://localhost:8888')
    //    .withBasicAuth(WOOCOMMERCE_API_KEY as string, WOOCOMMERCE_API_KEY_SECRET as string)
    //    .create();

    // You can also create an API client configured for requests using OAuth.
    let client = HTTPClientFactory.build('http://localhost:8888')
        .withOAuth(WOOCOMMERCE_API_KEY as string, WOOCOMMERCE_API_KEY_SECRET as string)
        .create();

    const data = {
      name: "Premium Quality",
      type: "simple",
      regular_price: "21.99",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      categories: [
        {
          id: 9
        },
        {
          id: 14
        }
      ],
      images: [
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
        },
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
        }
      ]
    };

    client.post("/wc/v3/products", data)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });

    client.get("/wc/v3/products")
      .then((response) => {
        console.log(response);
      }, (error) => console.log(error));
    //client.get("")
    //  .then((response) => {
    //    console.log(response.data);
    //  })
    //  .catch((error) => {
    //    console.log(error);
    //  });
}

(async () => {
    await dataSource.initialize()
    const app = express();

    // Shopify
    shopify(app);
    woocommerce(app);
})();

