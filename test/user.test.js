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
        var user_info1 = {
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
        it('should initialize and return proper values', function () {
        });
        it('getone customer', function () {
            Customer_1.Customer.getOne(7, function (err, user) {
                if (err) {
                    console.log(" Customer getOne has error: " + err);
                }
                console.log(user);
            });
        });
        it('getall customers', function () {
            Customer_1.Customer.list(function (err, user) {
                if (err) {
                    console.log(" Customer getall has error: " + err);
                }
                console.log(user);
            });
        });
    });
});
//# sourceMappingURL=user.test.js.map