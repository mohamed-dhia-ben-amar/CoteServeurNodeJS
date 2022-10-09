import express from "express";

import { getAll, getOnce, addOnce, putOnce, patchOnce, deleteOnce } from '../controllers/achats.js';

import Achats from '../models/achats.js';

const router = express.Router();

const achats = [new Achats(1,"22/09/2022")];


router.route('/').get(getAll).post(addOnce);
router.route('/:boughtDate ').get(getOnce).put(putOnce).patch(patchOnce).delete(deleteOnce)

export default router;