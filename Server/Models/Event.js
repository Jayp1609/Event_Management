const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  address: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: String, required: true },
  category: { type: String, require: true },
  title: { type: String, required: true },
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
