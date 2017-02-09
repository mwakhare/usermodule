"use strict";
var config = require("./config/env");
var express_1 = require("./config/express");
var Product_1 = require("./server/models/Product/Product");
var app = new express_1.Application();
app.listen(config.app_port, config.env);
console.log('app.ts running');
Product_1.Product.list(function (err, rows) {
    if (err) {
        throw err;
    }
    else {
        console.log(rows);
    }
});
console.log(" Details of product according to id");
Product_1.Product.getById(function (err, rows) {
    if (err) {
        throw err;
    }
    else {
        console.log("##############################");
        console.log(rows);
    }
});
//# sourceMappingURL=app.js.map