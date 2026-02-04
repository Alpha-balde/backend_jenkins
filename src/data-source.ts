/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Item} from "./entity/Item";
import {Basket} from "./entity/Basket";
import {BasketItem} from "./entity/BasketItem";

export const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "#@#{DB_HOST}#@#",
    port: 5432,
    username: "#@#{DB_USER}#@#",
    password: "#@#{DB_PASSWORD}#@#",
    database: "#@#{DB_NAME}#@#",
    synchronize: true,
    logging: false,
    entities: [User, Basket, BasketItem, Item],
    migrations: [__dirname + '/migrations/**/*.ts'],
    migrationsTableName: "migration_versions",
    subscribers: [],
})
