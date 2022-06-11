const express = require('express')
const router = express.Router()


//Importando o modelo
const Produto=require('../models/Produto')


router.get('/', (req,res)=>{
    res.send('rota principal produtos')
   
})


router.post('/', async (req,res)=>{
    const {img,nome,descricao,tamanho,valor} = req.body
    console.log('rota principal produtos')

    const novoProduto = {
        img: img,
        nome: nome,
        descricao: descricao,
        tamanho: tamanho,
        valor: valor
    }

    console.log(novoProduto)

    await Produto.create(novoProduto).then(result=>{
        console.log(result.insertedId)
    })


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