const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  address: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: String, required: true },
  tag: { type: String, require: true },
  title: { type: String, required: true },
});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
