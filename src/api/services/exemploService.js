"use strict";
exports.__esModule = true;
exports.ExemploService = void 0;
var ExemploService = /** @class */ (function () {
    function ExemploService() {
    }
    ExemploService.prototype.saudacao = function (res) {
        res.status(200).json({
            message: "opa, tudo bom?"
        });
    };
    ExemploService.prototype.despedida = function (res) {
        res.status(200).json({
            message: "tchau"
        });
    };
    return ExemploService;
}());
exports.ExemploService = ExemploService;
