const {Router} = require('express')
const Order = require('../models/Order')
const User = require('../models/User')
const {check, validationResult} = require('express-validator')


const router = Router()

router.post('/order',
    [
        check('body.orderItems', 'Заказ пуст').isEmpty(),
        check('body.orderAddress', 'Адрес не введён').isEmpty(),
        check('body.phone', 'Телефон не введён').isEmpty(),
    ], 
    async (req, res) => {
        try {
            const errors = validationResult(req)
           
            if (!errors.isEmpty()) {
                
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Пропущенно какое-то поле'
                })
            }

            const {orderItems, totalPrice, totalQuantity, userId, orderDate, orderAddress, phone, dopInfo, status} = req.body
            
            
            const candidate = await User.findOne({ _id: userId })
            if (!candidate) {
                return res.status(400).json({ message: 'Некорректный данные'})
            }

            const order = new Order({ orderItems, totalPrice, totalQuantity, userId, orderDate, orderAddress, phone, dopInfo, status})

            await order.save() 
            
            res.status(201).json({ message: 'Заказ оформлен', id:  order._id}) 

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        } 

})

module.exports = router