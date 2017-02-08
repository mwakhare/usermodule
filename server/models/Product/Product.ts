import {ProductInfo} from '../types/ProductInfo';
import {ProductBase} from './ProductBase';
import * as getConnection from '../../../config/db.service';

export class Product extends ProductBase 
{
	constructor( id: number, product_info: ProductInfo)
	{
		super(id, product_info);
	}
	// product_info: ProductInfo;
	save = (): void =>
	{

		getConnection( (err,con) =>
		{
			if (err) 
			{
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}  

        	console.log('connected as id ' + con.threadId);
			let query = `INSERT INTO product (product_info) VALUES ( ? )`;
			con.query( query, JSON.stringify(this.product_info), (err, result) =>
			{
				if(err)
				{
					console.log(err);
					return
				}

				if( !result.insertId )
				{
					console.log(result);
					return;
				}

				this.id = result.insertId;
				console.log('Product Created ' + result.insertId);
			});
		});

	}

		public update = (): void =>
		{
			getConnection( (err,con) => 
			{
				if (err)
				{
					console.log({"code" : 100, "status" : "Error in connection database"});
					return;
				}   
				console.log('connected as id ' + con.threadId);

				let query = `UPDATE product SET product_info = ? WHERE id = ?`;
				con.query( query, JSON.stringify(this.product_info), this.id, (err, result) => 
				{
					if(err)
					{
					console.log(err);
					return
					}
					if( !result.insertId )
					{
						console.log(result);
						return;
					}

					this.id = result.insertId;
					console.log('Product Created ' + result.insertId);
				});
			});

			getConnection( (err,con) => 
			{
				if (err)
				{
					console.log({"code" : 100, "status" : "Error in connection database"});
					return;
				}   
					console.log('connected as id ' + con.threadId);
			});
		}

		delete = (): boolean =>{
					return false;
		}

		/*public delete = (): boolean =>
		{ 
			getConnection( (err,con) =>
			{
				if (err) 
				{
				console.log({"code" : 100, "status" : "Error in connection database"});
				return;
				}  

				console.log('connected as id ' + con.threadId);
				let query = `DELETE from product  WHERE id = ?`;
				con.query( query, this.id, (err, result) =>
				{
					if(err)
					{
						console.log(err);
						return
					}

					//if( !result.insertId )
					//{
						//console.log(result);
						//return;
					//}

					// this.id = result.insertId;
					// console.log('Product Deleted ' + result.insertId);
					console.log('Product Deleted');
				});
			});

			return false;
		}*/

		public get = (): void =>
		{
			getConnection( (err,con) =>
			{
				if (err) 
				{
				console.log({"code" : 100, "status" : "Error in connection database"});
				return;
				}  

				console.log('connected as id ' + con.threadId);
				let query = `SELECT * from product  WHERE id = ?`;
				con.query( query, this.id, (err, result) =>
				{
					if(err)
					{
						console.log(err);
						return
					}

					//if( !result.insertId)
					//{
						//console.log(result);
						//return;
					//}
					// this.id = result.insertId;
					// console.log('Product Deleted ' + result.insertId);
					console.log(result);
				});
			});

		}

		public list = (): void =>
		{
			getConnection( (err,con) =>
			{
				if (err) 
				{
				console.log({"code" : 100, "status" : "Error in connection database"});
				return;
				}  

				let query = `SELECT * from product`;
				con.query( query, (err, result) =>
				{
					if(err)
					{
						console.log(err);
						return
					}

					//if( !result.insertId)
					//{
						//console.log(result);
						//return;
					//}

					//this.id = result.insertId;
					// console.log('Product Deleted ' + result.insertId);
					console.log(result);
				});
			});

		}
}