"use strict";
exports.__esModule = true;
exports.ExemploService = void 0;
var ExemploService = /** @class */ (function () {
    function ExemploService() {
    }
    ExemploService.prototype.sauda = function (req, res) {
        res.status(200).json({
            message: "oi"
        });
    };
    ExemploService.prototype.despede = function (req, res) {
        res.status(200).json({
            message: "tchau"
        });
    };
    return ExemploService;
}());
exports.ExemploService = ExemploService;
