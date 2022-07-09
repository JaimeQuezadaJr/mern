const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error:err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((OneJoke) => {
            res.json({ joke: OneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error:err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newCreatedJoke) => {
            res.json({ joke: newCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error:err })
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((updateThisJoke) => {
            res.json({ joke: updateThisJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error:err })
        });
}

module.exports.deleteJoke= (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error:err })
        });
}