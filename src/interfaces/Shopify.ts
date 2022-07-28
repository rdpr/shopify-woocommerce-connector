export interface Product {
    id: string;
    title: string;
    vendor: string; // Brand
    product_type: string;
    status: "active"|"draft"|"archive";
    options: ProductOption[];
    variants: ProductVariant[];
}

export type ProductOption = {name: ProductOptionsName, values: string[]}
export type ProductOptionsName = "Color"|"Size";
export type ProductVariant = {[optionNumber: string]: string};

export interface CustomerAddress {
    "address1": string,
    "address2": string,
    "city": string,
    "company": string|null,
    "country": string,
    "first_name": string,
    "last_name": string,
    "phone": string,
    "province": string,
    "zip": string,
    "name": string,
    "province_code": string,
    "country_code": string,
    "latitude": string,
    "longitude": string
}

//export interface ClientDetails {
//    "accept_language": string,
//    "browser_height": number,
//    "browser_ip": string,
//    "browser_width": number,
//    "session_hash": string,
//    "user_agent": string
//}
//
//export interface Order {
//  "app_id": number,
//  "billing_address": CustomerAddress,
//  "browser_ip": string,
//  "buyer_accepts_marketing": false,
//  "cancel_reason": "customer"|"fraud"|"inventory"|"declined"|"other",
//  "cancelled_at": string|null,
//  "cart_token": string,
//  "checkout_token": string,
//  "client_details": ClientDetails,
//  "closed_at": string|Date,
//  "created_at": string|Date,
//  "currency": string,
//  "current_total_discounts": string,
//  "current_total_discounts_set": {
//    "current_total_discounts_set": {
//      "shop_money": {
//        "amount": string,
//        "currency_code": string
//      },
//      "presentment_money": {
//        "amount": string,
//        "currency_code": string
//      }
//    }
//  },
//  "current_total_duties_set": {
//    "current_total_duties_set": {
//      "shop_money": {
//        "amount": string,
//        "currency_code": string
//      },
//      "presentment_money": {
//        "amount": string,
//        "currency_code": string
//      }
//    }
//  },
//  "current_total_price": string,
//  "current_total_price_set": {
//    "current_total_price_set": {
//      "shop_money": {
//        "amount": string,
//        "currency_code": string
//      },
//      "presentment_money": {
//        "amount": string,
//        "currency_code": string
//      }
//    }
//  },
//  "current_subtotal_price": string,
//  "current_subtotal_price_set": {
//    "current_subtotal_price_set": {
//      "shop_money": {
//        "amount": string,
//        "currency_code": string
//      },
//      "presentment_money": {
//        "amount": string,
//        "currency_code": string
//      }
//    }
//  },
//  "current_total_tax": string,
//  "current_total_tax_set": {
//    "current_total_tax_set": {
//      "shop_money": {
//        "amount": string,
//        "currency_code": string
//      },
//      "presentment_money": {
//        "amount": string,
//        "currency_code": string
//      }
//    }
//  },
//  "customer": {
//    "id": number,
//    "email": string,
//    "accepts_marketing": boolean,
//    "created_at": string|Date,
//    "updated_at": string|Date,
//    "first_name": string,
//    "last_name": string,
//    "state": "disabled"|"invited"|"enabled"|"declined",
//    "note": null|string,
//    "verified_email": boolean,
//    "multipass_identifier": null,
//    "tax_exempt": boolean,
//    "tax_exemptions": {},
//    "phone": string,
//    "tags": string,
//    "currency": string,
//    "addresses": {},
//    "admin_graphql_api_id": string,
//    "default_address": {}
//  },
//  "customer_locale": "en-CA",
//  "discount_applications": {
//    "discount_applications": [
//      {
//        "type": "manual",
//        "title": "custom discount",
//        "description": "customer deserved it",
//        "value": "2.0",
//        "value_type": "fixed_amount",
//        "allocation_method": "across",
//        "target_selection": "explicit",
//        "target_type": "line_item"
//      },
//      {
//        "type": "script",
//        "description": "my scripted discount",
//        "value": "5.0",
//        "value_type": "fixed_amount",
//        "allocation_method": "across",
//        "target_selection": "explicit",
//        "target_type": "shipping_line"
//      },
//      {
//        "type": "discount_code",
//        "code": "SUMMERSALE",
//        "value": "10.0",
//        "value_type": "fixed_amount",
//        "allocation_method": "across",
//        "target_selection": "all",
//        "target_type": "line_item"
//      }
//    ]
//  },
//  "discount_codes": [
//    {
//      "code": "SPRING30",
//      "amount": "30.00",
//      "type": "fixed_amount"
//    }
//  ],
//  "email": "bob.norman@mail.example.com",
//  "estimated_taxes": false,
//  "financial_status": "authorized",
//  "fulfillments": [
//    {
//      "created_at": "2012-03-13T16:09:54-04:00",
//      "id": 255858046,
//      "order_id": 450789469,
//      "status": "failure",
//      "tracking_company": "USPS",
//      "tracking_number": "1Z2345",
//      "updated_at": "2012-05-01T14:22:25-04:00"
//    }
//  ],
//  "fulfillment_status": "partial",
//  "gateway": "shopify_payments",
//  "id": 450789469,
//  "landing_site": "http://www.example.com?source=abc",
//  "line_items": [
//    {
//      "fulfillable_quantity": 1,
//      "fulfillment_service": "amazon",
//      "fulfillment_status": "fulfilled",
//      "grams": 500,
//      "id": 669751112,
//      "price": "199.99",
//      "product_id": 7513594,
//      "quantity": 1,
//      "requires_shipping": true,
//      "sku": "IPOD-342-N",
//      "title": "IPod Nano",
//      "variant_id": 4264112,
//      "variant_title": "Pink",
//      "vendor": "Apple",
//      "name": "IPod Nano - Pink",
//      "gift_card": false,
//      "price_set": {
//        "shop_money": {
//          "amount": "199.99",
//          "currency_code": "USD"
//        },
//        "presentment_money": {
//          "amount": "173.30",
//          "currency_code": "EUR"
//        }
//      },
//      "properties": [
//        {
//          "name": "custom engraving",
//          "value": "Happy Birthday Mom!"
//        }
//      ],
//      "taxable": true,
//      "tax_lines": [
//        {
//          "title": "HST",
//          "price": "25.81",
//          "price_set": {
//            "shop_money": {
//              "amount": "25.81",
//              "currency_code": "USD"
//            },
//            "presentment_money": {
//              "amount": "20.15",
//              "currency_code": "EUR"
//            }
//          },
//          "channel_liable": true,
//          "rate": 0.13
//        }
//      ],
//      "total_discount": "5.00",
//      "total_discount_set": {
//        "shop_money": {
//          "amount": "5.00",
//          "currency_code": "USD"
//        },
//        "presentment_money": {
//          "amount": "4.30",
//          "currency_code": "EUR"
//        }
//      },
//      "discount_allocations": [
//        {
//          "amount": "5.00",
//          "discount_application_index": 2,
//          "amount_set": {
//            "shop_money": {
//              "amount": "5.00",
//              "currency_code": "USD"
//            },
//            "presentment_money": {
//              "amount": "3.96",
//              "currency_code": "EUR"
//            }
//          }
//        }
//      ],
//      "origin_location": {
//        "id": 1390592786454,
//        "country_code": "CA",
//        "province_code": "ON",
//        "name": "Apple",
//        "address1": "700 West Georgia Street",
//        "address2": "1500",
//        "city": "Toronto",
//        "zip": "V7Y 1G5"
//      },
//      "duties": [
//        {
//          "id": "2",
//          "harmonized_system_code": "520300",
//          "country_code_of_origin": "CA",
//          "shop_money": {
//            "amount": "164.86",
//            "currency_code": "CAD"
//          },
//          "presentment_money": {
//            "amount": "105.31",
//            "currency_code": "EUR"
//          },
//          "tax_lines": [
//            {
//              "title": "VAT",
//              "price": "16.486",
//              "rate": 0.1,
//              "price_set": {
//                "shop_money": {
//                  "amount": "16.486",
//                  "currency_code": "CAD"
//                },
//                "presentment_money": {
//                  "amount": "10.531",
//                  "currency_code": "EUR"
//                }
//              },
//              "channel_liable": true
//            }
//          ],
//          "admin_graphql_api_id": "gid://shopify/Duty/2"
//        }
//      ]
//    }
//  ],
//  "location_id": 49202758,
//  "name": "#1001",
//  "note": "Customer changed their mind.",
//  "note_attributes": [
//    {
//      "name": "custom name",
//      "value": "custom value"
//    }
//  ],
//  "number": 1,
//  "order_number": 1001,
//  "original_total_duties_set": {
//    "original_total_duties_set": {
//      "shop_money": {
//        "amount": "164.86",
//        "currency_code": "CAD"
//      },
//      "presentment_money": {
//        "amount": "105.31",
//        "currency_code": "EUR"
//      }
//    }
//  },
//  "payment_details": {
//    "avs_result_code": "Y",
//    "credit_card_bin": "453600",
//    "cvv_result_code": "M",
//    "credit_card_number": "•••• •••• •••• 4242",
//    "credit_card_company": "Visa"
//  },
//  "payment_terms": {
//    "amount": 70,
//    "currency": "CAD",
//    "payment_terms_name": "NET_30",
//    "payment_terms_type": "NET",
//    "due_in_days": 30,
//    "payment_schedules": [
//      {
//        "amount": 70,
//        "currency": "CAD",
//        "issued_at": "2020-07-29T13:02:43-04:00",
//        "due_at": "2020-08-29T13:02:43-04:00",
//        "completed_at": "null",
//        "expected_payment_method": "shopify_payments"
//      }
//    ]
//  },
//  "payment_gateway_names": [
//    "authorize_net",
//    "Cash on Delivery (COD)"
//  ],
//  "phone": "+557734881234",
//  "presentment_currency": "CAD",
//  "processed_at": "2008-01-10T11:00:00-05:00",
//  "processing_method": "direct",
//  "referring_site": "http://www.anexample.com",
//  "refunds": [
//    {
//      "id": 18423447608,
//      "order_id": 394481795128,
//      "created_at": "2018-03-06T09:35:37-05:00",
//      "note": null,
//      "user_id": null,
//      "processed_at": "2018-03-06T09:35:37-05:00",
//      "refund_line_items": [],
//      "transactions": [],
//      "order_adjustments": []
//    }
//  ],
//  "shipping_address": {
//    "address1": "123 Amoebobacterieae St",
//    "address2": "",
//    "city": "Ottawa",
//    "company": null,
//    "country": "Canada",
//    "first_name": "Bob",
//    "last_name": "Bobsen",
//    "latitude": "45.41634",
//    "longitude": "-75.6868",
//    "phone": "555-625-1199",
//    "province": "Ontario",
//    "zip": "K2P0V6",
//    "name": "Bob Bobsen",
//    "country_code": "CA",
//    "province_code": "ON"
//  },
//  "shipping_lines": [
//    {
//      "code": "INT.TP",
//      "price": "4.00",
//      "price_set": {
//        "shop_money": {
//          "amount": "4.00",
//          "currency_code": "USD"
//        },
//        "presentment_money": {
//          "amount": "3.17",
//          "currency_code": "EUR"
//        }
//      },
//      "discounted_price": "4.00",
//      "discounted_price_set": {
//        "shop_money": {
//          "amount": "4.00",
//          "currency_code": "USD"
//        },
//        "presentment_money": {
//          "amount": "3.17",
//          "currency_code": "EUR"
//        }
//      },
//      "source": "canada_post",
//      "title": "Small Packet International Air",
//      "tax_lines": [],
//      "carrier_identifier": "third_party_carrier_identifier",
//      "requested_fulfillment_service_id": "third_party_fulfillment_service_id"
//    }
//  ],
//  "source_name": "instagram",
//  "source_identifier": "ORDERID-123",
//  "source_url": "{URL_to_order}",
//  "subtotal_price": 398,
//  "subtotal_price_set": {
//    "shop_money": {
//      "amount": "141.99",
//      "currency_code": "CAD"
//    },
//    "presentment_money": {
//      "amount": "90.95",
//      "currency_code": "EUR"
//    }
//  },
//  "tags": "imported, vip",
//  "tax_lines": [
//    {
//      "price": 11.94,
//      "rate": 0.06,
//      "title": "State Tax",
//      "channel_liable": true
//    }
//  ],
//  "taxes_included": false,
//  "test": true,
//  "token": "b1946ac92492d2347c6235b4d2611184",
//  "total_discounts": "0.00",
//  "total_discounts_set": {
//    "shop_money": {
//      "amount": "0.00",
//      "currency_code": "CAD"
//    },
//    "presentment_money": {
//      "amount": "0.00",
//      "currency_code": "EUR"
//    }
//  },
//  "total_line_items_price": "398.00",
//  "total_line_items_price_set": {
//    "shop_money": {
//      "amount": "141.99",
//      "currency_code": "CAD"
//    },
//    "presentment_money": {
//      "amount": "90.95",
//      "currency_code": "EUR"
//    }
//  },
//  "total_outstanding": "5.00",
//  "total_price": "409.94",
//  "total_price_set": {
//    "shop_money": {
//      "amount": "164.86",
//      "currency_code": "CAD"
//    },
//    "presentment_money": {
//      "amount": "105.31",
//      "currency_code": "EUR"
//    }
//  },
//  "total_shipping_price_set": {
//    "shop_money": {
//      "amount": "30.00",
//      "currency_code": "USD"
//    },
//    "presentment_money": {
//      "amount": "0.00",
//      "currency_code": "USD"
//    }
//  },
//  "total_tax": "11.94",
//  "total_tax_set": {
//    "shop_money": {
//      "amount": "18.87",
//      "currency_code": "CAD"
//    },
//    "presentment_money": {
//      "amount": "11.82",
//      "currency_code": "EUR"
//    }
//  },
//  "total_tip_received": "4.87",
//  "total_weight": 300,
//  "updated_at": "2012-08-24T14:02:15-04:00",
//  "user_id": 31522279,
//  "order_status_url": {
//    "order_status_url": "https://checkout.shopify.com/112233/checkouts/4207896aad57dfb159/thank_you_token?key=753621327b9e8a64789651bf221dfe35"
//  }
//}
