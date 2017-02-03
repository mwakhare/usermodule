import {UserInfo} from './types/UserInfo';
import * as mysql from 'mysql';

export abstract class UserBase {
	protected _id: number | null;
	protected _user_info: UserInfo;
	constructor(id: number, user_info: UserInfo) {
		this._id = id;
		this.user_info = user_info;
	}
	get id(): number {
		return this._id;
	}
	set id(id: number) {
		this._id = id;
	}
	get user_info(): UserInfo {
		return this._user_info;
	}
	set user_info(user_info: UserInfo) {
		this._user_info = user_info;
	}
	abstract save = (): void => {}
}