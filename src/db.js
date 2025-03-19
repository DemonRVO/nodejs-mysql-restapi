import { createPool } from "mysql2/promise";
import {
  MYSQLDATABASE,
  MYSQLHOST,
  MYSQLPASSWORD,
  MYSQLPORT,
  MYSQLUSER,
} from "./config.js";

// Debug: Log the database connection details
console.log("🔍 DB Connection Details:");
console.log({
  MYSQLHOST,
  MYSQLUSER,
  MYSQLPASSWORD: DB_PASSWORD ? "******" : "Not Set",
  MYSQLPORT,
  MYSQLDATABASE,
});

// Create the database pool
export const pool = createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  port: MYSQLPORT,
  database: MYSQLDATABASE,
});
