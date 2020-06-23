const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users", //reference the users model
  },
  title: {
    type: String,
  },
  type: {
    //type of issue that needs to be resolved (error, implementation)
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  importance: {
    //integer value that will mark the relative importance as marked by poster
    //higher is more important
    type: Number,
    //required: true,
  },
  pinned: {
    //Should only be changeable by the owner of the post
    type: Boolean,
  },

  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resolved: {
    type: Boolean,
  },
  repost: {
    type: Boolean,
  },
  link: {
    type: String,
  },
  likes: [
    {
      //includes objects with users defined so that each user can only like once (note: this is just extra info for functionality to be included somewhere else)
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      //includes objects with users defined so that each user can only like once (note: this is just extra info for functionality to be included somewhere else)
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      pinned: {
        type: Boolean,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      like: [
        {
          //includes objects with users defined so that each user can only like once (note: this is just extra info for functionality to be included somewhere else)
          user: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
        },
      ],
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Post = mongoose.model("post", PostSchema);
