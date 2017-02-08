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

	public save = (): void => {
		getConnection( (err,con) => {
			if (err) {
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}   
        	console.log('connected as id ' + con.threadId);
       
			let query = `INSERT INTO user (user_info) VALUES ( ? )`;
			con.query( query, JSON.stringify(this.user_info), (err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				this.id = result.insertId;
				console.log('User Created ' + result.insertId);
			});
		});
	}

	public update = (): void => {
		getConnection( (err,con) => {
			if (err) {
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}   
        	console.log('connected as id ' + con.threadId);
       
			let query = `UPDATE user SET user_info = ? WHERE id = ?`;
			con.query( query, [JSON.stringify(this.user_info), this.id], (err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				this.id = result.insertId;
				console.log('User table Updated ' + result.insertId);
			});
		});

		getConnection( (err,con) => {
			if (err) {
				console.log({"code" : 100, "status" : "Error in connection database"});
          		return;
        	}   

        	console.log('connected as id ' + con.threadId);
       
			let query = `UPDATE user_profile SET user_id = ?, profile_picture = ?,  
						address = ?, role = ? capablities = ?, favourites = ? WHERE id = ?`;
			con.query(query, [
								this.id,
								this.profile.profile_pic,
								this.profile.address,
								this.profile.role,
								this.profile.capablities,
								this.profile.favourites,
								this.id
							], 
						(err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				this.id = result.insertId;
				console.log('User_profile is Updated ' + result.insertId);
			});
		});
	}

	delete = (): boolean => { 

	//?return true only when both connections return true

		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (Customer delete) error");
				return;
			}
								
			var deleteUserQuery = "DELETE FROM `korsall`.`user` WHERE id = ";
								
			console.log ('database connection (d) thread id: ' + con.threadId);
								
			con.query(deleteUserQuery, [this.id], function(err, users){
				
				con.release();

				if(err) 
				{  
					console.log("userQuery (user list) error");
					return;
				}
				else
				{
					return true;
				}
			});

			
		});

		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (Customer delete) error");
				return;
			}
								
			var deleteUserProfileQuery = "DELETE FROM `korsall`.`user_profile` WHERE id = ";

								
			console.log ('database connection (d) thread id: ' + con.threadId);
								
			con.query(deleteUserProfileQuery, [this.id], function(err, users){

				
				con.release();

				if(err) 
				{  
					console.log("userQuery (user list) error");
					return;
				}
				else
				{
					return true;
				}
			});
		});
		
		return false;
	}

	public static getOne (userToFind, callback) 
	{
		//data base connection			
		getConnection (function (err, con) 
		{
  							
			if(err) 
			{  
				console.log("getConnection (Customer user list) error");
				return;
			}
								
			var userQuery = 'SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id where u.id = ';
								
			console.log (userQuery);

			console.log ('database connection (user list) thread id: ' + con.threadId);
								
			con.query(userQuery, [userToFind], function(err, users){
				
				con.release();

				if(err) 
				{  
					console.log("userQuery (user list) error");
					callback (err);
				}
				else
				{
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
				console.log("getConnection (Customer user list) error");
				return;
			}
								
			//var userQuery = 'select * from user';

			var userQuery = "SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id"
								
			console.log ('database connection (user list) thread id: ' + con.threadId);
			console.log (userQuery);
								
			con.query(userQuery, function(err, users){
				
				con.release();

				if(err) 
				{  
					console.log("userQuery (user list) error");
					callback (err);
				}
				else
				{
					callback (err, users);
				}
			});
		});
	};
}