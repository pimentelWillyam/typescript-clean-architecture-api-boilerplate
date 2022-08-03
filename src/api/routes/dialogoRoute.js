"use strict";
exports.__esModule = true;
exports.dialogoRoute = void 0;
// importando core da rota
var express = require("express");
//importando service da rota
var DialogoController_1 = require("../controllers/DialogoController");
var dialogoController = new DialogoController_1.DialogoController();
//criando rotas
exports.dialogoRoute = express.Router();
exports.dialogoRoute.post("/dialogo", function (req, res) { dialogoController.postaDialogo(req, res); });
