const express = require('express')
const cors = require('cors')
const app = express()
require("./models/dbconfig")
const postsRoutes = require("./routes/postsController")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
app.use('/posts', postsRoutes)
app.listen(5500, () => console.log('server started on port 5500, listening...'));