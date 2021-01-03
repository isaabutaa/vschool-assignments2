const readline = require("readline-sync")

const input = readline.question("What phrase or sentence do you want to encrypt?\n").toLowerCase()
const shift = parseInt(readline.question("\nHow many letters ahead would you like to shift by? Please only enter a numeral character.\n"))

// this was my solution from 2019. I found some solutions online and kind of meshed it into what I was already trying to do. Still, I need to understand how to solve this more efficiently.

let cipheredString = ""
function cipher(string, num){
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            let code = string.charCodeAt(i)
            code -= 97
            // console.log("1:", code)
            code = (code + num) % 26
            // console.log("2:", code)
            code += 97
            // console.log("3:", code)
            cipheredString += String.fromCharCode(code)
        } else {
            cipheredString += string[i]
        }
    }
    return cipheredString
}

console.log(cipher(input, shift))

// const string = "v school is awesome!"
// const stringArr = string.split("")
// console.log(stringArr)
// console.log(input)
// console.log(shift)

// let alphabet = {}
// for(let i = 0; i < 26; i++) {
//     alphabet[i] = String.fromCharCode(97 + i)
// }

// console.log(alphabet)

// function cipher() {
//     for(let i = 0; i < stringArr.length; i++) {
//         for(let j = 0; j < alphabet.length; j++) {
//             if(stringArr[i] === alphabet[j]) {
//                 console.log('kjhkjh')
//             }
//         }
//     }
// }
// cipher()