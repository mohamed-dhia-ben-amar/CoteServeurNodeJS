import Express from "express";

import * as UserController from '../Controllers/Users.controller.js'

import multer from '../Middleware/UserMutler-Config.js';

const router = Express.Router()

router.route('/')
    .get(UserController.LogIn)
    .post(
        multer,
        UserController.addOnce)

router.route('/update')
    .patch(UserController.update)

export default router