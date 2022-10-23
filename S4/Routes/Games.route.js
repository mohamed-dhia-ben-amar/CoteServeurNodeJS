import Express from "express";
import { body } from "express-validator";

import * as GameController from '../Controllers/Games.controller.js'
import multer from '../Middleware/multer-config.js';


const router = Express.Router()

router.route('/')
    .get(GameController.displayAll)
    .post(
        multer,
        GameController.addOnce)

router.route('/details')
    .get(GameController.getDetails)

router.route('/update')
    .patch(GameController.updateGame)

export default router