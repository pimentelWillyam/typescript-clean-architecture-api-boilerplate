"use strict";
exports.__esModule = true;
exports.DialogoValidator = void 0;
var DialogoValidator = /** @class */ (function () {
    function DialogoValidator() {
    }
    DialogoValidator.prototype.eSaudacao = function (req) {
        if (req.body.mensagem === "bom dia") {
            return true;
        }
        else {
            return false;
        }
    };
    return DialogoValidator;
}());
exports.DialogoValidator = DialogoValidator;
