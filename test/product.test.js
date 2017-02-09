"use strict";
var Product_1 = require("../server/models/Product/Product");
var chai = require("chai");
chai.should();
describe('Product Model', function () {
    describe('Initialize Object', function () {
        it('should initialize and return Product Deltails', function () {
            Product_1.Product.list(function (err, product) {
                if (err) {
                    console.log(" Product list has error: " + err);
                }
                console.log(product);
                product.product_info.Name.should.be.a('string');
                product.product_info.Name.should.equal('product1');
            });
        });
    });
});
describe('Product Model', function () {
    describe('Initialize Object', function () {
        it('should initialize and return Product Deltails accrording to Product Id', function () {
            Product_1.Product.getById(function (err, product) {
                if (err) {
                    console.log(" Product list has error: " + err);
                }
                product.id.should.be.a('number');
                product.product_info.Name.should.equal('string');
            });
        });
    });
});
//# sourceMappingURL=product.test.js.map