import Game from '../models/games.js';

const games = [new Game(1, "LoL", "Moba", 0.0, 20)];

export function getAll(req, res) {
    res.status(200).json(games);
}

export function addOnce(req, res) {
    const game = new Game(req.body.id, req.body.title, req.body.descriptiob, req.body.price, req.body.quantity);
    games.push(game);
    res.status(201).json({ message: " Created ! ", entity: game });
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val => val.title === req.params.title));
}

export function putOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.title });
}

export function patchOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.title });
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: " Deleted ! ", name: req.params.title });
}