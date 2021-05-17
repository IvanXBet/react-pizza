const {Schema, model, ObjectId} = require("mongoose")

const MenuItem = new Schema({
    title: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    url: {type: String , required: true, unique: true},
    category: {type: String, required: true},
    ingredients: {type: Array, required: true},
})

module.exports = model('MenuItem', MenuItem)