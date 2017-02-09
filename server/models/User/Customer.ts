import {UserInfo} from '../types/UserInfo';
import {UserBase} from './UserBase';
import {UserProfileData} from '../types/UserProfileData';
import * as getConnection from '../../../config/db.service';

export class Customer extends UserBase {
	constructor( id: number, user_info: UserInfo, profile: UserProfileData) {
		super(id, user_info);
		this._profile = profile;
	}
	set profile(profile: UserProfileData) {
		this._profile = profile;
	}
	get profile(): UserProfileData {
		return this._profile;
	}
	protected _profile: UserProfileData;

	public save = (): void => 
	{
		getConnection( (err,con) => 
		{
			if (err) 
			{
				console.log({"code" : 100, "status" : "Error in connection database"});
				console.log("Customer save method (getConnection) has error in getting connnecton." + err);
				return;
          	}   

        	console.log ('Customer save method - database connection thread id: ' + con.threadId);
       
			let query = `INSERT INTO user (user_info) VALUES ( ? )`;

			console.log("Customer save method (getConnection): " + query);
			
			con.query( query, JSON.stringify(this.user_info), (err, result) => 
			{
				
				console.log ('Customer save method in con.query before release message.');
				con.release();

				if(err) 
				{  
					console.log("Customer save method - con.query: has error while database query: " + err);
					return;
				}
				
				if( !result.insertId ) 
				{
					console.log("Customer save method - con.query: result: " + result);
					return;
				}

				this.id = result.insertId;
				
				console.log('Customer save method: User Created: ' + result.insertId);
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
				console.log("Customer update method (getConnection1) has error in getting connnecton." + err);
				return;
        	}   
        	
			console.log ('Customer update method getConnection1 - database connection thread id: ' + con.threadId);
       
			let query = `UPDATE user SET user_info = ? WHERE id = ?`;
			
			console.log ("Customer update method getConnection1 update query: " + query);

			con.query( query, [JSON.stringify(this.user_info), this.id], (err, result) => 
			{
				console.log ("Customer update method getConnection1 (user) before release messge.");
				con.release();

				if(err) 
				{
					console.log("Customer update method - con.query: has error while database query: " + err);
					return;
				}

				if( !result.insertId ) 
				{
					console.log("Customer update method1 - con.query: result: " + result);
					return;
				}

				this.id = result.insertId;
				
				console.log('Customer update method1: User updated: ' + result.insertId);
			});
		});

		getConnection( (err,con) => 
		{
			if (err) 
			{
				console.log({"code" : 100, "status" : "Error in connection database"});
				console.log("Customer update method (getConnection2) has error in getting connnecton." + err);
				return;
        	}   

        	console.log ('Customer update method getConnection2 (user_profile) - database connection thread id: ' + con.threadId);
       
			let query = `UPDATE user_profile SET profile_picture = ?,  
						address = ?, role = ? capablities = ?, favourites = ? WHERE user_id = ?`;
			
			console.log ("Customer update method getConnection2 update query: " + query);

			con.query (query, [
								this.profile.profile_pic,
								this.profile.address,
								this.profile.role,
								this.profile.capablities,
								this.profile.favourites,
								this.id
							], 
						(err, result) => 
			{
				
				console.log ("Customer update method getConnection2 (user) before release messge.");
				con.release();

				if(err) 
				{
					console.log("Customer update method 2 - con.query: has error while database query: " + err);
					return;
				}

				if( !result.insertId ) 
				{
					console.log("Customer update method2 - con.query: result: " + result);
					return;
				}

				this.id = result.insertId;

				console.log('Customer update method2: User_profile is Updated result: ' + result.insertId);
			});
		});
	}

	delete = (): boolean => 
	{ 

	//?return true only when both connections return true
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log({"code" : 100, "status" : "Error in connection database"});
				console.log("Customer delete method (getConnection1) has error in getting connnecton." + err);
				return;
			}
								
			console.log ('Customer delete method getConnection1 (user) - database connection thread id: ' + con.threadId);

			var deleteUserQuery = "DELETE FROM `korsall`.`user` WHERE user_id = " + this.id;

			console.log("Customer delete method getConnection1 (user)" + deleteUserQuery);		

			con.query(deleteUserQuery, function (err, users)
			{
				console.log ("Customer delete method getConnection1 (user) before release messge.");

				con.release();

				if(err) 
				{
					console.log("Customer delete method 1 - con.query: has error while database query: " + err);
					return;
				}
				else
				{
					console.log ("Customer delete method 1 - con.query: Customer - user record is deleted.");
					console.log("Customer delete method 1 - con.query: " + users);
					return;
				}
			});

			
		});

		// getConnection (function (err, con) 
		// {
  							
		// 	if(err) 
		// 	{  
		// 		console.log({"code" : 100, "status" : "Error in connection database"});
		// 		console.log("Customer delete method (getConnection2) has error in getting connnecton." + err);
		// 		return;
		// 	}
								
		// 	console.log ('Customer delete method getConnection2 (user) - database connection thread id: ' + con.threadId);
								
		// 	var deleteUserProfileQuery = "DELETE FROM `korsall`.`user_profile` WHERE id = " + this.id;;
			
		// 	console.log("Customer delete method getConnection2 (UserProfile)" + deleteUserProfileQuery);
								
		// 	con.query(deleteUserProfileQuery, function(err, users)
		// 	{

		// 		console.log ("Customer delete method getConnection2 (UserProfile) before release messge.");

		// 		con.release();

		// 		if(err) 
		// 		{
		// 			console.log("Customer delete method 2 - con.query: has error while database query: " + err);
		// 			return;
		// 		}
		// 		else
		// 		{
		// 			console.log ("Customer delete method 2 - con.query: Customer - UserProfile record is deleted.");
		// 			console.log("Customer delete method 2 - con.query: " + users);
		// 			return;
		// 		}
		// 	});
		// });
		
		//how to join both results?
		return false;
	}

	public static getOne (userToFind, callback) 
	{
		//data base connection			
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("Customer static getOne method (getConnection) has error in getting connnecton." + err);
				return;
			}

			console.log ('Customer static getOne method - database connection thread id: ' + con.threadId);

			let userQuery = 'SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id where u.id = ' + userToFind;
			
			console.log (userQuery);
								
			con.query(userQuery, function(err, users)
			{
				console.log ('Customer static getOne method in con.query before release');
				con.release();

				if(err) 
				{  
					console.log("Customer static getOne method - con.query: has error while database query: " + err);
					callback (err);
				}
				else
				{
					console.log ("Customer static getOne method: userQuery is OK.");
					callback (err, users);
				}
			});
		});
	}

	public static list (callback) { 

		//data base connection			
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("Customer static list method (getConnection) has error in getting connnecton." + err);
				return;
			}
								
			//var userQuery = 'select * from user';

			let userQuery = "SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id"
								
			console.log ('Customer static list method database connection (join query) thread id: ' + con.threadId);
			console.log (userQuery);

			con.query(userQuery, function(err, users)
			{
				
				console.log ('Customer static list method in con.query before release');
				con.release();

				if(err) 
				{  
					console.log("Customer static list method - con.query: (Customer list join query) has error while database query: " + err);
					callback (err);
				}
				else
				{
					console.log ("Customer static list method: (Customer list join query) userQuery is OK.");
					callback (err, users);
				}
			});
		});
	};
}