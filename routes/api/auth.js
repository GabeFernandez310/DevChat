/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO AUTHORIZATION*/

//imports
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { compare } = require("bcryptjs");

/*
@ROUTE          GET api/auth
@DESCRIPTION    Retrieve user info
@ACCESS         private
*/

router.get("/", auth, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id).select("-password");
    res.json(currentUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  res.send("auth route");
});

/*
@ROUTE          POST api/auth/login
@DESCRIPTION    Authenticate user and generate token
@ACCESS         public
*/

router.post(
  "/login",
  [
    check("email", "A valid email is required").isEmail(),
    check("password", "A password is required").exists(),
  ],
  async (req, res) => {
    //check for any errors in form input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //check if inputted email already has an account
      let currentUser = await User.findOne({ email });
      if (!currentUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      isMatch = await compare(password, currentUser.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      isMatch;
      //generate a user's jsonwebtoken for this session
      const payload = {
        user: {
          id: currentUser.id,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
