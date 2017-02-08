"use strict";
var express = require("express");
var expressJwt = require("express-jwt");
var product_controller_1 = require("../controllers/product.controller");
var config = require("../../config/env");
var ProductRoute = (function () {
    function ProductRoute() {
        var product = new product_controller_1.ProductController();
        this._router = express.Router();
        this._router.route('/').get(product.list);
        this._router.route('/:id').get(product.get);
        this._router.route('/:id').delete(product.remove);
        this._router.param('productID', product.load);
        this._router.route('/:productID')
            .post(expressJwt({ secret: config.jwt_secret }), product.update);
    }
    ProductRoute.prototype.route = function () {
        return this._router;
    };
    return ProductRoute;
}());
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=product.route.js.map