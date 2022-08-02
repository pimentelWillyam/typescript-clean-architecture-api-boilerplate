"use strict";
exports.__esModule = true;
exports.app = void 0;
// importando .env
require("dotenv-safe").config({ silent: true });
var express = require("express");
var cors = require("cors");
exports.app = express();
exports.app.get('/', function (req, res) {
    res.status(200).send({ message: "Hello" });
});
exports.app.use(cors({
    origin: ["".concat(process.env.HOST)]
}));
