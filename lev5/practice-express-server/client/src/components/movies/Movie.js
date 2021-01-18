import {useState} from "react"
import AddMovieForm from "./AddMovieForm"

export default function Movie(props) {
    const {title, genre, _id, editMovie} = props
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            {
                !toggle ?
                    <>
                        <p>Title: {title}</p>
                        <p>Genre: {genre}</p>
                        <button onClick={() => props.deleteMovie(_id)}>Delete</button>
                        <button onClick={() => setToggle(!toggle)}>Edit</button>
                    </>
                :
                    <>
                        <AddMovieForm 
                            btnText="submit edit" 
                            title={title} 
                            genre={genre}
                            _id={_id} 
                            submit={editMovie}
                        />
                        <button onClick={() => setToggle(!toggle)}>cancel</button>
                    </>
            }
        </div>
    )
}