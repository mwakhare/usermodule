import * as getConnection from '../../config/db.service';
export class ProductController 
{
	public get (req, res) {
		console.log('get');
		return res.json(req.id);
	}

	/*public list(req, res) {
	

	}*/

	public load(req, res, next,id) {
		console.log('Product Loaded: ' + id);
		req.id = id;
		return next();
	}

	public update(req, res) {
		console.log('update');
		return res.json(req.id);
	}

	public remove(req, res) {
		console.log('delete');
		return res.json(req.id);
	}

	/*public get(req, res,id) 
	{
		var id = req.params.id;
		getConnection (function (err, con) 
			{
					
				if(err) 
				{ 
					res.json (false);
				}
				
				var productQuery = 'select * from product where id = ? ';
				
				console.log("con: " + con); 
				
				con.query(productQuery,id,function(err, product){
				
					con.release();
					res.json(product);
					//console.log(product);
				});
			});
	}*/


	public list(req, res)
	{
						
		getConnection (function (err, con) 
		{
				
			if(err) 
			{ 
				res.json (false);
			}
			
			var productQuery = 'select * from product';
			console.log("con: " + con); 
			con.query(productQuery, function(err, product){
			
				con.release();
				res.json(product);
				//console.log(product);
			});
		});

	}

	/*public remove(req, res,id)
	{

		var id = req.params.id;
		getConnection (function (err, con) 
			{
					
				if(err) 
				{ 
					res.json (false);
				}
				
				var productQuery = 'delete  from product where id = ? ';
				
				console.log("con: " + con); 
				
				con.query(productQuery,id,function(err, product){
				
					con.release();
					res.json(product);
					//console.log(product);
				});
			});
	}*/
}