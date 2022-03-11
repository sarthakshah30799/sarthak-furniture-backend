import * as express from "express";
import postgraphileConnection from "./postgresql/index";
import * as cors from "cors";
import postgresqlConnection from "./postgresql/home";

import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.use(postgraphileConnection);
app.use(postgresqlConnection);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
