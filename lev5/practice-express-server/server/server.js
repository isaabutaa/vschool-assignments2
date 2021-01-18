const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware
app.use(express.json()) // looks for a request body and turns it into 'req.body'
app.use(morgan("dev"))

// Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvShowRouter.js"))
app.use("/games", require("./routes/gameRouter.js"))
app.use("/todos", require("./routes/todoRouter.js"))

// Intercepted assignment: // 
/* app.use("/items", require("./routes/itemRouter.js"))

app.get("/items", (req, res) => {
    res.send(req.body)
}) */

// error handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

// Server listen
app.listen(9000, () => {
    console.log("The server is running on PORT 9000")
})