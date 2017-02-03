import {UserInfo} from './types/UserInfo';
import * as mysql from 'mysql';

export class UserBase {
	protected id: number;
	protected user_info: UserInfo;
	constructor(id: number, user_info: UserInfo) {
		this.id = id;
		this.user_info = user_info;
	};
	save = (): UserBase => {
		return this;
	}
}