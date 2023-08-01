const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
});

const Auth = mongoose.model("auth", AuthSchema);

module.exports = Auth;
