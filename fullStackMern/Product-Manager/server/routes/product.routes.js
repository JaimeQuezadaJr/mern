const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}