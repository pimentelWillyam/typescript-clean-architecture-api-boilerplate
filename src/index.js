"use strict";
exports.__esModule = true;
var app_1 = require("./api/app");
app_1.app.listen(process.env.PORT, function () {
    console.log("Escutando na porta ".concat(process.env.PORTA));
});
