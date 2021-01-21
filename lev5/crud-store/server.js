const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/crud-store",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the crud-store database")
)

// routes
app.use("/inventory", require("./routes/inventoryRouter.js"))

// error handler
app.use((err, req, res, next) => {
    return res.send({ errMsg: err.message })
})

// listen for server
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})