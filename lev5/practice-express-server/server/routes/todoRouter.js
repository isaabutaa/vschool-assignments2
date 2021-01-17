const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

// fake data
const todos = [
    {
        name: "Read book",
        description: "Finish first chapter of 'Man's Search for Meaning'",
        isCompleted: false,
        _id: uuidv4()
    },
    {
        name: "Exercise",
        description: "Go to the gym and get your groove on",
        isCompleted: false,
        _id: uuidv4()
    },
    {
        name: "Family call",
        description: "Call Sis and wish her a happy birthday",
        isCompleted: false,
        _id: uuidv4()
    }
]

// routes
todoRouter.route("/")
    .get((req, res) => {
    res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id === uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the todo list.`)
    })

// routes by id
todoRouter.route("/:todoId")
    .get((req, res) => {
        res.send(todos.find(todo => todo._id === req.params.todoId))
    })
    .put((req, res) => {
        const index = todos.findIndex(todo => todo._id === req.params.todoId)
        const updatedTodo = Object.assign(todos[index], req.body)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const index = todos.findIndex(todo => todo._id === req.params.todoId)
        const name = todos[index].name
        todos.splice([index], 1)
        res.send(`Successfully deleted ${name} from the todo list`)
    })




module.exports = todoRouter