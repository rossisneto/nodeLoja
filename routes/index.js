const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('rota principal')
    res.end('rota principal')
})

module.exports = router