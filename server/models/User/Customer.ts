import {UserInfo} from '../types/UserInfo';
import {UserBase} from './UserBase';
import {UserProfileData} from '../types/UserProfileData';

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
	save = (): void => {}
	delete = (): boolean => { return false; }
}