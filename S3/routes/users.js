import express from "express";

import { getAll, getOnce, addOnce, putOnce, patchOnce, deleteOnce } from '../controllers/users.js';

import Users from '../models/games.js';

const router = express.Router();

const users = [new Users(1,"dhia", "naruke", "IDW@123")];


router.route('/').get(getAll).post(addOnce);
router.route('/:username').get(getOnce).put(putOnce).patch(patchOnce).delete(deleteOnce)

export default router;