"use strict";
exports.__esModule = true;
exports.ExemploController = void 0;
var ExemploValidator_1 = require("../validators/ExemploValidator");
var exemploValidator = new ExemploValidator_1.ExemploValidator();
var ExemploService_1 = require("../services/ExemploService");
var exemploService = new ExemploService_1.ExemploService();
var ExemploController = /** @class */ (function () {
    function ExemploController() {
    }
    ExemploController.prototype.postaDialogo = function (req, res) {
        if (exemploValidator.eSaudacao(req)) {
            exemploService.saudacao(res);
        }
        else {
            exemploService.despedida(res);
        }
    };
    return ExemploController;
}());
exports.ExemploController = ExemploController;
