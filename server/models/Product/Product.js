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
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
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
                    console.log('Product Created ' + result.insertId);
                });
            });
        };
        _this.update = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "UPDATE product SET product_info = ? WHERE id = ?";
                con.query(query, JSON.stringify(_this.product_info), _this.id, function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('Product Created ' + result.insertId);
                });
            });
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
            });
        };
        _this.delete = function () {
            return false;
        };
        _this.get = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "SELECT * from product  WHERE id = ?";
                con.query(query, _this.id, function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(result);
                });
            });
        };
        _this.list = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                var query = "SELECT * from product";
                con.query(query, function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(result);
                });
            });
        };
        return _this;
    }
    return Product;
}(ProductBase_1.ProductBase));
exports.Product = Product;
//# sourceMappingURL=Product.js.map