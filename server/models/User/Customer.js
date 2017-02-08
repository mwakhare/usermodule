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
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "INSERT INTO user (user_info) VALUES ( ? )";
                con.query(query, JSON.stringify(_this.user_info), function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('User Created ' + result.insertId);
                });
            });
        };
        _this.update = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "UPDATE user SET user_info = ? WHERE id = ?";
                con.query(query, [JSON.stringify(_this.user_info), _this.id], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('User table Updated ' + result.insertId);
                });
            });
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "UPDATE user_profile SET user_id = ?, profile_picture = ?,  \n\t\t\t\t\t\taddress = ?, role = ? capablities = ?, favourites = ? WHERE id = ?";
                con.query(query, [
                    _this.id,
                    _this.profile.profile_pic,
                    _this.profile.address,
                    _this.profile.role,
                    _this.profile.capablities,
                    _this.profile.favourites,
                    _this.id
                ], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        console.log(result);
                        return;
                    }
                    _this.id = result.insertId;
                    console.log('User_profile is Updated ' + result.insertId);
                });
            });
        };
        _this.delete = function () {
            getConnection(function (err, con) {
                if (err) {
                    console.log("getConnection (Customer delete) error");
                    return;
                }
                var deleteUserQuery = "DELETE FROM `korsall`.`user` WHERE id = ";
                console.log('database connection (d) thread id: ' + con.threadId);
                con.query(deleteUserQuery, [this.id], function (err, users) {
                    con.release();
                    if (err) {
                        console.log("userQuery (user list) error");
                        return;
                    }
                    else {
                        return true;
                    }
                });
            });
            getConnection(function (err, con) {
                if (err) {
                    console.log("getConnection (Customer delete) error");
                    return;
                }
                var deleteUserProfileQuery = "DELETE FROM `korsall`.`user_profile` WHERE id = ";
                console.log('database connection (d) thread id: ' + con.threadId);
                con.query(deleteUserProfileQuery, [this.id], function (err, users) {
                    con.release();
                    if (err) {
                        console.log("userQuery (user list) error");
                        return;
                    }
                    else {
                        return true;
                    }
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
                console.log("getConnection (Customer user list) error");
                return;
            }
            var userQuery = 'SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id where u.id = ';
            console.log(userQuery);
            console.log('database connection (user list) thread id: ' + con.threadId);
            con.query(userQuery, [userToFind], function (err, users) {
                con.release();
                if (err) {
                    console.log("userQuery (user list) error");
                    callback(err);
                }
                else {
                    callback(err, users);
                }
            });
        });
    };
    Customer.list = function (callback) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (Customer user list) error");
                return;
            }
            var userQuery = "SELECT u.id, u.user_info, up.profile_picture, up.address, up.role, up.capablities, up.favourites FROM user as u JOIN user_profile AS up ON u.id = up.user_id";
            console.log('database connection (user list) thread id: ' + con.threadId);
            console.log(userQuery);
            con.query(userQuery, function (err, users) {
                con.release();
                if (err) {
                    console.log("userQuery (user list) error");
                    callback(err);
                }
                else {
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