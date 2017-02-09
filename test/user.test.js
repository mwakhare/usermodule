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
        var profile_data1 = {
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
        it('update method testing:', function (done) {
            var customer = new Customer_1.Customer(8, user_info1, profile_data1);
            customer.update();
            done();
        });
    });
});
//# sourceMappingURL=user.test.js.map