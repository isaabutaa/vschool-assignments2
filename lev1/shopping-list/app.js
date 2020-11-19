const header = document.getElementById("header")
header.textContent = "Shopping List"

const userInput = document.getElementsByTagName("input")[0].value
const addBtn = document.getElementById("add-btn")
const shoppingList = document.getElementById("shopping-list")

function addListItem() {
    const newItem = document.createElement("li")
    newItem.textContent = userInput
    shoppingList.append(newItem)
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(userInput)
})

