const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const Pecas = require('./controller/pecas');
const Registros = require('./controller/registros');

routes.get('/', (req, res) => {
  res.send({
    'Mensagem': "Back-end Rodando Legalzinho"
  });
})

//Peca
routes.post('/criarPeca', Pecas.CriarPeca);
routes.get('/listaPecas', Pecas.ListaPecas);
routes.delete('/deletarPeca/:id', Pecas.DeletarPeca);
routes.get('/listarPeca/:id', Pecas.ListarPeca);

//Registro
routes.post('/registrarPeca', Registros.CriarRegistro);
routes.get('/listaRegistros', Registros.ListaRegistros);
routes.get('/listarRegistro/:id', Registros.ListarRegistro);
routes.put("/atualizarRegistro/:id", Registros.AtualizarRegistro);
routes.delete("/deletarRegistro/:id", Registros.DeletarRegistro);

module.exports = routes;
