import * as mysql from "mysql2";
import { config } from "./config.js";
import * as Sequelize from "sequelize";

const connection = mysql.createConnection(config.db);
// const sequelize = new Sequelize("sarthak_furniture", "root", "", {
//   host: "localhost",
//   port: "3306",
//   dialect: "mysql",
//   define: {
//     freezeTableName: true,
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
//   // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
//   operatorsAliases: false,
// });

// const models = [require("../models/chair")];
// const db = {};
// // Initialize models
// models.forEach((model) => {
//   const seqModel = model(sequelize, Sequelize);
//   db[seqModel.name] = seqModel;
// });

// Object.keys(db).forEach((key) => {
//   if ("associate" in db[key]) {
//     db[key].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

export default connection;
