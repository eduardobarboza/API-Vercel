import express from 'express';
import { veiculos, montadoras } from './dados.js';

const app = express();
const port = 3001;

app.get('/', (req, res) =>{
    res.json({"rotas disponiveis" : ['server okay']})
});

app.get('/veiculos', (req, res) =>{
    res.json(veiculos)
});

app.get('/montadoras', (req, res) =>{
    res.json(montadoras)
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
  });