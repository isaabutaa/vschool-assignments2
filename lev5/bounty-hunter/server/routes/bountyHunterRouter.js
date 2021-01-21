const express = require("express")
const bountyHunterRouter = express.Router()
const Bounty = require("../models/bounty.js")

// routes
bountyHunterRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

bountyHunterRouter.route("/:bountyId")
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .delete((req, res, next) => {
        Bounty.findOneAndDelete(
            { _id: req.params.bountyId },
            (err, deletedBounty) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Deleted ${deletedBounty.firstName} ${deletedBounty.lastName} from the database`)
            }
        )
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.bountyId },
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })

// export module
module.exports = bountyHunterRouter