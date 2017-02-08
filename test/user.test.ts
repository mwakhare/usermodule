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
			name: 'bbbb',
			email: 'bbb@torinit.com',
			password: 'torinit@bbb',
			date_of_birth: new Date('1989-02-10T05:30:00'),
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
			mobile_number: 666665565,
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

		it('should initialize and return proper values', function() {
			//let customer = new Customer(1, user_info, profile_data);
			//customer.save();
			
			// let customer1 = new Customer(8, user_info1, profile_data);
			// customer1.update();

			// Customer.getOne (8, function (err, user)
			// {
			// 	if (err)
			// 	{
			// 		console.log(" Customer getOne has error: " + err)

			// 	}
			// 	console.log(user);
			// });

			// Customer.list (function (err, user)
			// {
			// 	if (err)
			// 	{
			// 		console.log(" Customer list has error: " + err)

			// 	}
			// 	console.log(user);
			// });

			// customer1.user_info.name.should.be.a('string');
			// customer1.user_info.name.should.equal('Ajitem Sahasrabuddhe');
		});

		// it('should have the setter and getter functioning properly', function(){
		// 	let customer = new Customer(1, user_info, profile_data);
		// 	customer.profile.address[0].should.have.key('shipping');
		// 	customer.profile.address[0]['shipping'].should.have.property('street');
		// 	customer.profile.address[0]['shipping'].street.should.equal('');
		// 	customer.profile.address[0]['shipping'].street = 'Unnamed Road';
		// 	customer.profile.address[0]['shipping'].street.should.equal('Unnamed Road');
		// });

		it('getone customer', function(){
			Customer.getOne (7, function (err, user)
			{
				if (err)
				{
					console.log(" Customer getOne has error: " + err)

				}
				console.log(user);
			});
		});

		it('getall customers', function(){
			Customer.list (function (err, user)
			{
				if (err)
				{
					console.log(" Customer getall has error: " + err)

				}
				console.log(user);
			});
		});
	});
});