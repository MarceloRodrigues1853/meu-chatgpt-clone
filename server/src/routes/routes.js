const express = require("express");
const promptController = require("../controllers/prompt-contoller");
const routes = express.Router();

// Adicionada a barra "/" no início da rota
routes.post('/api/prompt', promptController.sendText);

module.exports = routes;