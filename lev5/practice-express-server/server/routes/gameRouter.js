const express = require("express")
const gameRouter = express.Router()
const Game = require("../models/game.js")

// Routes

// get all and post one
gameRouter.route("/")
    .get((req, res, next) => {
        Game.find((err, games) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(games)
        })
    })
    .post((req, res, next) => {
        const newGame = new Game(req.body)
        newGame.save((err, savedGame) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedGame)
        })
    })

// get by id and delete
gameRouter.route("/:gameId")
    .get((req, res) => {
        const gameId = req.params.gameId
        const foundGame = games.find(game => game._id === gameId)
        res.send(foundGame)
    })
    .delete((req, res, next) => {
        Game.findOneAndDelete({ _id: req.params.gameId }, (err, deletedGame) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted ${deletedGame.title} from game database`)
        })
    })
    .put((req, res, next) => {
        Game.findOneAndUpdate(
            { _id: req.params.gameId },
            req.body,
            { new: true },
            (err, updatedGame) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedGame)
            }
        )
    })

// get by type
gameRouter.get("/search/type", (req, res) => {
    const gameType = req.query.type
    const filteredGames = games.filter(game => game.type === gameType)
    res.send(filteredGames)
})

module.exports = gameRouter