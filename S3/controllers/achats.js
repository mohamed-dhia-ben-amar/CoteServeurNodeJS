import Achat from '../models/achats.js';

const achatarr = [];

export function getAll(req, res) {
    res.status(200).json(games);
}

export function addOnce(req, res) {
    const achat = new Achat(req.body.id, req.body.boughtDate);
    achatarr.push(achat);
    res.status(201).json({ message: " Created ! ", entity: achat });
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val => val.boughtDate === req.params.boughtDate));
}

export function putOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.boughtDate  });
}

export function patchOnce(req, res) {
    res.status(200).json({ message: " Updated ! ", name: req.params.boughtDate  });
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: " Deleted ! ", name: req.params.boughtDate  });
}