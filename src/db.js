import mysql from "mysql2";
import { config } from "./config.js";

const connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

export default connection;
