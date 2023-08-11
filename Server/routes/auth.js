const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../Models/Auth");
require("dotenv").config();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
var fetchUser = require("../middleware/fetchUser");
const BookEvent = require("../Models/BookEvent");
const Event = require("../Models/Event");
const ContactUs = require("../Models/ContactUs");
//<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
//Route-1 create a user (signup)

router.post(
  "/signup",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email ").isEmail(),
    body("password", "Password must be at leasat 5 characters").isLength({
      min: 5,
    }),
    body("contact", "Enter a Valid Number").isLength(10),
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
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Email address already exists" });
      }
      //To add salt in the password string
      const salt = await bcrypt.genSalt(10);
      const secPasswd = await bcrypt.hash(req.body.password, salt);
      //To create new user
      user = await User.create({
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
//Route-2  user login

router.post("/login", [
  body("email", "Enter a Valid Email ").isEmail(),
  body("password", "Password must be at leasat 5 characters").exists(),
  async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

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

//<<<<<<<<>>>>>>>>>>>>
//route-3 Get user info

router.post("/getuser", fetchUser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//<<<<<<<<<>>>>>>>>>
//route-4 update user

router.put("/updateuser/:id", async (req, res) => {
  updateuser(req, res);
});

function updateuser(req, res) {
  try {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          lastname: req.body.lastname,
          contact: req.body.contact,
          address: req.body.address,
          postcode: req.body.postcode,
          state: req.body.state,
          country: req.body.country,
        },
      },
      { new: true }
    ).then((_doc, err) => {
      if (!err) {
        res.status(200).send("Updated");
      } else {
        console.log("Error during record update : " + err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
//<<<<<<<<<>>>>>>>>>>>>>
//Route-5 forgot_password
router.put(
  "/forgotpass",
  [
    body("email", "Enter a Valid Email ").isEmail(),
    body("password", "Password must be at leasat 5 characters").exists(),
    async (req, res) => {
      let success = false;
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }

      try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
          success = false;
          return res.status(400).json({
            success,
            error: "Enter valid credentials(Email not found)",
          });
        }

        const salt = await bcrypt.genSalt(10);
        const secPasswd = await bcrypt.hash(req.body.password, salt);

        try {
          User.findOneAndUpdate(
            { _id: user._id },
            {
              $set: {
                password: secPasswd,
              },
            },
            { new: true }
          ).then((_doc, err) => {
            if (!err) {
              res.status(200).send("Password Updated");
            } else {
              console.log("Error during record update : " + err);
            }
          });
        } catch (err) {
          console.log(err);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    },
  ],
  async (req, res) => {
    updatepassword(req, res);
  }
);

//Route-6 Delete User

router.delete("/deleteuser/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    User.findOneAndDelete({
      _id: req.params.id,
    }).then((_doc, err) => {
      if (!err) {
        res.status(200).send("User deleted");
      } else {
        console.log("Error during delete operation  : " + err);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//Display Booked Events
router.get("/bookedEvents", fetchUser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");

    const events = await BookEvent.find({ email: user.email });
    res.json(events);
  } catch (err) {
    console.log(err);
  }
});

//Route for booked event display
router.get("/bookedEvents/display/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const events = await Event.findById(req.params.id);
    res.json(events);
  } catch (err) {
    console.log(err);
  }
});

//Route for contact us form
router.post(
  "/contact",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email ").isEmail(),
    body("contact", "Enter a Valid Number").isLength(10),
  ],
  async (req, res) => {
    let success = false;
    //If there is any error it will return error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      const info = await ContactUs.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        country: req.body.country,
      });
      const savedinfo = await info.save();
      res.json(savedinfo);
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
