"use strict";
exports.__esModule = true;
exports.ExemploService = void 0;
var ExemploService = /** @class */ (function () {
    function ExemploService() {
    }
    ExemploService.prototype.sauda = function (req, res) {
        console.log("chegou aqui");
        res.status(200).json({
            message: "oi"
        });
    };
    return ExemploService;
}());
exports.ExemploService = ExemploService;
