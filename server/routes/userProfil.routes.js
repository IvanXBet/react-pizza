const {Router} = require('express')
const User = require('../models/User')
const Order = require('../models/Order')
const {check, validationResult} = require('express-validator')
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

router.post('/updateProfil',
    async (req, res) => {
    try{

        // const errors = validationResult(req)
        // const arr = errors.array()
		// if (!errors.isEmpty()) {
        //     return res.status(400).json({
        //         errors: errors.array(),
        //         message: 'Некорректный данные при изменении',
        //         messageInfo: arr.message,
        //     })
		// }

        const data = req.body;
        const {_id, name, email, phone} = data;

        


        const result = await User.updateMany(
            {   
                '_id': _id,
                    
            },
            {
                'name': name,
                'email': email,
                'phone': phone,
            }    
        )
        res.status(200).json({message: result});
    }catch(e){
        res.status(400).json({message: 'Ошибка, попробуйте позже'})
    }
})



module.exports = router