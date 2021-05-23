const {Router} = require('express')
const router = Router()


const array = ['1.jpg', '2.jpg'] // массив с картинками

router.get('/img', function (req, res) {
  const response = array.map(item => `<img src="${item}" />`).join('')
  res.send(response)
})
