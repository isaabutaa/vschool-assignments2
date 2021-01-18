import {useState, useEffect} from "react"
import axios from "axios"
import Show from "./Show.js"

export default function ShowsList() {
    const [tvShows, setTvShows] = useState([])
    useEffect(() => {
        axios.get("/tvshows")
            .then(res => {
                console.log("got tv shows")
                setTvShows(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3>TV Shows:</h3>
            {tvShows.map(show => <Show key={show._id} {...show} />)}
        </div>
    )
}
