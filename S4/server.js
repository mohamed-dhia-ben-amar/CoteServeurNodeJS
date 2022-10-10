import express from 'express'; //ekma js
import mongoose from 'mongoose';
import { notFoundError, errorHandler } from './Middleware/error-handler.js'
import morgan from 'morgan';
import GameRouter from './Routes/Games.route.js';

const app = express();
const database = "workshop4SIM5"
const port = process.env.port || 3000;
const hostname = '127.0.0.1';

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose
    .connect(`mongodb://localhost:27017/${database}`)
    .then(() => {
        console.log(`connected to  ${database}`)
    })
    .catch(err => {
        console.log(err)
    })


app.use(morgan("dev"))
app.use(express.json())

app.use((req, res, next) => {
    console.log("Middleware just ran")
    next()
})

app.use("/gse", (req, res, next) => {
    console.log("Middleware just ran on gse route")
    next()
})

app.use('/game', GameRouter)

app.use(errorHandler)
app.use(notFoundError)

app.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});