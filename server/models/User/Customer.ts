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
			// if (err) {
   //        		console.log({"code" : 100, "status" : "Error in connection database"});
   //        		return;
   //      	}   

        	console.log('connected as id ' + con.threadId);
        
			let q1 = `INSERT INTO user (user_info) VALUES ( ? )`;
			con.query( q1, JSON.stringify(this.user_info), (err, result) => {
				if(err) {
					console.log(err);
					return
				}
				if( !result.insertId ) {
					console.log(result);
					return;
				}
				console.log('User Created' + result.insertId);
				let q2 = `INSERT INTO user_profile (user_id, profile_picture, address, role, capablities, favourites) VALUES ( ?, ?, ?, ?, ?, ? )`;
				con.query( q2, result.insertId, this.profile.profile_pic, JSON.stringify(this.profile.address), 
					this.profile.role, this.profile.capablities, JSON.stringify(this.profile.favourites),
					(err, result) => {
						if(err) {
							console.log(err);
							return;
						}
						if( !result.insertId ) {
							return;
						}
						console.log('Profile Data Inserted' + result.insertId);
					}
				);
			});
		});
	}

	delete = (): boolean => { return false; }
}