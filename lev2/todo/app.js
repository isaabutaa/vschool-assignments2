getTodos()

document.todoForm.addEventListener("submit", addTodo)

// get todos function
function getTodos() {
    axios.get("https://api.vschool.io/ragnarlothbrok/todo")
    .then(res => {
        createTodos(res)
    })
    .catch(err => console.log(err))
}

// add new todos function for form

function addTodo(e) {
    e.preventDefault()
    const todoForm = document.todoForm
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value
    }

    axios.post("https://api.vschool.io/ragnarlothbrok/todo", newTodo)
        .then(res => {
            document.getElementById("todo-items").innerHTML = ""
            getTodos()
        })
    
    todoForm.title.value = ""
    todoForm.description.value = ""
}

// create todos
function createTodos(res) {
    for(let i = 0; i < res.data.length; i++) {
        const todoItems = document.getElementById("todo-items")
        const todoCard = document.createElement("div")
        todoCard.className = "todo-card"

        const todoTitle = document.createElement("h3")
        todoTitle.className = "todo-title"
        todoTitle.textContent = res.data[i].title

        const todoDescription = document.createElement("p")
        todoDescription.className = "todo-description"
        todoDescription.textContent = res.data[i].description

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.className = "btn edit-btn"

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.className = "btn delete-btn"

        const completeBtn = document.createElement("button")
        completeBtn.textContent = "Mark Complete"
        completeBtn.className = "btn complete-btn"
        
        todoCard.appendChild(todoTitle)
        todoCard.appendChild(todoDescription)
        todoCard.appendChild(editBtn)
        todoCard.appendChild(deleteBtn)
        todoCard.appendChild(completeBtn)
        todoItems.appendChild(todoCard)

        if(res.data[i].completed) {
            todoCard.style.backgroundColor = "gold"
            completeBtn.style.display = "none"
        }

        // edit todos function
        editBtn.addEventListener("click", () => {
            todoTitle.style.display = "none"
            todoDescription.style.display = "none"
            editBtn.style.display = "none"

            const editForm = document.createElement("form")
            editForm.className = "edit-form"
            todoCard.appendChild(editForm)
            
            const titleEdit = document.createElement("input")
            titleEdit.value = todoTitle.textContent
            editForm.appendChild(titleEdit)

            const descriptionEdit = document.createElement("input")
            descriptionEdit.value = todoDescription.textContent
            editForm.appendChild(descriptionEdit)

            const submitEditBtn = document.createElement("button")
            submitEditBtn.textContent = "Submit Edit"
            submitEditBtn.className = "btn submit-edit-btn"
            editForm.appendChild(submitEditBtn)

            // submit Edit function
            editForm.addEventListener("submit", (e) => {
                e.preventDefault()

                const editedTodo = {
                    title: titleEdit.value,
                    description: descriptionEdit.value
                }

                axios.put(`https://api.vschool.io/ragnarlothbrok/todo/${res.data[i]._id}`, editedTodo)
                    .then(res => {
                        todoTitle.style.display = "block"
                        todoDescription.style.display = "block"
                        editBtn.style.display = "block"

                        editForm.style.display = "none"

                        document.getElementById("todo-items").innerHTML = ""

                        getTodos()
                    })
                    .catch(err => console.log(err))
            })
        })

        // delete todo function
        deleteBtn.addEventListener("click", () => {
            axios.delete(`https://api.vschool.io/ragnarlothbrok/todo/${res.data[i]._id}`)
                .then(res => {
                    document.getElementById("todo-items").innerHTML = ""
                    getTodos()
                })
                .catch(err => console.log(err))
        })

        // mark item as complete function
        completeBtn.addEventListener("click", () => {
            const completedTodo = {
                completed: true
            }

            axios.put(`https://api.vschool.io/ragnarlothbrok/todo/${res.data[i]._id}`, completedTodo)
                .then(res => {
                    console.log(res.data)
                    todoCard.style.backgroundColor = "gold"
                    completeBtn.style.display = "none"
                })
                .catch(err => console.log(err))
        })
    }
}

