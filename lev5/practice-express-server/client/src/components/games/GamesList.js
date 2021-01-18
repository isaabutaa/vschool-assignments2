import {useState, useEffect} from "react"
import axios from "axios"
import Game from "./Game"

export default function GamesList() {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get("/games")
            .then(res => {
                setGames(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>Games:</h3>
            {games.map(game => <Game key={game._id} {...game} />)}
        </div>
    )
}