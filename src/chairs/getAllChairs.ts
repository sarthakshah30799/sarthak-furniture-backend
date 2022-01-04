import db from "../db.js";

export const getAllChairs = () => {
  const data = db.query(
    `SELECT * FROM sarthak_chair_product`,
    function (err, rows, fields) {
      if (err) {
        console.error("Error while fetching chairs", err);
      }
      console.log("rows data", rows);
      return rows;
    }
  );
  console.log("data fetched from collectino", data);
  return data;
};
