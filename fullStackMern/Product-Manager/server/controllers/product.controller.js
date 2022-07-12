const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then((oneProduct) => {
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        });
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({result:result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        });
} 