"use strict";
var express = require("express");
var auth_route_1 = require("./auth.route");
var product_route_1 = require("./product.route");
var router = express.Router();
router.get('/health-check', function (req, res) {
    res.json('OK');
});
var authRoute = new auth_route_1.AuthRoute();
var productRoute = new product_route_1.ProductRoute();
router.use('/auth', authRoute.route());
router.use('/product', productRoute.route());
module.exports = router;
//# sourceMappingURL=index.route.js.map