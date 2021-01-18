const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

// Fake data
const movies = [
    {   title: "Harry Potter and the Sorceror's Stone", 
        genre: "Fantasy",
        _id: uuidv4()
    },
    {   title: "Lord of the Rings: The Fellowship of the Ring", 
        genre: "Fantasy",
        _id: uuidv4()
    },
    {   title: "John Wick", 
        genre: "Action",
        _id: uuidv4()
    },
    {   title: "Atomic Blonde", 
        genre: "Action",
        _id: uuidv4()
    },
    {
        title: "Mad Max: Fury Road",
        genre: "Sci-fi",
        _id: uuidv4()
    }
]

// Routes

// get all
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// get one
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// get by genre
movieRouter.get("/search/genre", (req, res) => {
    const movieGenre = req.query.genre
    const genreMovies = movies.filter(movie => movie.genre === movieGenre)
    res.send(genreMovies)
})

// post one
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(newMovie)
})

// delete one
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const movieTitle = movies[movieIndex].title
    movies.splice(movieIndex, 1)
    res.send(`Successfully deleted ${movieTitle} from the database of movies.`)
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})

module.exports = movieRouter