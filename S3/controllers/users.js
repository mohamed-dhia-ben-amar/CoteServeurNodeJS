import User from '../models/users.js';

const users = [];
var id = 0 ;

export function getAll(req, res) {
    res.status(200).json(users);
}

export function addOnce(req, res) {
    const user = new User(++id, req.body.username, req.body.password, req.body.wallet);
    users.push(user);
    res.status(201).json({ message: " Created ! ", entity: user });
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val => val.username === req.params.username));
}

export function putOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.username });
}

export function patchOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.username });
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: " Deleted ! ", name: req.params.username });
}