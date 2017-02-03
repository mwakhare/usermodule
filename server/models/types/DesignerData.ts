import {SupportData} from './SupportData';

export type DesignerData = {
	language: string,
	currency: string,
	brand_name: string,
	brand_logo: string,
	store_name: string,
	store_image: string,
	alternate_email: string,
	store_start_date: Date,
	store_registration_number: string,
	no_of_employees: number,
	designer_qualification: string,
	designer_story: string,
	//portfolio: 
	//permissions
	//specialities
	//legal_disputes
	support: SupportData
}