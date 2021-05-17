const {Schema, model} = require("mongoose")

const User = new Schema({
    name: {type: String},
    phone: {type: Number},
    email: {type: String , required: true, unique: true},
    password: {type: String, required: true},
    bday: {type: Date, required: true},
})

module.exports = model('User', User)