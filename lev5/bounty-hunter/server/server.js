const express = require("express")
const app = express()
const morgan = require("morgan")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/bounties", require("./routes/bountyHunterRouter.js"))

// server listening
app.listen(9000, () => {
    console.log("Server is running on Port 9000")
})