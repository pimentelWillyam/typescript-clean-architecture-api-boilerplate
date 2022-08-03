"use strict";
exports.__esModule = true;
// importando .env
require("dotenv-safe").config({ silent: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
// importando rotas
var exemploRota_1 = require("./routes/exemploRota");
var app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: ["".concat(process.env.HOST)]
}));
//utilizando rotas da api
app.use("/api", exemploRota_1["default"]);
exports["default"] = app;
