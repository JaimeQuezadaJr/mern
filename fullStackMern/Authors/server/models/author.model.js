const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, 
            minLength: [3, "Author name is required. Minimum of 3 characters needed."],
            required: [
                true,
                "Author name is required. Minimum of 3 characters needed."
            ]
}
}, 
{timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;