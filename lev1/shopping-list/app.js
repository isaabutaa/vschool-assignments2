const header = document.getElementById("header")
header.classList.add("title")
header.textContent = "Shopping List"

const addBtn = document.getElementById("add-btn")

function addListItem(e) {
    e.preventDefault()

    let userInput = document.getElementById("item").value
    const shoppingList = document.getElementById("shopping-list")
    const newItem = document.createElement("li")
    const completeBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    completeBtn.textContent = "complete"
    completeBtn.style.backgroundColor = "green"
    completeBtn.style.color = "#ffffff"
    completeBtn.style.margin = "0 5px"

    deleteBtn.textContent = "delete"
    deleteBtn.style.backgroundColor = "firebrick"
    deleteBtn.style.color = "#ffffff"

    newItem.style.listStyleType = "none"
    newItem.textContent = userInput + "  "

    newItem.append(completeBtn)
    newItem.append(deleteBtn)
    shoppingList.append(newItem)
    document.getElementById("item").value = ""

    function crossOutItem() {
        newItem.style.textDecorationLine = "line-through"
    }

    function deleteItem() {
        shoppingList.removeChild(newItem)
    }

    completeBtn.addEventListener("click", crossOutItem)

    deleteBtn.addEventListener("click", deleteItem)
}

addBtn.addEventListener("click", addListItem)

