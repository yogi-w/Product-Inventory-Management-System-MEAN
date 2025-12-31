const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    productCode: {
        type: String,
        required : true
    },
    productName : {
        type: String,
        required : true        
    },
    productCategory : {
        type: String,
        required : true
    },
    productPrice: {
        type: Number,
        required : true
    },

}, {
    timestamps: true,
    versionKey: false
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product