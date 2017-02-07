import {Product} from '../server/models/Product/Product';
import * as chai from 'chai';

chai.should();

describe('Product Model', () => {
	describe('Initialize Object', () => {
		let product_info = {
            "Name" :"product1",
            "SKU_No":"pr4571",
            "Desc"  : "product desc",
            "price" :17000,
            "Cat_Id" :17145,
            "Featured_Image" : "img32.jpg",
            "Image_Gallery" :
                            [
                                {
                                     image_data: ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg",]
                                }
                            ],
            "Type" :1,
            

            "Attributes": 
                                [
                                    {
                                     color: ['red', 'blue', 'black']
                                    },
                                    {
                                     size: ['s', 'm', 'l', 'xl', 'xxl']
                                    },
                                    {
                                        size: [42, 44, 46, 48]
                                    }
                                ],               
            "Variation" :
                                [
                                    {
                                        variation: [1,2,3,4,5]
                                    }
                                ],

            "Stock" : 
                                [
                                    {
                                       Warehouse_ID: 12345
                                    },
                                    {
                                         stock: 500
                                    }
                                ],
            "Sale_Price":
                                [ 
                                    {
                                         type: 'jkl'
                                    },
                                    {
                                         value: 200
                                    }
                                ],

            "Sale_Duration":    "03/05/2014",
            "Tag": 
		                    [   {
		                         tag1: 'tag1'
		                        },
		                         {
		                         tag2: 'tag2'
		                    }],
        }  

		
		it('should initialize and return proper values', function() {
			let product = new Product(20, product_info);
			product.product_info.Name.should.be.a('string');
			product.product_info.Name.should.equal('product1');
		});

		
	});
});