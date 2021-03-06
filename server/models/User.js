import mongoose from "mongoose";
// import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  user_id: String,
  user_name: String,
  user_pw: String,
  facebookId: Number,
  githubId: Number,
  /*
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
  */
});

// UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
