"use strict";
exports.__esModule = true;
exports.ExemploValidator = void 0;
var ExemploValidator = /** @class */ (function () {
    function ExemploValidator() {
    }
    ExemploValidator.prototype.eSaudacao = function (req) {
        if (req.body.mensagem === "bom dia") {
            return true;
        }
        else {
            return false;
        }
    };
    return ExemploValidator;
}());
exports.ExemploValidator = ExemploValidator;
