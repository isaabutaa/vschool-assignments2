import {useState} from "react"

export default function AddMovieForm(props) {
    const initInputs = {title: "", genre: ""}
    const [userInputs, setUserInputs] = useState(initInputs)

    function handleChange(event) {
        const {name, value} = event.target
        setUserInputs(prevUserInputs => ({...prevUserInputs, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.addMovie(userInputs)
        setUserInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={userInputs.title} 
                placeholder="Title" 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="genre" 
                value={userInputs.genre} 
                placeholder="Genre" 
                onChange={handleChange} 
            />
            <button>Add movie</button>
        </form>
    )
}