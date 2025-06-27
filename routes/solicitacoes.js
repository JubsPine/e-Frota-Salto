const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const dbPath = './db/banco.json';

const upload = multer({ dest: 'uploads/' });

router.post('/solicitar', upload.array('imagens'), (req, res) => {
  const novaSolicitacao = {
    ...req.body,
    imagens: req.files.map(f => f.path)
  };
  const db = JSON.parse(fs.readFileSync(dbPath));
  db.solicitacoes.push(novaSolicitacao);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  res.status(201).send('Solicitação registrada com sucesso.');
});

module.exports = router;
