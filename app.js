const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const veiculosRoutes = require('./routes/veiculos');
const solicitacoesRoutes = require('./routes/solicitacoes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/veiculos', veiculosRoutes);
app.use('/api/solicitacoes', solicitacoesRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
