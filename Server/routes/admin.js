const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../Models/Auth");
const Event = require("../Models/Event");
const CategoryName = require("../Models/CategoryName");
const Admin = require("../Models/Admin");

require("dotenv").config();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const BookEvent = require("../Models/BookEvent");
const JWT_SECRET = process.env.JWT_SECRET;

//var fetchUser = require("../middleware/fetchUser");

//<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>
//Route : 1 display all users

router.post("/userslist", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await User.find().select("-password");

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>
//Route : 2  post event
router.post(
  "/postevent",
  [
    body("address", "Enter a Valid address").isLength({ min: 3 }),
    body("description", "Enter a Valid Email ").isLength({ min: 3 }),
    body("category", "Enter a Valid category ").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      address,
      date,
      description,
      image_url,
      price,
      time,
      title,
      category,
    } = req.body;

    try {
      const event = new Event({
        address,
        date,
        description,
        image_url,
        price,
        time,
        title,
        category,
      });
      const saveEvent = await event.save();
      res.json(saveEvent);
    } catch (err) {
      console.log(err);
    }
  }
);

//<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
//Route : 3 post category

router.post(
  "/postcategory",
  [body("category", "Enter a Valid category ").isLength({ min: 3 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { category } = req.body;

    try {
      const categoryname = new CategoryName({
        category,
      });
      const saveCategory = await categoryname.save();
      res.json(saveCategory);
    } catch (err) {
      console.log(err);
    }
  }
);

//Route-4 Get Category Names
router.get("/categories", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const categories = await CategoryName.find();

    res.send(categories);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//Route-5 create admin account (signup)

router.post(
  "/createadmin",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email ").isEmail(),
    body("password", "Password must be at leasat 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    //If there is any error it will return error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //.findone() checks whether the user with particular email is already in database or not
    try {
      let user = await Admin.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Email address already exists" });
      }
      //To add salt in the password string
      const salt = await bcrypt.genSalt(10);
      const secPasswd = await bcrypt.hash(req.body.password, salt);
      //To create new user
      user = await Admin.create({
        name: req.body.name,
        password: secPasswd,
        email: req.body.email,
        contact: req.body.contact,
      });

      const data = {
        id: user.id,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error occutrd");
    }
  }
);

//<<<<<<<<<<<<>>>>>>>>>>>>
//Route-6  admin login

router.post("/adminlogin", [
  body("email", "Enter a Valid Email ").isEmail(),
  body("password", "Password must be at leasat 5 characters").exists(),
  async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let user = await Admin.findOne({ email: req.body.email });

      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Enter valid credentials(Email not found)" });
      }

      let pass_compare = await bcrypt.compare(req.body.password, user.password);
      if (!pass_compare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Enter valid credentials" });
      }

      const data = {
        id: user.id,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  },
]);

//Route-7 Display all booked events
router.get("/bookedevents", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const events = await BookEvent.find();
    res.send(events);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
