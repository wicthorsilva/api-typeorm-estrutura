import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../app/entities/User"
// import { CreateUsersTable1703981889404 } from "./migrations/1703981889404-CreateUsersTable";
import dotenv from "dotenv";

dotenv.config();


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
    ssl: false,
})

