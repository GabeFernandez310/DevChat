/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO USER PROFILE*/

//imports
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

/*
@ROUTE          GET api/profile/
@DESCRIPTION    Retrieve all profiles
@ACCESS         public
*/

router.get("/", async (req, res) => {
  try {
    let profiles = await Profile.find();

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/*
@ROUTE          POST api/profile/me
@DESCRIPTION    create/update a profile
@ACCESS         private
*/

router.post(
  "/me",
  [
    auth,
    check("position", "Your position is required").not().isEmpty(),
    check("skills", "Your position is required").not().isEmpty(),
  ],
  async (req, res) => {
    //check for any errors in form input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //check if user exists
      let profile = await Profile.findOne({ user: req.user.id });
      let user = await User.findById({ _id: req.user.id });
      let { position, skills } = req.body;
      const { name, avatar } = user;

      //split skills into an array
      skills = skills.trim().split(",");

      if (!profile) {
        profile = new Profile({
          user: req.user.id,
          position,
          skills,
          name,
          avatar,
        });
      } else {
        profile.position = position;
        profile.skills = skills;
      }

      //save user to database
      await profile.save();

      res.json({ msg: "Profile successfully updated" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
