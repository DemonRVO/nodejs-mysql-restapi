import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

// Debug: Log the database connection details
console.log("🔍 DB Connection Details:");
console.log({
  DB_HOST,
  DB_USER,
  DB_PASSWORD: DB_PASSWORD ? "******" : "Not Set",
  DB_PORT,
  DB_DATABASE,
});

// Create the database pool
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
