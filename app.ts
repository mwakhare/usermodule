import * as util from "util";
import * as config from './config/env';
import {Application} from './config/express';
import {Product} from './server/models/Product/Product';

		let app = new Application();
		app.listen((<any>config).app_port, (<any>config).env);
		console.log('app.ts running');

// getting all product data
Product.list (function (err, rows)
{
	if (err)
	{
		throw err;
	}
	else
	{
		console.log (rows);	
	}

});


// get product details by id

console.log(" Details of product according to id");
Product.getById(function(err,rows){

		if(err)
		{
			throw err;
		}
		else
		{
			console.log("##############################")
			console.log(rows);
		}
});


