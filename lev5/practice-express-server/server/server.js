const express = require("express")
const app = express()

// Fake data

const people = [
    {
        name: "Ragnar Lothbrok",
        location: "Scandinavia"
    },
    {
        name: "Wonder Woman",
        location: "Washington DC"
    },
    {
        name: "Lyra Silvertongue",
        location: "Oxford"
    },
    {
        name: "Harry Potter",
        location: "Hogwarts"
    }
]

app.get("/people", (req, res) => {
    res.send(people)
})

app.listen(9000, () => {
    console.log("The server is running on PORT 9000")
})