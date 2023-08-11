const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;

mongoose.set("strictQuery", true);

const connectToMongo = () => {
  try {
    mongoose.connect(uri).then(console.log("Connection Successful!!!!!"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToMongo;
