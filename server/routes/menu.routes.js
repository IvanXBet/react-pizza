const {Router} = require('express')
const menuItem = require('../models/menuItem')
const router = Router()

router.get('/menu', async(req, res) => {
    menuItem.find()
        .then(menuItems => res.json(menuItems))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router