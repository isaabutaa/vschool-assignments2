const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo.js")

// routes
todoRouter.route("/")
    .get((req, res, next) => {
        Todo.find((err, todos) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(todos)
        })
    })
    .post((req, res, next) => {
        const newTodo = new Todo(req.body)
        newTodo.save((err, savedTodo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedTodo)
        })
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