import * as express from "express";
import { config } from "../config.js";
import db from "../db.js";
import { getOffset } from "../helper.js";
import { imgUpload } from "../uploadImg.js";

const route = express.Router();

route.get("/", async function (req, res, next) {
  let totalPages;
  let totalData;
  try {
    db.query(
      `SELECT COUNT(*) FROM sarthak_chair_product`,
      function (err, rows, fields) {
        totalData = rows[0]["COUNT(*)"];
        console.log("row count", rows[0]["COUNT(*)"]);
      }
    );
    const offSet = getOffset(req.query.page, config.listPerPage);
    db.query(
      `SELECT * FROM sarthak_chair_product`,
      function (err, rows, fields) {
        if (err) {
          res.status(500).send({ error: "Something failed!" });
        }
        console.log("rows data", rows);
        totalPages = Math.ceil(totalData / config.listPerPage);
        console.log(totalPages, "totalPages");
        res.json(rows);
      }
    );
  } catch (error) {
    throw error;
  }
});

route.get("/:id", async function (req, res, error) {
  try {
    console.log("request", req.params.id);
    db.query(
      `SELECT * FROM sarthak_chair_product WHERE chair_id = "${req.params.id}"`,
      function (err, rows) {
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

route.post("/", async function (req, res, next) {
  console.log("req bodt creaeta dat", req.body);
  const data = req.body;
  console.log("data body ", JSON.stringify(data.formData));
  const sql = `INSERT INTO sarthak_chair_product VALUES ("${data.name}", "${
    data.type
  }", "${data.name}", "${data.type}", "${data.name}", "${data.type}", "${
    data.name
  }", "${data.type}", "${data.name}", "${data.type}", "${data.name}", "${
    data.type
  }", "${data.name}", "${data.type}", "${data.type}", '${JSON.stringify(
    data.formData
  )}')`;
  db.query(sql, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

route.post(
  "/image",
  imgUpload.array("file", 3),
  async function (req, res, next) {
    const files = req.files;
    console.log("req", req.body);
    console.log("req file api", req.file);
    console.log("multiple files", req.files);
    const response = files.map((file) => ({
      name: file.originalname,
      location: file.location,
    }));
    res.status(200).send(response);
  }
);

export default route;
