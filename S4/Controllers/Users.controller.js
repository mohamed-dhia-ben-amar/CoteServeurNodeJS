import '../Models/Users.model.js';
import User from '../Models/Users.model.js';
import { validationResult } from 'express-validator';



export async function update(req, res) {
    /*var user = Users.find((u => (u.id === req.body.id)))
    user.username = req.body.username
    user.password = req.body.password
    user.wallet = req.body.wallet
    res.status(200).json({username : user.username, wallet : user.wallet}) */
    var user = await User
        .findOneAndUpdate({ "name": req.params.username }, { "password": req.body.password, "wallet": req.body.wallet })
    res.status(200).json({ username: user.username, wallet: user.wallet });
}

export function LogIn(req, res) {
    /* var user = Users.find(u => (u.username === req.body.username) && (u.password === req.body.password))
    res.status(200).json({ username: user.username, wallet: user.wallet }) */
    User
        .find({})
        //.where('username').equals(req.body.username)
        //.where('password').equals(req.body.password)
        //.limit(1)
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function register(req, res) {
    /* var user = new User(++id, req.body.username, req.body.password, req.body.wallet)
    Users.push(user)
    res.status(200).json({ username: user.username, wallet: user.wallet }) */
    User.create(req.body)
        .then(newUser => {
            res.status(200).json({ entity: newUser })
        })
        .catch(err => {
            res.status(200).json({ error: err })
        })
}

export function addOnce(req, res) {
    console.log(req.body)
    // Trouver les erreurs de validation dans cette requéte et les envelopper dans un
    if (!validationResult(req).isEmpty()) {
        res.status(400).json({ errors: validationResult(req).array() });
    }

    else {
        console.log(req.body)
        // Invoquer la méthode create directement sur le modéle
        User
            .create({
                username: req.body.username,
                wallet: req.body.wallet,
                password: req.body.password,
                // Récupérer 1'URL de l'image pour l'insérer dans la BD
                avatar: `${req.protocol}://${req.get('host')}/avatar/${req.file.filename}`
            }).then(newUser => {
                res.status(200).json(newUser);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    }
}

