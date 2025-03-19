import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const MYSQLHOST = process.env.DB_HOST;
export const MYSQLUSER = process.env.DB_USER;
export const MYSQLPASSWORD = process.env.DB_PASSWORD;
export const MYSQLDATABASE = process.env.DB_DATABASE;
export const MYSQLPORT = process.env.DB_PORT;
