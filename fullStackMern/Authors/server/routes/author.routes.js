const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}