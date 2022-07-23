import {DataSource, DataSourceOptions} from "typeorm";
//import * as Entities from "@models";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

import Database from "better-sqlite3";
const dbPath = process.cwd() + "/data/shopify-integration.db";
const dataSourceOptions: DataSourceOptions = {
    type: "better-sqlite3",
    database: dbPath,
    prepareDatabase: () => {new Database(dbPath)},
    //entities: [...Object.values(Entities)],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true
}

export default new DataSource(dataSourceOptions);

