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

	delete = (): boolean => { return false; }
}