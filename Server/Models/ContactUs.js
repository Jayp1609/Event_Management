const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactUsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
  country: { type: String, required: true },
});

const Event = mongoose.model("contactus", ContactUsSchema);

module.exports = Event;
