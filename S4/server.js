import express from 'express'; //ekma js
import mongoose, { mongo } from 'mongoose';

import UserRouter from './Routes/Users.route.js';
import GameRouter from './Routes/Games.route.js';
import AchatRouter from './Routes/Achats.route.js';


const app = express();
const database = "workshop4SIM5"
const hostname = '127.0.0.1';
const port = process.env.port || 3000;

app.use(express.json())
app.use('/user',UserRouter)
app.use('/game',GameRouter)
app.use('/achat',AchatRouter)

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:27017/${database}`)

app.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});