// get all todos
function getTodos() {
    
    axios.get("https://api.vschool.io/ragnarlothbrok/todo")
    .then(res => {
            const todoItems = document.getElementById("todo-items")

            for(let i = 0; i < res.data.length; i++) {
                const todoCard = document.createElement("div")
                todoCard.className = "todo-card"
                const todoTitle = document.createElement("h3")
                todoTitle.className = "todo-title"
                const todoDescription = document.createElement("p")
                todoDescription.className = "todo-description"
                const editBtn = document.createElement("button")
                editBtn.textContent = "Edit"
                editBtn.className = "btn edit-btn"
                todoTitle.textContent = res.data[i].title
                todoDescription.textContent = res.data[i].description
                todoCard.appendChild(todoTitle)
                todoCard.appendChild(todoDescription)
                todoCard.appendChild(editBtn)
                todoItems.appendChild(todoCard)
                
            }
        })
        .catch(err => console.log(err))
}

getTodos()

// add new todos

function addTodo(e) {
    e.preventDefault()
    const todoForm = document.todoForm
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value
    }

    axios.post("https://api.vschool.io/ragnarlothbrok/todo", newTodo)
        .then(res => {
            const newItem = document.createElement("p")
            newItem.textContent = res.data.title
            document.getElementById("todo-items").appendChild(newItem)
        })
    
    todoForm.title.value = ""
    todoForm.description.value = ""
}

document.todoForm.addEventListener("submit", addTodo)