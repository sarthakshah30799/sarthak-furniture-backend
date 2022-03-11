import { postgraphile } from "postgraphile";

const port: any = process.env.PG_PORT || 8000;
export default postgraphile(
  {
    host: process.env.PG_HOST || "localhost",
    port,
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "root",
    database: process.env.PG_DATABASE || "sarthak_furniture",
  },
  "public",
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    retryOnInitFail: true,
  }
);
