import {Product} from '../server/models/Product/Product';
import * as chai from 'chai';

chai.should();

describe('Product Model', () => {
    describe('Initialize Object', () => {
           it('should initialize and return Product Deltails', function() 
           {
             Product.list (function (err, product)
             {
                 if (err)
                {
                    console.log(" Product list has error: " + err)

                }
                console.log(product);
                 product.product_info.Name.should.be.a('string');
                 product.product_info.Name.should.equal('product1');
            }); 
        });
    });
});

describe('Product Model', () => {
    describe('Initialize Object', () => {
           it('should initialize and return Product Deltails accrording to Product Id', function() 
           {
             Product.getById (function (err, product)
             {
                 if (err)
                {
                    console.log(" Product list has error: " + err)

                }
               /* console.log(product);*/
                 product.id.should.be.a('number');
                 product.product_info.Name.should.equal('string');
            }); 

         
        });
    });
});

