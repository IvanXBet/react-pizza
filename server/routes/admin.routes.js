const {Router} = require('express')
const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()


router.post('/loginadmin',
	async (req, res) => {
        try {
            const {login, password} = req.body
            // быстрая регистрация
            // const hashedPassword = await bcrypt.hash(password, 12)
            // const admin = new Admin({login, password: hashedPassword})
            // await admin.save()

            const user = await Admin.findOne({ login })
            if (!user) {
                return res.status(400).json({ message: 'Логин не верный',status: 400 })
            }
            
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова',status: 400 })
            }
            
            res.status(200).json({admin: true})

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)


module.exports = router