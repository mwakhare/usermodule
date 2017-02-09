"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserBase_1 = require("./UserBase");
var getConnection = require("../../../config/db.service");
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(id, user_info, profile) {
        var _this = _super.call(this, id, user_info) || this;
        _this.save = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    console.log("Customer save method (getConnection) has error in getting connnecton." + err);
                    return;
                }
                console.log('Customer save method - database connection thread id: ' + con.threadId);
                var query = "INSERT INTO user (user_info) VALUES ( ? )";
                console.log("Customer save method (getConnection): " + query);
                con.query(query, JSON.stringify(_this.user_info), function (err, result) {
                    console.log('Customer save method in con.query before release message.');
                    con.release();
                    if (err) {
                        console.log("Customer save method - con.query: has error while database query: " + err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log("Customer save method - con.query: result: " + result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('Customer save method: User Created: ' + result.insertId);
                });
            });
        };
        _this.update = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    console.log("Customer update method (getConnection1) has error in getting connnecton." + err);
                    return;
                }
                console.log('Customer update method getConnection1 - database connection thread id: ' + con.threadId);
                var query = "UPDATE user SET user_info = ? WHERE id = ?";
                console.log("Customer update method getConnection1 update query: " + query);
                con.query(query, [JSON.stringify(_this.user_info), _this.id], function (err, result) {
                    console.log("Customer update method getConnection1 (user) before release messge.");
                    con.release();
                    if (err) {
                        console.log("Customer update method - con.query: has error while database query: " + err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log("Customer update method1 - con.query: result: " + result);
                        return;
                    }
                    console.log('Customer update method1: User updated: ' + result.insertId);
                });
            });
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    console.log("Customer update method (getConnection2) has error in getting connnecton." + err);
                    return;
                }
                console.log('Customer update method getConnection2 (user_profile) - database connection thread id: ' + con.threadId);
                var query = "UPDATE user_profile SET \n\t\t\t\t\t\tprofile_picture = ?,  \n\t\t\t\t\t\taddress = ?, \n\t\t\t\t\t\trole = ? \n\t\t\t\t\t\tcapablities = ?, \n\t\t\t\t\t\tfavourites = ? \n\t\t\t\t\t\tWHERE user_id = ?";
                console.log("Customer update method getConnection2 update query: " + query);
                var strProfile_picture = _this.profile.profile_pic;
                var addressStringify = JSON.stringify(_this.profile.address);
                var favouritesStringify = JSON.stringify(_this.profile.favourites);
                con.query(query, [
                    strProfile_picture,
                    addressStringify,
                    _this.profile.role,
                    _this.profile.capablities,
                    favouritesStringify,
                    _this.id
                ], function (err, result) {
                    console.log("Customer update method getConnection2 (user) before release messge.");
                    con.release();
                    if (err) {
                        console.log("Customer update method 2 - con.query: has error while database query: " + err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log("Customer update method2 - con.query: result: " + result);
                        return;
                    }
                    console.log('Customer update method2: User_profile is Updated result: ' + result.insertId);
                });
            });
        };
        _this.delete = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    console.log("Customer delete method (getConnection1) has error in getting connnecton." + err);
                    return;
                }
                console.log('Customer delete method getConnection1 (user) - database connection thread id: ' + con.threadId);
                var deleteUserQuery = "DELETE FROM `korsall`.`user` WHERE id = " + this.id;
                console.log("Customer delete method getConnection1 (user)" + deleteUserQuery);
                con.query(deleteUserQuery, function (err, users) {
                    console.log("Customer delete method getConnection1 (user) before release messge.");
                    con.release();
                    if (err) {
                        console.log("Customer delete method 1 - con.query: has error while database query: " + err);
                        return;
                    }
                    if (users.affectedRows == 1) {
                        console.log({ "code": 100, "status": "Record is deleted successfully!" });
                        console.log("user record is deleted.");
                    }
                    console.log("Customer delete method 1 - con.query: Customer - user record is deleted.");
                    console.log("Customer delete method 1 - con.query: " + users);
                    return;
                });
            });
            return false;
        };
        _this._profile = profile;
        return _this;
    }
    Object.defineProperty(Customer.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        set: function (profile) {
            this._profile = profile;
        },
        enumerable: true,
        configurable: true
    });
    Customer.getOne = function (userToFind, callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("Customer static getOne method (getConnection) has error in getting connnecton." + err);
                return;
            }
            console.log('Customer static getOne method - database connection thread id: ' + con.threadId);
            var userQuery = 'SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id where u.id = ' + userToFind;
            console.log(userQuery);
            con.query(userQuery, function (err, users) {
                console.log('Customer static getOne method in con.query before release');
                con.release();
                if (err) {
                    console.log("Customer static getOne method - con.query: has error while database query: " + err);
                    callback(err);
                }
                else {
                    console.log("Customer static getOne method: userQuery is OK.");
                    callback(err, users);
                }
            });
        });
    };
    Customer.list = function (callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("Customer static list method (getConnection) has error in getting connnecton." + err);
                return;
            }
            var userQuery = "SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id";
            console.log('Customer static list method database connection (join query) thread id: ' + con.threadId);
            console.log(userQuery);
            con.query(userQuery, function (err, users) {
                console.log('Customer static list method in con.query before release');
                con.release();
                if (err) {
                    console.log("Customer static list method - con.query: (Customer list join query) has error while database query: " + err);
                    callback(err);
                }
                else {
                    console.log("Customer static list method: (Customer list join query) userQuery is OK.");
                    callback(err, users);
                }
            });
        });
    };
    ;
    return Customer;
}(UserBase_1.UserBase));
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map