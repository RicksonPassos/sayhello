const express = require('express');
const controlador = require('./controladores/controlador');

const rotas = express();

rotas.get('/', controlador.exibir);

module.exports = rotas;