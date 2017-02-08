export class UserController {
	public load(req, res, next, id) {
		console.log('User Loaded: ' + id);
		req.id = id;
		return next();
	}

	public get (req, res) {
		console.log('get');
		return res.json(req.id);

		//data base connection			
		// getConnection (function (err, con) 
		// {
  							
		// 	if(err) 
		// 	{  
		// 		console.log("getConnection (user getone) error");
		// 		res.json (false);
		// 	}

		// 	var userIdToFind = req.id;			
		// 	var getOneUserQuery = "SELECT * FROM user WHERE id = ?";
								
		// 	console.log ('database connection (user getone) thread id: ' + con.threadId);
								
		// 	con.query(getOneUserQuery, [userIdToFind], function(err, users){
				
		// 		con.release();

		// 		if(err) 
		// 		{  
		// 			console.log("userQuery (user getone) error");
		// 			res.json (false);
		// 		}
		// 		else
		// 		{
		// 			res.json (users);
		// 		}
		// 	});
		// });

	}

	public update(req, res) {
		console.log('update');
		return res.json(req.id);
	}			

	public list(req, res) {
		//data base connection			
		// getConnection (function (err, con) 
		// {
  							
		// 	if(err) 
		// 	{  
		// 		console.log("getConnection (user list) error");
		// 		res.json (false);
		// 	}
								
		// 	var userQuery = 'select * from user';
								
		// 	console.log ('database connection (user list) thread id: ' + con.threadId);
								
		// 	con.query(userQuery, function(err, users){
				
		// 		con.release();

		// 		if(err) 
		// 		{  
		// 			console.log("userQuery (user list) error");
		// 			res.json (false);
		// 		}
		// 		else
		// 		{
		// 			res.json (users);
		// 		}
		// 	});
		// });

	}
			
						
	public remove(req, res) {
		console.log('delete');
		return res.json(req.id);
	}
}