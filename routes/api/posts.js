/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO POSTS*/

//imports
const express = require("express");
const router = express.Router();

/*
@ROUTE          api/posts
@DESCRIPTION    main page to display user info
@ACCESS         private
*/

router.get("/", (req, res) => {
  res.send("post route");
});

module.exports = router;
