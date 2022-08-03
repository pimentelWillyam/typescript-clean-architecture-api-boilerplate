"use strict";
exports.__esModule = true;
var app_1 = require("./api/app");
app_1["default"].listen(process.env.PORT, function () {
    console.log("Escutando no host ".concat(process.env.HOST, " porta ").concat(process.env.PORTA));
});
