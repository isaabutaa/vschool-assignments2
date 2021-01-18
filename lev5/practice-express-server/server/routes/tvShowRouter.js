const express = require("express")
const tvShowRouter = express.Router()
const {v4: uuidv4} = require("uuid")

// Fake data
const tvShows = [
    {
        title: "Vikings",
        genre: "Action",
        _id: uuidv4()
    },
    {
        title: "My Hero Academia",
        genre: "Anime",
        _id: uuidv4()
    },
    {
        title: "Stranger Things",
        genre: "Sci-fi/Fantasy",
        _id: uuidv4()
    }
]

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
    .get((req, res) => {  // get all
        res.send(tvShows)
    })
    .post((req, res) => { //post one
        const newShow = req.body
        newShow._id = uuidv4()
        tvShows.push(newShow)
        res.send(newShow)
    })

tvShowRouter.route("/:showId") 
    .get((req, res) => {  // get by _id
        const showId = req.params.showId
        const foundShow = tvShows.find(show => show._id === showId)
        res.send(foundShow)
    })
    .delete((req, res) => {
        const showId = req.params.showId
        const showIndex = tvShows.findIndex(show => show._id === showId)
        let showTitle = tvShows[showIndex].title
        tvShows.splice(showIndex, 1)
        res.send(`Successfully deleted ${showTitle} from the database.`)
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