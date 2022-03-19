import * as pg from "pg";

const port: any = process.env.PG_PORT || 8000;
const postgresqlConnection = () => {
  const client = new pg.Client({
    host: process.env.PG_HOST || "localhost",
    port,
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "root",
    database: process.env.PG_DATABASE || "sarthak_furniture",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  client
    .connect()
    .then((result) => console.log("postgresql connection successfully", result))
    .catch((err) => console.log("Error while connecting postgresql", err));
};

export default postgresqlConnection;
