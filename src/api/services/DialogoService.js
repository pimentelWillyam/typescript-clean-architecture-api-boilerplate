"use strict";
exports.__esModule = true;
exports.DialogoService = void 0;
var DialogoService = /** @class */ (function () {
    function DialogoService() {
    }
    DialogoService.prototype.saudacao = function (res) {
        res.status(200).json({
            message: "opa, tudo bom?"
        });
    };
    DialogoService.prototype.despedida = function (res) {
        res.status(200).json({
            message: "tchau"
        });
    };
    return DialogoService;
}());
exports.DialogoService = DialogoService;
