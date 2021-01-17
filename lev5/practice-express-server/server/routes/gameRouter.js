const express = require("express")
const gameRouter = express.Router()
const {v4: uuidv4} = require("uuid")

// Fake data
const games = [
    {
        title: "Dragonball Fighter Z",
        type: "melee",
        _id: uuidv4()
    },
    {
        title: "Horizon Zero Dawn",
        type: "rpg",
        _id: uuidv4()
    },
    {
        title: "Fornite",
        type: "mmo",
        _id: uuidv4()
    },
    {
        title: "Super Smash Bros.",
        type: "melee",
        _id: uuidv4()
    },
    {
        title: "Shadow of the Colossus",
        type: "rpg",
        _id: uuidv4()
    }
]

// Routes

// get all and post one
gameRouter.route("/")
    .get((req, res) => {
        res.send(games)
    })
    .post((req, res) => {
        const newGame = req.body
        newGame._id = uuidv4()
        games.push(newGame)
        res.send(`Added ${newGame.title} to the Database`)
    })

// get by id and delete
gameRouter.route("/:gameId")
    .get((req, res) => {
        const gameId = req.params.gameId
        const foundGame = games.find(game => game._id === gameId)
        res.send(foundGame)
    })
    .delete((req, res) => {
        const gameId = req.params.gameId
        const gameIndex = games.findIndex(game => game._id === gameId)
        let gameTitle = games[gameIndex].title
        games.splice(gameIndex, 1)
        res.send(`Successfully delete ${gameTitle} from the database.`)
    })
    .put((req, res) => {
        const gameId = req.params.gameId
        const gameIndex = games.findIndex(game => game._id === gameId)
        const updatedGame = Object.assign(games[gameIndex], req.body)
        res.send(updatedGame)
    })

// get by type
gameRouter.get("/search/type", (req, res) => {
    const gameType = req.query.type
    const filteredGames = games.filter(game => game.type === gameType)
    res.send(filteredGames)
})

module.exports = gameRouter