"use strict";
var getConnection = require('../../config/db.service');
var ProductController = (function () {
    function ProductController() {
    }
    ProductController.prototype.load = function (req, res, next, newProduct) {
    };
    ProductController.prototype.get = function (req, res, id) {
        var id = req.params.id;
        getConnection(function (err, con) {
            if (err) {
                res.json(false);
            }
            var productQuery = 'select * from product where id = ? ';
            console.log("con: " + con);
            con.query(productQuery, id, function (err, product) {
                con.release();
                res.json(product);
            });
        });
    };
    ProductController.prototype.update = function (req, res) {
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
    ProductController.prototype.remove = function (req, res, id) {
        var id = req.params.id;
        getConnection(function (err, con) {
            if (err) {
                res.json(false);
            }
            var productQuery = 'delete  from product where id = ? ';
            console.log("con: " + con);
            con.query(productQuery, id, function (err, product) {
                con.release();
                res.json(product);
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map