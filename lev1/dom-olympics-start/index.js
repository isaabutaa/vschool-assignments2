const clearBtn = document.getElementById("clear-button")
const messages = document.getElementsByClassName("message")
const form = document.message 
const userInput = document.getElementById("input")

function changeText() {
    for(let i = 0; i < messages.length; i++) {
        if(i === 0) {
            messages[i].innerHTML = "hello!"
        } else if(i === 1) {
            messages[i].innerHTML = "hi there! how are you?"
        } else if (i === 2) {
            messages[i].innerHTML = "I'm good thanks. And you?"
        } else {
            messages[i].innerHTML = "Sooo good. Thanks for asking. :)"
        }
    }
}

changeText()

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let newMsg = document.createElement("div")
    newMsg.className = "message"
    newMsg.innerHTML = userInput.value
    messages[0].parentNode.appendChild(newMsg)
    for(let i = 0; i < messages.length; i++) {
        if(i % 2 === 0) {
            messages[i].classList.add("left")
        } else {
            messages[i].classList.add("right")
        }
    }
    userInput.value = ""
})

clearBtn.addEventListener("click", () => {
    while(messages[0]) {
        messages[0].parentNode.removeChild(messages[0])
    }
})