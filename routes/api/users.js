/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO USER*/

//imports
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

/*
@ROUTE          api/users
@DESCRIPTION    main page to display user info
@ACCESS         private
*/
router.get("/", (req, res) => {
  res.send("user route");
});

/*
@ROUTE          api/users
@DESCRIPTION    register a new user
@ACCESS         private
*/
router.post(
  "/",
  [
    check("name", "A name is required").not().isEmpty(),
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "A password longer than 6 characters is required"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //check for any errors in form input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //check if inputted email already has an account
      let newUser = await User.findOne({ email });
      if (newUser) {
        res.status(400).json({ errors: [{ msg: "This user already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      newUser = new User({ name, email, avatar, password });

      //encrypt password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      //save user to database
      await newUser.save();

      //generate a user's jsonwebtoken for this session
      const payload = {
        user: {
          id: newUser.id,
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
