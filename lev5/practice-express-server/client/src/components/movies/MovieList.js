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

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
            .then(res => {
                console.log(res.data)
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function editMovie(updateObj, movieId) {
        axios.put(`/movies/${movieId}`, updateObj)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id === movieId ? res.data : movie))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Movies:</h3>
            <AddMovieForm btnText="add movie" submit={addMovie} />
            {movies.map(movie => 
                <Movie 
                    key={movie._id} 
                    {...movie} 
                    deleteMovie={deleteMovie} 
                    editMovie={editMovie}
                />)}
        </div>
    )
}