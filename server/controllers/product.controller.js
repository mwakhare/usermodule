"use strict";
var getConnection = require("../../config/db.service");
var ProductController = (function () {
    function ProductController() {
    }
    ProductController.prototype.get = function (req, res) {
        console.log('get');
        return res.json(req.id);
    };
    ProductController.prototype.load = function (req, res, next, id) {
        console.log('Product Loaded: ' + id);
        req.id = id;
        return next();
    };
    ProductController.prototype.update = function (req, res) {
        console.log('update');
        return res.json(req.id);
    };
    ProductController.prototype.remove = function (req, res) {
        console.log('delete');
        return res.json(req.id);
    };
    ProductController.prototype.list = function (req, res) {
        getConnection(function (err, con) {
            if (err) {
                res.json(false);
            }
            var productQuery = 'select * from product';
            console.log("con: " + con);
            con.query(productQuery, function (err, product) {
                con.release();
                res.json(product);
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map