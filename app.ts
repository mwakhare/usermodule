import * as util from "util";
import * as config from './config/env';
import {Application} from './config/express';

import {Product} from './server/models/Product/Product';





let  product_info =
        {
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

        let product = new Product(20,product_info);
        console.log(util.inspect(product, false, null));

		let app = new Application();
		app.listen((<any>config).app_port, (<any>config).env);
		console.log('app.ts running');

