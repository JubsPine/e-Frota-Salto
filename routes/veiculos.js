const express = require('express');
const router = express.Router();
const fs = require('fs');
const dbPath = './db/banco.json';

router.post('/cadastro', (req, res) => {
  const novoVeiculo = req.body;
  const db = JSON.parse(fs.readFileSync(dbPath));
  db.veiculos.push(novoVeiculo);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  res.status(201).send('Veículo cadastrado com sucesso.');
});

module.exports = router;
