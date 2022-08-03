"use strict";
exports.__esModule = true;
var app_1 = require("./api/app");
app_1.app.listen(process.env.PORTA, function () {
    console.log("aplica\u00E7\u00E3o iniciada na porta ".concat(process.env.PORTA));
});
