import express from "express";

import { getAll, getOnce, addOnce, putOnce, patchOnce, deleteOnce } from '../controllers/games.js';

import Game from '../models/games.js';

const router = express.Router();

const games = [new Game(1, "LoL", "Moba", 0.0, 20)];


router
    .route('/')
    .get(getAll)
    .post(addOnce);
    
router
    .route('/:title')   
    .get(getOnce)
    .put(putOnce)
    .patch(patchOnce)
    .delete(deleteOnce)

export default router;