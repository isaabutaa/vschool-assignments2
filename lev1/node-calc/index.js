const readlineSync = require("readline-sync")

const num1 = readlineSync.questionInt("Please enter a number:\n")
const num2 = readlineSync.questionInt("Please enter another number:\n")
const operation = readlineSync.keyInSelect(["add", "subtract", "multiply", "divide"], "Which math operation?")

function solve(num1, num2) {
    if(operation === 0) {
        return Number(num1) + Number(num2)
    } else if(operation === 1) {
        return Number(num1) - Number(num2)
    } else if(operation === 2) {
        return Number(num1) * Number(num2)
    } else {
        return Number(num1) / Number(num2)
    }
}

console.log(solve(num1, num2))