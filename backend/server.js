const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const Product = require('./data-models/ProductEntity-models')


const app = express()

app.use(express.json())
app.use(cors())

const url = "mongodb://localhost:27017/InvertoryManagement"

mongoose.connect(url)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("Error: ",err))






app.get('/api/products', async (req, res) => {
    try {
        const data = await Product.find().sort({createdAt: -1})
        res.status(200).json(data)    
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


app.post('/api/products', async (req, res) => {

    try {
        const newProduct = await Product.create(req.body)
        res.status(200).json(newProduct)     
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


app.delete('/api/products/:id', async (req, res) => {

    try {
        const productId =  req.params.id
        const product = await Product.findOneAndDelete({productCode : productId})
        
        if (!product) {
            return res.status(404).json({message : 'product not found'})     
        }
        res.status(200).json({message : 'Product deleted successfully'})

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

// get data by id
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId =  req.params.id
        const data = await Product.findOne({productCode: productId})
        res.status(200).json(data)     
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


// 
app.put('/api/products/:id', async (req, res) => {
    try {
        const productCode =  req.params.id
        const data = await Product.updateOne(
            { productCode },
            {$set: req.body},
            {new : true, runValidators: true}
        )
        if (!data) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({message: 'Product updated successfully'})     
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})







app.listen(3000, () => {
    console.log("server is running on => http://localhost:3000/api/products");
    
})