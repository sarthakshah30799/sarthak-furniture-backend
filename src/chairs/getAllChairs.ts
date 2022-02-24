import db from "../db.js";

const getAllChairs = async (req, res) => {
  const data = await db.query(`SELECT * FROM sarthak_chair_product`, function (
    err,
    rows
  ) {
    if (err) {
      console.error("Error while fetching chairs", err);
    }
    console.log("rows data", rows[1]);
    return res(rows).toJSON();
  });
  console.log("data fetched from collectino", data);
  return data;
};

export default getAllChairs;
