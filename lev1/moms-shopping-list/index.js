const form = document.addItem
const formInput = form.title
const itemList = document.getElementById("list")

form.addEventListener("submit", addListItem)

function addListItem(e) {
    e.preventDefault()
    const newListItem = document.createElement("li")
    const itemDiv = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    itemDiv.textContent = formInput.value
    editBtn.textContent = "Edit"
    deleteBtn.textContent = "X"
    newListItem.append(itemDiv, editBtn, deleteBtn)
    itemList.append(newListItem)
    formInput.value = ""

    editBtn.addEventListener("click", function() {
        const editForm = document.createElement("form")
        const editInput = document.createElement("input")
        editInput.value = itemDiv.textContent
        const saveEditBtn = document.createElement("button")
        saveEditBtn.textContent = "Save Edit"

        itemDiv.style.display = "none"
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"
        editForm.append(editInput, saveEditBtn)
        newListItem.append(editForm)

        saveEditBtn.addEventListener("click", function() {
            itemDiv.textContent = editInput.value
            itemDiv.style.display = "block"
            editBtn.style.display = "inline-block"
            deleteBtn.style.display = "inline-block"
            editForm.remove()
        })
    })

    deleteBtn.addEventListener("click", function() {
        newListItem.remove()
    })

}