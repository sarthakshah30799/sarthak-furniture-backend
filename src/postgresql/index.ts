import { postgraphile } from "postgraphile";
import { extendTendSchemPlugin } from "../graphql";

const port: any = process.env.PG_PORT || 8000;

const config = {
  host: process.env.PG_HOST || "localhost",
  port,
  user: process.env.PG_USER || "postgres",
  password: process.env.PG_PASSWORD || "root",
  database: process.env.PG_DATABASE || "sarthak_furniture",
};

export default postgraphile(config, "public", {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  retryOnInitFail: true,
  appendPlugins: [extendTendSchemPlugin],
  ownerConnectionString: `postgres://${config.user}:${config.password}@${config.host}:${port}/${config.database}`,
});
