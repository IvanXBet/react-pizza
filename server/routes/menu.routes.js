const {Router} = require('express')
const menuItem = require('../models/menuItem')
const router = Router()

router.get('/menu', async(req, res) => {
    menuItem.find()
        .then(menuItems => res.json(menuItems))
        .catch(err => res.status(400).json('Error: ' + err));
    
})

router.post('/addcard', async(req, res) => {
    try {
        const {name, url, price, category, ingredients} = req.body

        const pizza = await menuItem.findOne({ title: name })
        if (pizza != null) {
            return res.status(400).json({ message: 'Такая пицца уже есть'})
        }

        const item = new menuItem({ title: name, price, url, category, ingredients})
		await item.save()

        res.status(200).json({ message: 'Пеперация прошла успешно' })
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/delcard', async(req, res) => {
    try {
        const {delName} = req.body

        const pizza = await menuItem.findOne({ title: delName })
        if (pizza === null) {
            return res.status(400).json({ message: 'Такой пиццы нет'})
        }

        await menuItem.deleteOne({ title: delName})

        res.status(200).json({ message: 'Пеперация прошла успешно' })
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router