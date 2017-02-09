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
			name: 'ggggggggggg',
			email: 'gggggggggg@torinit.com',
			password: 'gggggggggg@ccc',
			date_of_birth: new Date('1989-05-05T05:30:00'),
			date_of_anniversary: '',
			gender: 1,
			social: [{
				facebook: {
					connected: true,
					id: ''
				},
				twitter: {
					connected: true,
					id: ''
				}
			}],
			tc: true,
			mobile_number: 6666666666,
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
			profile_pic: 'gggggggg',
			address: [{
				shipping: {
					building: 'ggggggggggg',
					apartment: 56566,
					landmark: 'gggggggggg',
					street: 'gggggggggg',
					province: 'ggggggggggg',
					zip_code: '566655',
					country: 'ggggggggggg',
					city: 'ggggggggggg'
				}
			}],
			role: 6,
			capablities: 6,
			favourites: {
				products: [-6],
				designers: [-6]
			}
		};

		
		// it('getone customer testing', function(done){
		// 	Customer.getOne (7, function (err, user)
		// 	{
		// 		if (err)
		// 		{
		// 			console.log(" Customer getOne has error: " + err)

		// 		}
		// 		console.log(user);
		// 	});
		// 	done ();
		// });

		// it('Testmodule:getall customers- ', function(done){
		// 	Customer.list (function (err, users)
		// 	{
		// 		if (err)
		// 		{
		// 			console.log("user.test.ts:getall customers list has error: " + err)

		// 		}

		// 		console.log(users);
		// 	});

		// 	done ();
		// });

		//tested OK.
		// it('save method testing:', function(done) {
		// 	let customer = new Customer(98, user_info1, profile_data1);
		// 	customer.save();
		// 	done ();
		// });

		it('update method testing:', function(done) {
			let customer = new Customer(8, user_info1, profile_data1);
			customer.update();

			done ();
		});
		

		// it('delete method testing:', function() {
		// 	let customer = new Customer(8, user_info1, profile_data1);
		// 	customer.delete();
		// });
	});
});