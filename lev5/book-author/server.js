const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to database
mongoose.connect("mongodb://localhost:27017/book_author_db", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to book_author_db!!!"))
    
// Routes
app.use("/books", require("./routes/bookRouter.js"))
app.use("/authors", require("./routes/authorRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

// Listen to server
app.listen(9000, () => console.log("Server is running on Port 9000"))
