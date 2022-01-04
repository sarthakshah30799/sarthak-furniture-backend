const db = require("./db");
const config = require("./config");
const helper = require("./helper");

async function getAll(page = 1) {
  const offSet = helper.getOffset(page, config.listPerPage);
  console.log("offset on query page", offSet);
  const rows = db.query(
    `SELECT * FROM sarthak_chair_product LIMIT ${offSet}, ${config.listPerPage}`,
    function (err, rows, fields) {
      if (err) {
        throw err;
      }
      return rows;
    }
  );
  console.log("data to be fetched", rows);
  const data = helper.emptyOrRows(rows);
  console.log("rows length", data.length);
  // const totalPages
  const meta = { page };
  console.log("rows", rows);
  return { data, meta };
}

module.exports = { getAll };
