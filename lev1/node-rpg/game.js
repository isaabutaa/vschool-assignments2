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
function willProceed() {
    const playerChoices = ["Face Opponent", "See Stats"]
    const moveIndex = readlineSync.keyInSelect(playerChoices, "What's your next move?", {cancel: "Quit Game."})
    playerAnswer = playerChoices[moveIndex]
}

let attackPts
function attack(person) {
    attackPts = Math.floor(Math.random() * person.strengthPoints)
    person.healthPoints -= attackPts
}

let battleMove
function playerMove() {
    const battleChoices = ["Attack", "See health points"]
    const battleChoiceIndex = readlineSync.keyInSelect(battleChoices, "It's your turn to attack, or give up.", {cancel: "Surrender"})
    battleMove = battleChoices[battleChoiceIndex]
}

// let opponentMove

// Global variables

let gameOver = false

// Gameplay

while(!gameOver) {
    willProceed()
    if(playerAnswer === "Face Opponent") {
        console.log(`Get ready to face your next opponent, ${opponents[0].name}!`)
        while(opponents[0].healthPoints > 0 && player.healthPoints > 0 && !gameOver) {
            playerMove()
            if(battleMove === "Attack") {
                attack(opponents[0])
                if(opponents[0].healthPoints < 0) {
                    if(opponents.length < 1) {
                        console.log(`Congratulations, ${player.name}! You have defeated all of your opponents! You are now the strongest martial artist. That is, until someone stronger comes along.`)
                        gameOver = true
                    }
                    console.log(`Congratulations! You defeated your opponent ${opponents[0].name}. Let's get ready for your next opponent.`)
                    opponents.shift()
                } else if(player.healthPoints < 0) {
                    console.log(`${player.name}, you have been defeated. GAME OVER.`)
                    gameOver = true
                }
            } else if(battleMove === "See health points") {
                console.log(`Your current HP is ${player.healthPoints}.`)
                playerMove()
            } else {
                console.log("You have surrendered and quit the game.")
                gameOver = true
            }
        }
    } else if(playerAnswer === "See Stats") {
        console.log(`
        \nHere are your player stats to start with: 
        \nName: ${player.name}, 
        Discipline: ${player.discipline}, 
        Health points: ${player.healthPoints}, 
        Strength points: ${player.strengthPoints}, 
        Inventory: ${player.inventory}`)
    } else {
        gameOver = true
        console.log("\nHow could you quit and not see how strong you could've become? Shame... Shame...")
    }
}