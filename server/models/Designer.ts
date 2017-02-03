import {UserBase} from './UserBase';
import {UserProfileData} from './types/UserProfileData';
import {DesignerData} from './types/DesignerData';

class Designer extends UserBase {
	protected profile: UserProfileData;
	protected details: DesignerData;

	save = () :void => {}
}