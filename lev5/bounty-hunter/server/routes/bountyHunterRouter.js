const express = require("express")
const bountyHunterRouter = express.Router()
const {v4: uuidv4} = require("uuid")

// Fake data
bounties = [
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        isAlive: true,
        bountyAmout: 5000,
        type: "jedi",
        _id: uuidv4()
    },
    {
        firstName: "Sarumon",
        lastName: "the White",
        isAlive: true,
        bountyAmout: 7000,
        type: "sorcerer",
        _id: uuidv4()
    },
    {
        firstName: "Magneto",
        lastName: null,
        isAlive: true,
        bountyAmout: 10000,
        type: "mutant",
        _id: uuidv4()
    }
]

// routes
bountyHunterRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} ${newBounty.lastName} has been added to your list of bounties.`)
    })

bountyHunterRouter.route("/:bountyId")
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const bountyName = bounties[bountyIndex].firstName + " " + bounties[bountyIndex].lastName
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted ${bountyName} from list of bounties.`)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updateObj = req.body
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObj)
        res.send(updatedBounty)
    })

// export module
module.exports = bountyHunterRouter