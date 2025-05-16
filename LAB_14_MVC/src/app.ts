const express = require('express');
const app = express();
import bodyParser from 'body-parser';
import { insereJogador } from './controller/jogadorController';
import { listaJogadores } from './controller/jogadorController';

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use(express.json());
bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));

// Importando o controlador de jogador
app.post('/novoJogador', (req: any, res: any) => {
    insereJogador(req, res);
});

app.get('/jogadores', (req: any, res: any) => {
    res.send(listaJogadores(req, res));
});



