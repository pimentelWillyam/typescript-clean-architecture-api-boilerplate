"use strict";
exports.__esModule = true;
exports.DialogoController = void 0;
var DialogoValidator_1 = require("../validators/DialogoValidator");
var dialogoValidator = new DialogoValidator_1.DialogoValidator();
var DialogoService_1 = require("../services/DialogoService");
var dialogoService = new DialogoService_1.DialogoService();
var DialogoController = /** @class */ (function () {
    function DialogoController() {
    }
    DialogoController.prototype.postaDialogo = function (req, res) {
        if (dialogoValidator.eSaudacao(req)) {
            dialogoService.saudacao(res);
        }
        else {
            dialogoService.despedida(res);
        }
    };
    return DialogoController;
}());
exports.DialogoController = DialogoController;
