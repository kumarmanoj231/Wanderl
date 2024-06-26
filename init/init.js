const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
let initData = require("./data.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/WanderLust";
const main = async () => {
  await mongoose.connect(MONGO_URL);
};

main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const initializeDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "666e66fb3360a03616232c29",
  }));
  let res = await Listing.insertMany(initData.data);
  console.log(res);
};
initializeDB();
