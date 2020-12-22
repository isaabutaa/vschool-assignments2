const btn = document.getElementById("btn")

// button even listener to increase count

let count = document.getElementById("count")
count.textContent = 0

function addCount() {
    count.textContent ++
    localStorage.setItem("savedCount", count.textContent)
}

btn.addEventListener("click", addCount)

if(localStorage.getItem("savedCount")) {
    count.textContent = localStorage.getItem("savedCount")
} else {
    count.textContent = 0
}

// setInterval and setTimeout for timer function

const timer = document.createElement("h2")
timer.textContent = 10
document.body.append(timer)

function countDown() {
    timer.textContent -= 1
}

function stopCountDown() {
    clearInterval(intervalID)
    btn.removeEventListener("click", addCount)
}

const intervalID = setInterval(countDown, 1000)

setTimeout(stopCountDown, 10000)