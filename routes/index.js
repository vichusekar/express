const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>Welcome Router </h1>')

})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.send({
        message:"data snd scfly"
    })
})

module.exports = router