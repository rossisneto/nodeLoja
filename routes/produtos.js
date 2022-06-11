const express = require('express')
const router = express.Router()

router.post('/', (req,res)=>{
    console.log('rota principal produtos')
    res.end('rota principal produtos')
})

router.get('/', (req,res)=>{
    console.log('rota principal produtos')
    res.end('rota principal produtos')
})

router.delete('/', (req,res)=>{
    console.log('rota principal produtos')
    res.end('rota principal produtos')
})

router.put('/', (req,res)=>{
    console.log('rota principal produtos')
    res.end('rota principal produtos')
})

module.exports = router