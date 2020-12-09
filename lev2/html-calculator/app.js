const addForm = document["add-form"]
const subtractForm = document["subtract-form"]
const multiplyForm = document["multiply-form"]
const divideForm = document["divide-form"]

addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstNumber = addForm["first-number"].value
    const secondNumber = addForm["second-number"].value
    const sum = Number(firstNumber) + Number(secondNumber)
    const div = document.getElementById("addition")
    const h3 = document.createElement("h3")
    h3.textContent = sum
    div.appendChild(h3)
    addForm["first-number"].value = ""
    addForm["second-number"].value = ""
})

subtractForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstNumber = subtractForm["first-number"].value
    const secondNumber = subtractForm["second-number"].value
    const remainder = Number(firstNumber) - Number(secondNumber)
    const div = document.getElementById("subtraction")
    const h3 = document.createElement("h3")
    h3.textContent = remainder
    div.appendChild(h3)
    subtractForm["first-number"].value = ""
    subtractForm["second-number"].value = ""
})

multiplyForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstNumber = multiplyForm["first-number"].value
    const secondNumber = multiplyForm["second-number"].value
    const product = Number(firstNumber) * Number(secondNumber)
    const div = document.getElementById("multiplication")
    const h3 = document.createElement("h3")
    h3.textContent = product
    div.appendChild(h3)
    multiplyForm["first-number"].value = ""
    multiplyForm["second-number"].value = ""
})

divideForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstNumber = divideForm["first-number"].value
    const secondNumber = divideForm["second-number"].value
    const quotient = Number(firstNumber) / Number(secondNumber)
    const div = document.getElementById("division")
    const h3 = document.createElement("h3")
    h3.textContent = quotient
    div.appendChild(h3)
    divideForm["first-number"].value = ""
    divideForm["second-number"].value = ""
})