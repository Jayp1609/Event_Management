const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");
const { body, validationResult } = require("express-validator");

//To add event
router.post(
  "/addEvent",
  [
    body("address", "Enter a Valid address").isLength({ min: 3 }),

    body("description", "Enter a Valid Email ").isLength({ min: 3 }),
    body("tag", "Enter a Valid Email ").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { address, date, description, image_url, price, time, title, tag } =
      req.body;

    try {
      const category = new Category({
        address,
        date,
        description,
        image_url,
        price,
        time,
        title,
        tag,
      });
      const saveEvent = await category.save();
      res.json(saveEvent);
    } catch (err) {
      console.log(err);
    }
  }
);

//Route for wedding event
router.get("/wedding", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const details = await Category.find({ tag: "wedding" });
    res.json(details);
  } catch (err) {
    console.log(err);
  }
});

//Route for sports event
router.get("/sports", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const details = await Category.find({ tag: "sports" });
    res.json(details);
  } catch (err) {
    console.log(err);
  }
});

//Route for birthday party
router.get("/birthday", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const details = await Category.find({ tag: "birthday" });
    res.json(details);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
