const mongoose = require("mongoose")
const PostsModel = mongoose.model(
    "node-api",
    {
       "user": {type : String, required: true},
       "userid": {type : String, required: true},
       "pnl": {type : Number},
    },
    "posts"
)

module.exports = { PostsModel }