import {Customer} from '../server/models/User/Customer';
import * as chai from 'chai';

chai.should();

describe('User Model', () => {
	describe('Initialize Object', () => {
		let user_info = {
			name: 'Ajitem Sahasrabuddhe',
			email: 'asahasrabuddhe@torinit.com',
			password: 'torinit@123',
			date_of_birth: new Date('1989-09-30T05:30:00'),
			date_of_anniversary: '',
			gender: 1,
			social: [{
				facebook: {
					connected: false,
					id: ''
				},
				twitter: {
					connected: false,
					id: ''
				}
			}],
			tc: true,
			mobile_number: 8888324979,
			verified: [
				{
					email: true,
				},
			],
			active: true,
			last_login: '',
			ip_address: '',
			mac_address: '',
			browser_string: '',
		};

		let profile_data = {
			profile_pic: '',
			address: [{
				shipping: {
					building: 'Trendy Towers 30',
					apartment: 1801,
					landmark: 'Amanora Town Center',
					street: '',
					province: 'Maharashtra',
					zip_code: '411028',
					country: 'India',
					city: 'Pune'
				}
			}],
			role: 2,
			capablities: 3,
			favourites: {
				products: [-1],
				designers: [-1]
			}
		};


		let user_info1 = {
			name: 'dddd',
			email: 'ddd@torinit.com',
			password: 'ddddd@ccc',
			date_of_birth: new Date('1989-03-10T05:30:00'),
			date_of_anniversary: '',
			gender: 1,
			social: [{
				facebook: {
					connected: false,
					id: ''
				},
				twitter: {
					connected: false,
					id: ''
				}
			}],
			tc: false,
			mobile_number: 4444444,
			verified: [
				{
					email: true,
				},
			],
			active: false,
			last_login: '',
			ip_address: '',
			mac_address: '',
			browser_string: '',
		};


		let profile_data1 = {
			profile_pic: '',
			address: [{
				shipping: {
					building: 'mmmmmmmmmm',
					apartment: 5656,
					landmark: 'mmmmm',
					street: 'mmmm',
					province: 'mmmm',
					zip_code: '5655',
					country: 'mmmm',
					city: 'mmmm'
				}
			}],
			role: 2,
			capablities: 3,
			favourites: {
				products: [-1],
				designers: [-1]
			}
		};

		
		// it('getone customer testing', function(){
		// 	Customer.getOne (7, function (err, user)
		// 	{
		// 		if (err)
		// 		{
		// 			console.log(" Customer getOne has error: " + err)

		// 		}
		// 		console.log(user);
		// 	});
		// });

		// it('getall customers testing', function(){
		// 	Customer.list (function (err, user)
		// 	{
		// 		if (err)
		// 		{
		// 			console.log(" Customer getall has error: " + err)

		// 		}
		// 		console.log(user);
		// 	});
		// });

		// it('save method testing:', function() {
		// 	let customer = new Customer(33, user_info1, profile_data1);
		// 	customer.save();
		// });

		// it('update method testing:', function() {
		// 	let customer = new Customer(8, user_info1, profile_data1);
		// 	customer.update();
		// });
		

		// it('delete method testing:', function() {
		// 	let customer = new Customer(8, user_info1, profile_data1);
		// 	customer.delete();
		// });
	});
});