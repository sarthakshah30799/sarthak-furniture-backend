const express = require("express");
const chairQuery = require("./chair.query");
const route = express.Router();
const db = require("./db");
const config = require("./config");
const helper = require("./helper");

route.get("/", async function (req, res, next) {
  try {
    const offSet = helper.getOffset(req.query.page, config.listPerPage);
    db.query(
      `SELECT * FROM sarthak_chair_product LIMIT ${offSet}, ${config.listPerPage}`,
      function (err, rows, fields) {
        if (err) {
          res.status(500).send({ error: "Something failed!" });
        }
        res.json(rows);
      }
    );
  } catch (error) {
    throw error;
  }
});

module.exports = route;
