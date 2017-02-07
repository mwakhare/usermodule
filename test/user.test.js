"use strict";
var Customer_1 = require("../server/models/User/Customer");
var chai = require("chai");
chai.should();
describe('User Model', function () {
    describe('Initialize Object', function () {
        var user_info = {
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
        var profile_data = {
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
        it('should initialize and return proper values', function () {
            var customer = new Customer_1.Customer(1, user_info, profile_data);
            customer.user_info.name.should.be.a('string');
            customer.user_info.name.should.equal('Ajitem Sahasrabuddhe');
        });
        it('should have the setter and getter functioning properly', function () {
            var customer = new Customer_1.Customer(1, user_info, profile_data);
            customer.profile.address[0].should.have.key('shipping');
            customer.profile.address[0]['shipping'].should.have.property('street');
            customer.profile.address[0]['shipping'].street.should.equal('');
            customer.profile.address[0]['shipping'].street = 'Unnamed Road';
            customer.profile.address[0]['shipping'].street.should.equal('Unnamed Road');
        });
    });
});
//# sourceMappingURL=user.test.js.map