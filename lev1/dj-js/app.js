const blue = document.getElementById("blue")
const red = document.getElementById("red")
const green = document.getElementById("green")

blue.addEventListener("mouseover", function() {
    blue.style.backgroundColor = "blue"
    blue.style.color = "white"

    blue.addEventListener("mouseout", function() {
        blue.style.backgroundColor = "white"
        blue.style.color = "black"
    })
})
red.addEventListener("mouseover", function() {
    red.style.backgroundColor = "red"
    red.style.color = "white"

    red.addEventListener("mouseout", function() {
        red.style.backgroundColor = "white"
        red.style.color = "black"
    })
})
green.addEventListener("mouseover", function() {
    green.style.backgroundColor = "green"
    green.style.color = "white"

    green.addEventListener("mouseout", function() {
        green.style.backgroundColor = "white"
        green.style.color = "black"
    })
})