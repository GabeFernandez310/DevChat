/*HOLDS ALL ROUTES FOR API BACK-END FOR REQUESTS RELATED TO POSTS*/

//imports
const Post = require("../../models/Post");
const User = require("../../models/User");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

/*
@ROUTE          GET api/posts/
@DESCRIPTION    Retrieve all posts
@ACCESS         public
*/

router.get("/", async (req, res) => {
  try {
    const { byImportance, byLikes } = req.body;
    let posts = await Post.find();

    //add sorting and filtering

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/*
@ROUTE          GET api/posts/:id
@DESCRIPTION    Retrieve a post by id
@ACCESS         public
*/

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let post = await Post.findById({ _id: id });

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/*
@ROUTE          POST api/posts
@DESCRIPTION    Create a new post
@ACCESS         private
*/

router.post(
  "/",
  [
    auth,
    check("text", "A problem description is required").not().isEmpty(),
    check("importance", "An importance value is required").not().isEmpty(),
  ],
  async (req, res) => {
    //check for any errors in form input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, type, text, code, importance, pinned } = req.body;

      let user = await User.findById({ _id: req.user.id });

      const { name, avatar } = user;

      newPost = new Post({
        user: req.user.id,
        title,
        type,
        text,
        code,
        importance,
        pinned,
        name,
        avatar,
      });

      //save user to database
      await newPost.save();

      res.json({ msg: "Post successfully created" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/*
@ROUTE          POST api/posts/comment/:post_id
@DESCRIPTION    Add comment to the current post
@ACCESS         private
*/

router.post(
  "/comment/:post_id",
  [auth, check("text", "Comment text is required").not().isEmpty()],
  async (req, res) => {
    //check for any errors in form input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //retrieve current post
      const id = req.params.post_id;
      let post = await Post.findById({ _id: id });

      //fill in variables for comment from request body
      const { text, code, pinned } = req.body;

      let user = await User.findById({ _id: req.user.id });

      const { name, avatar } = user;

      newComment = {
        user: req.user.id,
        text: text,
        code: code,
        pinned: pinned,
        name: name,
        avatar: avatar,
      };

      post.comments.splice(0, 0, newComment);
      //save user to database
      await post.save();

      res.json({ msg: "comment successfully created" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
