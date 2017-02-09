"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProductBase_1 = require("./ProductBase");
var getConnection = require("../../../config/db.service");
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(id, product_info) {
        var _this = _super.call(this, id, product_info) || this;
        _this.save = function () {
        };
        _this.update = function () {
        };
        _this.delete = function () {
            return false;
        };
        return _this;
    }
    Product.list = function (callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (product user list) error");
                return;
            }
            var productQuery = "SELECT * from product";
            console.log('database connection (product list) thread id: ' + con.threadId);
            con.query(productQuery, function (err, products) {
                con.release();
                if (err) {
                    console.log("productQuery (product list) error");
                    callback(err);
                }
                else {
                    console.log("product list is displayed.");
                    callback(err, products);
                }
            });
        });
    };
    ;
    Product.getById = function (callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (Product user list) error");
                return;
            }
            var productToFind = 22;
            var productQuery = 'SELECT * from product where id = ' + productToFind;
            con.query(productQuery, function (err, products) {
                con.release();
                if (err) {
                    console.log("productQuery  error");
                    callback(err);
                }
                else {
                    callback(err, products);
                }
            });
        });
    };
    return Product;
}(ProductBase_1.ProductBase));
exports.Product = Product;
//# sourceMappingURL=Product.js.map