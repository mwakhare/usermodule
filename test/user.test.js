"use strict";
var Customer_1 = require("../server/models/User/Customer");
var chai = require("chai");
chai.should();
describe('User Model', function () {
    describe('Initialize Object', function () {
        var user_info = {
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
        var profile_data1 = {
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
        it('update method testing:', function (done) {
            var customer = new Customer_1.Customer(7, user_info1, profile_data1);
            customer.update();
            done();
        });
    });
});
//# sourceMappingURL=user.test.js.map