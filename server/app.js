const express = require('express')
const app = express()
app.use(express.json())

const dotenv = require('dotenv')
const path = require("path");
dotenv.config()
const mongoose = require('mongoose')

const magazinRouter = require('./routes/magazineRoute')
const postRouter = require('./routes/postRoute')


app.use('/magazin', magazinRouter)
app.use('/post', postRouter)

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => console.log("connected"))
    .catch((error) => console.log(`cannot connect the error ${error}`))

app.listen(process.env.PORT, () => console.log(`listen to port ${process.env.PORT}`))
