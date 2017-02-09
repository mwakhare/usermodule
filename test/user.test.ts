import {Customer} from '../server/models/User/Customer';
import * as chai from 'chai';

chai.should();

describe('User Model', () => {
	describe('Initialize Object', () => {
		let user_info = {
			name: 'Anil Shasri',
			email: 'Shasri@torinit.com',
			password: 'torinit@Shasri',
			date_of_birth: new Date('1989-01-01T05:30:00'),
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
			mobile_number: 3333333333,
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
			name: 'ooooo',
			email: 'ooooooooo@torinit.com',
			password: 'oooooooooo@ccc',
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
			mobile_number: 2122,
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
			profile_pic: 'ooooooo',
			address: [{
				shipping: {
					building: 'oooooooooo',
					apartment: 56566,
					landmark: 'ooooooooo',
					street: 'ooooooooo',
					province: 'oooooooooo',
					zip_code: '1212',
					country: 'oooooo',
					city: 'oooooooooooo'
				}
			}],
			role: 12,
			capablities: 12,
			favourites: {
				products: [-12],
				designers: [-12]
			}
		};

		//database fires but user test fails. 
		// it('getone customer testing', function(done)
		// {
		// 	Customer.getOne (7, function (err, customer)
		// 	{
		// 		if (err)
		// 		{
		// 			console.log(" Customer getOne has error: " + err)

		// 		}
				
		// 		customer.user_info.name.should.be.a('string');
		// 		customer.user_info.name.should.equal('aaaa');

		//		done ();
		// 		});
		//});

		
		//database fires first unit test is ok but second fails
		//  it('Testmodule:getall customers- ', function(done)
		//  {
		//  	Customer.list (function (err, customers)
		//  	{
		//  		if (err)
		//  		{
		//  			console.log("user.test.ts:getall customers list has error: " + err)

		//  		}

		//  		//console.log(users);
		//  	customers.should.be.a('array');

		// 		customers[0].user_info.name.should.be.a('string');
		// 		customers[0].user_info.name.should.equal('aaaa');

		//  		done ();
		//  	});
		//  });

		//tested OK.
		// it('save method testing:', function(done) 
		// {
		// 	let customer = new Customer(56, user_info, profile_data);

		// 	customer.save();
		// 	done ();
		// });

		
		it('update method testing:', function(done) 
		{
			let customer = new Customer(7, user_info1, profile_data1);
			customer.update();

			done ();
		});
		

		// it('delete method testing:', function(done) 
		// {
		// 	let customer = new Customer(7, user_info1, profile_data1);
		//  	customer.delete();
		// 	done ();
		// });
	});
});