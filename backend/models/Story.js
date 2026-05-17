const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({

    title:String,

    category:String,

    content:String,

    image:String,

    era:String

},{timestamps:true});

module.exports =
mongoose.model("Story",storySchema);