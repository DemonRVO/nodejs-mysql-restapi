import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const MYSQLHOST = process.env.MYSQLHOST;
export const MYSQLUSER = process.env.MYSQLUSER;
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD;
export const MYSQLDATABASE = process.env.MYSQLDATABASE;
export const MYSQLPORT = process.env.MYSQLPORT;
