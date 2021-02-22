var form = document.getElementById("airline-form"); // spelling issue, and ID should be Id
var submit = document.getElementById("submit"); // ID should be Id, submit should have "" around
var query = document.querySelector; // not needed?

function formAlert(e) { // parentheses, not curly braces
    e.preventDefault()
    var firstName = form.elements["first-name"].value; // change to first-name
    var lastName = form.elements["last-name"].value; // change to last-name
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = []; // should be array, not obj
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value); // diet.push, remove 'var'
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert); // capital A formAlert