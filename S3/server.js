import express from 'express'; //ekma js

const app = express();

const hostname = '127.0.0.1';
const port = process.env.port || 3000;

import GameRoutes from './routes/games.js'
import UserRoutes from './routes/users.js'
import AchatRoutes from './routes/achats.js'
import routerGames from './routes/games.js';
import routerUsers from './routes/users.js';
import routerAchats from './routes/achats.js';

app.use(express.json())
app.use('/game', GameRoutes)
app.use('/user', UserRoutes)
app.use('/achat', AchatRoutes)



app.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});

//Endpoint 1

routerUsers.post

routerUsers.patch

routerGames.get

routerGames.put

routerGames.patch

routerAchats.get