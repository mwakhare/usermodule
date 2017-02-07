"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProductBase_1 = require("./ProductBase");
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(id, product_info) {
        var _this = _super.call(this, id, product_info) || this;
        _this.save = function () { };
        _this.delete = function () { return false; };
        return _this;
    }
    return Product;
}(ProductBase_1.ProductBase));
exports.Product = Product;
//# sourceMappingURL=Product.js.map