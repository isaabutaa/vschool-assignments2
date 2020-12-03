const readlineSync = require("readline-sync")

//  Player information (Name, weapons, health, etc) and Welcome Message

function User(name, discipline, healthPoints, strengthPoints, inventory = []) {
    this.name = name
    this.discipline = discipline
    this.healthPoints = healthPoints
    this.strengthPoints = strengthPoints
    this.inventory = inventory
}

const userName = readlineSync.question("What is your name?\n\n")

console.log(`\nHello, ${userName}. Welcome to Thunder Dome! Here you will commence your journey to become the strongest martial artist in the world! All the martial artists who are entering this tournament are skilled, just like you, ${userName}, but you are all far from your potential. Defeat your opponents one by one, learn to control your body and mind, and see how powerful you can become!`)

const disciplines = ["Capoeira", "Muay Thai", "Wrestling", "Boxing", "Brazilian Jiu Jitsu", "Karate", "Body building", "Judo"]
const disciplineIndex = readlineSync.keyInSelect(disciplines, "Choose your discipline!")
const disciplineChoice = disciplines[disciplineIndex]

console.log(`You chose ${disciplineChoice}. Very nice.`)

const player = new User(userName, disciplineChoice, 25, 25)

console.log(`
    \nHere are your player stats to start with: 
    \n\nName: ${player.name}, 
    \nDiscipline: ${player.discipline}, 
    \nHealth points: ${player.healthPoints}, 
    \nStrength points: ${player.strengthPoints}, 
    \nInventory: ${player.inventory}
    \n\n As you progress through the tournament and defeat your opponents, your strength and stamina will increase.`)

// Opponent information

const opponents = [
    {
        name: "Vegeta",
        discipline: "Sayan Warrior Tradition",
        healthPoints: 25,
        strengthPoints: 35,
        inventory: ["Battle Armor", "health boost"]
    },
    {
        name: "Yujiro Hanma",
        discipline: "Everything",
        healthPoints: 50,
        strengthPoints: 50,
        inventory: ["health boost", "Yujiro Hanma technique"]
    },
    {
        name: "Muhammad Ali",
        discipline: "Boxing",
        healthPoints: 50,
        strengthPoints: 55,
        inventory: ["heavyweight champion belt", "boxing gloves"]
    },
    {
        name: "George St. Pierre",
        discipline: "Mixed Martial Arts",
        healthPoints: 65,
        strengthPoints: 75,
        inventory: ["health boost"]
    },
    {
        name: "Bruce Lee",
        discipline: "Jeet Kune Do",
        healthPoints: 100,
        strengthPoints: 100,
        inventory: ["Bruce Lee-level mastery"]
    }
]

// Game functions
// attack points, player move, opponent move
let playerAnswer
function playerMove() {
    playerAnswer = readlineSync.keyInSelect(["Face Opponent", "See Stats"], "What's your next move?", {cancel: "Quit Game."})
}

let attackPts
function attack(person) {
    attackPts = Math.floor(Math.random() * person.strengthPoints)
}

// let opponentMove

// Global variables

let gameOver = false

// Gameplay

while(!gameOver && opponents.length > 1) {
    playerMove()
    if(playerAnswer === 0) {
        console.log(`Get ready to face your next opponent, ${opponents[0].name}!`)
    } else if(playerMove === 1) {
        console.log(player)
    } else {
        gameOver = true
        console.log("\nHow could you quit and not see how strong you could've become? Shame... Shame...")
    }
}