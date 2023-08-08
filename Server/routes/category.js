const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Event = require("../Models/Event");
const { validationResult } = require("express-validator");
const BookEvent = require("../Models/BookEvent");
const User = require("../Models/Auth");

//Route for categorywise event
router.get("/:category", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const events = await Event.find({ category: req.params.category });
    res.json(events);
  } catch (err) {
    console.log(err);
  }
});

//Route to fetch specific event
router.get("/detail/:eventid", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const events = await Event.findById(req.params.eventid);
    res.json(events);
  } catch (err) {
    console.log(err);
  }
});

//Users booking

router.post("/bookevent/:eventid", fetchUser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");

    const bookevent = new BookEvent({
      user_id: userId,
      event_id: req.params.eventid,
      email: user.email,
    });

    const savedEvent = await bookevent.save();
    res.json(savedEvent);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
