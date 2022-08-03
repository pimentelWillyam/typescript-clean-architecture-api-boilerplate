"use strict";
exports.__esModule = true;
exports.exemploRota = void 0;
// importando core da rota
var express = require("express");
//importando service da rota
var ExemploController_1 = require("../controllers/ExemploController");
var exemploController = new ExemploController_1.ExemploController();
//criando rotas
exports.exemploRota = express.Router();
exports.exemploRota.post("/dialogo", function (req, res) { exemploController.postaDialogo(req, res); });
