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
            console.log('save');
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('save databae thread id: ' + con.threadId);
                var query = "INSERT INTO product (product_info) VALUES ( ? )";
                con.query(query, JSON.stringify(_this.product_info), function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('product Created ' + result.insertId);
                });
            });
        };
        _this.update = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('update database thread id: user table: ' + con.threadId);
                var query = "UPDATE product SET product_info = ? WHERE id = ?";
                con.query(query, [JSON.stringify(_this.product_info), _this.id], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('product table Updated ' + result.insertId);
                });
            });
        };
        _this.delete = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log("getConnection (Product delete) error");
                    return;
                }
                var deleteUserQuery = "DELETE FROM `KorsAll`.`product` WHERE id = " + this.id;
                console.log(deleteUserQuery);
                console.log('database connection (delete) thread id: ' + con.threadId);
                con.query(deleteUserQuery, function (err, users) {
                    con.release();
                    if (err) {
                        console.log("ProductQuery (Product list) error");
                    }
                    else {
                        console.log("Product record is deleted.");
                    }
                });
            });
            return false;
        };
        return _this;
    }
    Product.getOne = function (productToFind, callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (Product user list) error");
                return;
            }
            var productQuery = 'SELECT * from product where id = ' + productToFind;
            console.log(productQuery);
            console.log('database connection (product getOne) thread id: ' + con.threadId);
            con.query(productQuery, function (err, products) {
                con.release();
                if (err) {
                    console.log("productQuery (product getOne) error");
                    callback(err);
                }
                else {
                    console.log("before callback: " + products);
                    console.log("products one record is displayed.");
                    callback(err, products);
                }
            });
        });
    };
    Product.list = function (callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (product user list) error");
                return;
            }
            var productQuery = "SELECT * from product";
            console.log('database connection (product list) thread id: ' + con.threadId);
            console.log(productQuery);
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
    return Product;
}(ProductBase_1.ProductBase));
exports.Product = Product;
//# sourceMappingURL=Product.js.map