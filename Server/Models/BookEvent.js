const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookEventSchema = new Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "auth" },
  // eventid: { type: mongoose.Schema.Types.ObjectId, ref: "event" },

  user_id: { type: String, require: true },
  event_id: { type: String, require: true },
  email: { type: String, require: true },
});

const BookEvent = mongoose.model("bookevent", BookEventSchema);

module.exports = BookEvent;
