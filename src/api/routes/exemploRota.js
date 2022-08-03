"use strict";
exports.__esModule = true;
exports.exemploRota = void 0;
// importando core da rota
var express = require("express");
//importando service da rota
var exemploService_1 = require("../services/exemploService");
var exemploService = new exemploService_1.ExemploService();
//criando rotas
exports.exemploRota = express.Router();
exports.exemploRota.get("/saudacao", function (req, res) { res.send("oi"); });
