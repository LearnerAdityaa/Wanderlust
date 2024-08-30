const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dbURL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj) => ({ ...obj, owner: "66a1f45589edb8c3fa264cc8" }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};
initDB();
