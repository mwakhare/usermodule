import {SocialData} from './SocialData';
import {VerificationData} from './VerificationData';

export type UserInfo = {
	name: string,
	email: string,
	password: string,
	date_of_birth: Date,
	date_of_anniversary: Date | string,
	gender: number,
	social: SocialData[],
	tc: boolean,
	mobile_number: number,
	verified: VerificationData[],
	active: boolean,
	last_login: Date | string,
	ip_address: string,
	mac_address: string,
	browser_string: string,
};