const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

// Routes

// get all
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie) {
        const err = new Error(`Cannot find id: ${movieId}`)
        return next(err)
    }
    res.send(foundMovie)
})

// get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    const movieGenre = req.query.genre
    const genreMovies = movies.filter(movie => movie.genre === movieGenre)
    if(!movieGenre) {
        const err = new Error("Cannot search: No genre entered")
        return next(err)
    }
    res.send(genreMovies)
})

// post one
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// delete one
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedMovie.title} from the movie database.`)
    })
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})

module.exports = movieRouter