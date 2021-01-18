import React, {useState, useEffect} from "react"
import Movie from "./Movie.js"
import AddMovieForm from "./AddMovieForm"
import axios from "axios"

export default function MovieList(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    function getMovies() {
        axios.get("/movies")
            .then(res => {
                console.log("got movies")
                setMovies(res.data)
            })
            .catch(err => console.log(err))
    }

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Movies:</h3>
            <AddMovieForm addMovie={addMovie} />
            {movies.map(movie => <Movie key={movie._id} {...movie} />)}
        </div>
    )
}