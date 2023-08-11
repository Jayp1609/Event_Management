const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  category: { type: String, required: true },
});

const CategoryName = mongoose.model("categoryname", CategorySchema);
module.exports = CategoryName;
