const express = require("express")
const tvShowRouter = express.Router()
const TVShow = require("../models/tvShow.js")

// Routes

// tvShowRouter.get("/", (req, res) => {
//     res.send(tvShows)
// })

// tvShowRouter.post("/", (req, res) => {
//     const newShow = req.body
//     newShow._id = uuidv4()
//     tvShows.push(newShow)
//     res.send(`${newShow.title} has been added to the database`)
// })

// An alternative way to write the routes:

tvShowRouter.route("/")
    .get((req, res, next) => {  // get all
        TVShow.find((err, shows) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(shows)
        })
    })
    .post((req, res, next) => { //post one
        const newShow = new TVShow(req.body)
        newShow.save((err, savedShow) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedShow)
        })
    })

tvShowRouter.route("/:showId") 
    .get((req, res) => {  // get by _id
        const showId = req.params.showId
        const foundShow = tvShows.find(show => show._id === showId)
        res.send(foundShow)
    })
    .delete((req, res, next) => {
        TVShow.findOneAndDelete({ _id: req.params.showId }, (err, deletedShow) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted ${deletedShow.title} from the TV Show database`)
        })
    })
    .put((req, res) => {
        const showId = req.params.showId
        const showIndex = tvShows.findIndex(show => show._id === showId)
        const updatedShow = Object.assign(tvShows[showIndex], req.body)
        res.send(updatedShow)
    })

tvShowRouter.route("/search/genre") 
    .get((req, res) => { // get by genre
    const genre = req.query.genre
    const genreShows = tvShows.filter(show => show.genre === genre)
    res.send(genreShows)
    })

module.exports = tvShowRouter