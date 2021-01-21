const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/bounty_hunter_db", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to bounty_hunter_db!!!")
)


// routes
app.use("/bounties", require("./routes/bountyHunterRouter.js"))

// error handler
app.use((err, req, res, next) => {
    return res.send({ errMsg: err.message })
})

// server listening
app.listen(9000, () => {
    console.log("Server is running on Port 9000")
})