import React from 'react'
import Todo from './Todo.js'

export default function TodoList(props){
  return (
    <div className="todo-list">
      {props.todos.map(todo => <Todo key={todo._id} {...todo} />)}
    </div>
  )
}