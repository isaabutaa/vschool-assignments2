import {useState, useEffect} from "react"
import axios from "axios"
import Todo from "./Todo"

export default function TodosList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("/todos")
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>Todos:</h3>
            {todos.map(todo => <Todo key={todo._id} {...todo} />)}
        </div>
    )
}