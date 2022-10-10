import Express from "express";

import * as GameController from '../Controllers/Games.controller.js'

const router = Express.Router()

router.route('/')
    .get(GameController.displayAll)
    .post(GameController.addGame)

router.route('/details')
    .get(GameController.getDetails)

router.route('/update')
    .patch(GameController.updateGame)

export default router