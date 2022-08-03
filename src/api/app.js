"use strict";
exports.__esModule = true;
exports.app = void 0;
// importando .env
require("dotenv-safe").config({ silent: true });
// importando rotas
var exemploRoute_1 = require("./routes/exemploRoute");
//importando core da api
var express = require("express");
var cors = require("cors");
// criando o app
exports.app = express();
//app.use(bodyParser.json())
exports.app.use(express.json());
exports.app.use(cors());
//utilizando rotas da api
exports.app.use("/api", exemploRoute_1.exemploRota);
