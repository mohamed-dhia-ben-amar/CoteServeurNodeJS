import '../Models/Games.model.js';
import Game from '../Models/Games.model.js';


export function displayAll(req, res) {
    Game
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function displayAll2(req, res) {
    Game
        .find({})
        .where('onSale').equals(true)
        .where('name').in(['DMC5', 'RE8'])
        .limit(10)
        .sort('-year')
        .select('name')
        .exec()
        .where('year').gt(2000).lt(2022)
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function getDetails(req, res) {
    /* var game = games.find((u => (u.id === req.body.id)))
    res.status(200).json({ entity: game }); */
    Game
        .findOne({ "name": req.params.name })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function getDetails2(req, res) {
    /* var game = games.find((u => (u.id === req.body.id)))
    res.status(200).json({ entity: game }); */
    Game
        .findById(req.params.id)
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function addGame(req, res) {
    const game = new Game({
        name: req.body.name,
        year: req.body.year,
        onSale: req.body.onSale
    })
    //var game = new Game(++id, req.body.title, req.body.description, req.body.price, req.body.quantity)
    //Games.push(game)
    game
        .save()
        .then(newGame => {
            res.status(200).json({ entity: newGame })
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function addGame2(req, res) {
    Game
        .create({
            name: req.body.name,
            year: req.body.year,
            onSale: req.body.onSale
        })
        .then(newGame => {
            res.status(200).json({ entity: newGame })
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function addGame3(req, res) {
    const game = new Game(req.body)
    //var game = new Game(++id, req.body.title, req.body.description, req.body.price, req.body.quantity)
    //Games.push(game)
    game
        .save()
        .then(newGame => {
            res.status(200).json({ entity: newGame })
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function addGame4(req, res) {
    Game.create(req.body)
        .then(newGame => {
            res.status(200).json({ entity: newGame })
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function updateGame(req, res) {
    /* var game = games.find((u => (u.id === req.body.id)))
    game.title = req.body.title
    game.description = req.body.description
    game.price = req.body.price
    game.quantity = req.body.quantity
    res.status(200).json({ entity: game }) */
    Game
        .findOneAndUpdate({ "name": req.params.name }, { "onSale": false })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function putAll(req, res) {
    Game
        .updateMany({}, { "onSale": true })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function deleteOnce(req, res) {
    Game
        .remove({ "onSale": false })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function deleteOnce2(req, res) {
    Game
        .findOneAndRemove({ "name": req.params.name })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}