import {Address} from './Address';
import {Favourites} from './Favourites';

export type UserProfileData = {
	profile_pic: string,
	address: Address[]
	role: number,
	capablities: number,
	favourites: Favourites
}