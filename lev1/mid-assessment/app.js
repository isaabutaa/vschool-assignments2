const form = document.form
const firstName = form.firstName
const lastName = form.lastName
const list = document.getElementById("list")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const name = document.createElement("li")
    name.textContent = firstName.value + " " + lastName.value
    list.append(name)
    firstName.value = ""
    lastName.value = ""
})