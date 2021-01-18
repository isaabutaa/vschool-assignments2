import {useState, useEffect} from "react"
import axios from "axios"
import Show from "./Show.js"
import AddShowForm from "./AddShowForm"

export default function ShowsList() {
    const [tvShows, setTvShows] = useState([])
    useEffect(() => {
        getShows()
    }, [])

    function getShows() {
        axios.get("/tvshows")
            .then(res => {
                console.log("got tv shows")
                setTvShows(res.data)
            })
            .catch(err => console.log(err))
    }

    function addShow(newShow) {
        axios.post("/tvshows", newShow)
            .then(res => {
                setTvShows(prevShows => [...prevShows, res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>TV Shows:</h3>
            <AddShowForm addShow={addShow} />
            {tvShows.map(show => <Show key={show._id} {...show} />)}
        </div>
    )
}
