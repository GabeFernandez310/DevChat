/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO USER PROFILE*/

//imports
const express = require("express");
const router = express.Router();

/*
@ROUTE          api/profile
@DESCRIPTION    main page to display user info
@ACCESS         private
*/

router.get("/", (req, res) => {
  res.send("profile route");
});

module.exports = router;
