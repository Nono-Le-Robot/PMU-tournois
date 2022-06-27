const mongoose = require("mongoose")
const PostsModel = mongoose.model(
    "node-api",
    {
       "user": {type : String},
       "userid": {type : String},
       "pnl": {type : Number},
    },
    "posts"
)

module.exports = { PostsModel }