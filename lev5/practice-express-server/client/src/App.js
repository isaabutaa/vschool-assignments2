import React from "react"
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Homepage from "./components/Homepage.js"
import MovieList from "./components/movies/MovieList.js"
import ShowsList from "./components/tv-shows/ShowsList.js"
import GamesList from "./components/games/GamesList"
import TodosList from "./components/todos/TodosList"

function App() {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route path="/movies"><MovieList /></Route>
                <Route path="/tvshows"><ShowsList /></Route>
                <Route path="/games"><GamesList /></Route>
                <Route path="/todos"><TodosList /></Route>
            </Switch>
            
        </div>
    )
}

export default App