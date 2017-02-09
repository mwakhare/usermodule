import {ProductInfo} from '../types/ProductInfo';
import {ProductBase} from './ProductBase';
import * as getConnection from '../../../config/db.service';

export class Product extends ProductBase {
	constructor( id: number, product_info: ProductInfo) {
		super(id, product_info);
	}

	public static list (callback) { 

		//data base connection			
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (product user list) error");
				return;
			}					
			var productQuery = "SELECT * from product"				
			console.log ('database connection (product list) thread id: ' + con.threadId);
			con.query(productQuery, function(err, products){
				con.release();

				if(err) 
				{  
					console.log("productQuery (product list) error");
					callback (err);
				}
				else
				{
					console.log ("product list is displayed.");
					callback (err, products);
				}
			});
		});
	};

	// public static getById (callback) 
	public static getById (callback) 
	{		
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (Product user list) error");
				return;
			}	
			var productToFind = 22;			
			var productQuery = 'SELECT * from product where id = ' + productToFind;				
			con.query(productQuery, function(err, products){
				
				con.release();

				if(err) 
				{  
					console.log("productQuery  error");
					callback (err);
				}
				else
				{
					callback (err, products);
					
				}
			});
		});
	}

	public save = (): void => {
		/*console.log('save');
		getConnection( (err,con) => {
			if (err) {
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}   
        	console.log('save databae thread id: ' + con.threadId);
       
			let query = `INSERT INTO product (product_info) VALUES ( ? )`;
			con.query( query, JSON.stringify(this.product_info), (err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				this.id = result.insertId;
				console.log('product Created ' + result.insertId);
			});
		});*/
	}

	public update = (): void => {
		/*getConnection( (err,con) => {
			if (err) {
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}   
        	console.log('update database thread id: user table: ' + con.threadId);
       
			let query = `UPDATE product SET product_info = ? WHERE id = ?`;
			con.query( query, [JSON.stringify(this.product_info), this.id], (err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				this.id = result.insertId;
				console.log('product table Updated ' + result.insertId);
			});
		});*/
	}

	delete = (): boolean => { 

	//?return true only when both connections return true

		/*getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (Product delete) error");
				return;
			}
								
			var deleteUserQuery = "DELETE FROM `KorsAll`.`product` WHERE id = " + this.id;
			console.log(deleteUserQuery);					
			console.log ('database connection (delete) thread id: ' + con.threadId);
								
			con.query(deleteUserQuery, function(err, users){
				con.release();

				if(err) 
				{  
					console.log("ProductQuery (Product list) error");
					//return;
				}
				else
				{
					console.log ("Product record is deleted.");
					//return;
				}
			});

			
		});*/

		
		return false;
	}

	

	
}