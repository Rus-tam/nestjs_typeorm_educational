import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { ConfigService } from "@nestjs/config";
import { Listing } from "src/items/entities/listing.entity";
import { Item } from "src/items/entities/item.entity";

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.getOrThrow('DB_HOST'),
    port: configService.getOrThrow('DB_PORT'),
    database: configService.getOrThrow('DB_NAME'),
    username: configService.getOrThrow('DB_USER'),
    password: configService.getOrThrow('DB_PASSWORD'),
    migrations: ['migrations/**'],
    // entities: [Item, Listing, Comment]
    entities: [__dirname + '/items/entities/*.entity{.ts,.js}'],

});