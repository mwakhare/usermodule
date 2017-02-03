import {UserInfo} from './types/UserInfo';
import {UserBase} from './UserBase';
import {UserProfileData} from './types/UserProfileData';

export class Customer extends UserBase {
	constructor( id: number, user_info: UserInfo, profile: UserProfileData) {
		super(id, user_info);
		this.profile = profile;
	}
	protected profile: UserProfileData;
}