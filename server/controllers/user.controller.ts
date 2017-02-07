
//import * as pool from '../../config/db.service';
//import * as dbSql  from '../../config/db.service';
//import * as getConnection  from '../../config/db.service';
var getConnection = require('../../config/db.service');

export class UserController {
	public load(req, res, next, id) {
		req.id = id;
		return next(req);
	}

	public get(req, res) {
		res.json(req.id);
	}

	public update(req, res) {

	}			

	public list(req, res) {
		//res.json(1);
						// 		var userQuery = 'select * from user';
								
						// 		dbSql.pool (function(err, con) { // the function is called when you have a connection
								
						// 		if(err) throw err; // or handle it differently than throwing it
								
						// 		console.log("con: " + con); // not undefined anymore
								
						// 		con.query(userQuery,function(err,user){
						// 		con.release();
						// 	}) 
						// });
						
						getConnection (function (err, con) 
						{
  							
							if(err) 
							{ /* handle your error here */ 
								res.json (false);
							}
							
							var userQuery = 'select * from user';
							
							console.log("con: " + con); //displays undefined
							
							con.query(userQuery, function(err, user){
							
								con.release();
								res.json (user);
							});
						});

	}
			
						
	public remove(req, res) {

	}
}