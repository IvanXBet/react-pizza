const {Router} = require('express')
const User = require('../models/User')
const Order = require('../models/Order')
const router = Router()

router.post('/userprofil', async (req, res) => {
    try {
        const {userId} = req.body

        const candidate = await User.findOne({ _id: userId })
        const orders = await Order.find({ userId })
        res.json({candidate, orders})

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    } 

})

module.exports = router