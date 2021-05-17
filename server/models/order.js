const {Schema, model, Types} = require("mongoose")

const Order = new Schema({
    orderItems: {type: Array, required: true},
    totalPrice: {type: Number, required: true},
    totalQuantity: {type: Number, required: true},
    userId: {type: Types.ObjectId, ref: 'User', required: true},
    orderDate: {type: Date, required: true},
    orderAddress: {type: String, required: true},
    phone: {type: String, required: true},
    dopInfo: {type: String, required: true},
    status: {type: String, required: true},
})

module.exports = model('Order', Order)