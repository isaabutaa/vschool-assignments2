const express = require("express")
const inventory = require("../models/inventory.js")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

// routes

inventoryRouter.route("/")
    .get((req, res, next) => {
        Inventory.find((err, movies) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(movies)
        })
    })
    .post((req, res, next) => {
        const newInventory = new Inventory(req.body)
        newInventory.save((err, savedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedItem)
        })
    })

inventoryRouter.route("/:itemId")
    .put((req, res, next) => {
        Inventory.findOneAndUpdate(
            { _id: req.params.itemId },
            req.body,
            { new: true },
            (err, updatedItem) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })
    .delete((req, res, next) => {
        Inventory.findOneAndDelete(
            { _id: req.params.itemId },
            (err, deletedItem) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Deleted ${deletedItem.name} from the inventory`)
            }
        )
    })


module.exports = inventoryRouter