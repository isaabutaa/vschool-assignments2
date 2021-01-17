const express = require("express")
const itemRouter = express.Router()

itemRouter.get("/", (req, res, next) => {
    req.body = {superhero: "Wonder Woman"}
    next()
})

module.exports = itemRouter