const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)