import Express from "express";

import * as UserController from '../Controllers/Users.controller.js'


const router = Express.Router()

router.route('/')
    .get(UserController.LogIn)
    .post(UserController.register)

router.route('/update')
    .patch(UserController.update)

export default router