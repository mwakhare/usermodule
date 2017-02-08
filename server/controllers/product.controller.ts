var getConnection = require('../../config/db.service');
export class ProductController 
{
	public load(req, res, next,newProduct) {
	}
	public get(req, res,id) 
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
	}

	public update(req, res) {

	}

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

	public remove(req, res,id)
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
	}
}