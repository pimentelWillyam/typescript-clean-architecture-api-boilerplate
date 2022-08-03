"use strict";
exports.__esModule = true;
// importando core da rota
var express = require("express");
//criando rotas
var exemploRota = express.Router();
exemploRota.get("/cumprimento", function (req, res) { console.log("oi"); });
exports["default"] = exemploRota;
