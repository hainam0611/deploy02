var express = require('express')
var router = express.Router()

router.get('/hn', (req, res)=>{
    var hanoi = "Ha Noi"
    var address = "So 2 Pham Van Bach - Cau Giay - Ha Noi"
    var image ="https://image-us.24h.com.vn/upload/1-2022/images/2022-03-22/min-7-1647921939-52-width640height480.jpg"
    res.render('hanoi', {hn : hanoi, address : address, image : image})
})

router.get('/hcm', (req, res)=>{
    res.render('hcm')
})

module.exports = router;