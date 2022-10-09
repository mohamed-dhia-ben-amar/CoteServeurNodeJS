import express from "express";

import { getAll, getOnce, addOnce, putOnce, patchOnce, deleteOnce } from '../controllers/games.js';

import Game from '../models/games.js';

const router = express.Router();

const games = [new Game("dmc5", 2019), new Game("re8", 2021), new Game("nfs", 2019)];

/* router.get('/', (req, res) => {
    res.status(200).json(games);
})

router.get('/:name', (req, res) => {
    res.status(200).json(games.find(val => val.name === req.params.name));
})

router.post('/', (req, res) => {
    const game = new Game(req.body.name, req.body.year);
    games.push(game);
    res.status(201).json({ message: " Created ! ", entity: game });
})

router.put('/:name3', (req, res) => {
    res.status(200).json({ message: " Updated ! ", name: req.params.name3 });
})

router.patch('/:name3', (req, res) => {
    res.status(200).json({ message: " Updated ! ", name: req.params.name3 });
})

router.delete('/:name3', (req, res) => {
    res.status(200).json({ message: " Deleted ! ", name: req.params.name3 });
})

router
    .route('/')
    .get((req, res) => {
        res.status(200).json(games)
    })
    .post((req, res) => {
        const game = new Game(req.body.name, req.body.year);
        games.push(game);
        res.status(201).json({ message: " Created ! ", entity: game });
    })

router
    .route('/:name')
    .get((req, res) => {
        res.status(200).json(games.find(val => val.name === req.params.name));
    })
    .put((req, res) => {
        res.status(200).json({ message: " Updated ! ", name: req.params.name3 });
    })
    .patch((req, res) => {
        res.status(200).json({ message: " Updated ! ", name: req.params.name3 });
    })
    .delete((req, res) => {
        res.status(200).json({ message: " Deleted ! ", name: req.params.name3 });
    }) */

    router.route('/').get(getAll).post(addOnce);
    router.route('/:name').get(getOnce).put(putOnce).patch(patchOnce).delete(deleteOnce)

export default router;