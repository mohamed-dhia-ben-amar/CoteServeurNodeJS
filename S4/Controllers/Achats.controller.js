import '../Models/Achats.model.js';
import Achat from '../Models/Achats.model.js';


export function MakeBuy(req, res) {
    if (req.body.wallet > req.body.price) {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        /* var achat = new Achat(++id, currentDate, req.body.idUser, req.body.idGame)
        Achats.push(achat)
        res.status(200).json({ entity: achat }) */
        const achat = new Achat(req.body)
        achat
            .save()
            .then(newAchat => {
                res.status(200).json(newAchat)
            })
            .catch(err => {
                res.status(200).json({ error: err })
            })
    } else {
        res.status(200).json({ message: "Insufficiant funds" })
    }
}