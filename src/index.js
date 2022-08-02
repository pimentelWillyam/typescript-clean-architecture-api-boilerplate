"use strict";
exports.__esModule = true;
// importando .env
require("dotenv-safe").config({ silent: true });
var express = require("express");
var cors = require("cors");
var app = express();
app.get('/', function (req, res) {
    res.status(200).send({ message: "Hello" });
});
app.use(cors({
    origin: ["".concat(process.env.HOST)]
}));
app.listen(process.env.PORT, function () {
    console.log("Escutando na porta ".concat(process.env.PORTA));
});
