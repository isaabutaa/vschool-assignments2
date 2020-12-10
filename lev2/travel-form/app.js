const form = document.form

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // values
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const gender = form.gender.value
    const destination = form.destination.value
    const diet = []

    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diet.push(form.diet[i].value)
        }
    }

    alert(`Name: ${firstName} ${lastName} \nGender: ${gender} \nDestination: ${destination} \nDiet Preference: ${diet.join("")}`)

})