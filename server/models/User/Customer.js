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
            getConnection(function (err, con) {
                if (err) {
                    console.log({ "code": 100, "status": "Error in connection database" });
                    return;
                }
                console.log('connected as id ' + con.threadId);
                var query = "INSERT INTO user_profile (user_id, profile_picture, address, role, capablities, favourites) VALUES ( ?, ?, ?, ?, ?, ? )";
                con.query(query, _this.id, _this.profile.profile_pic, JSON.stringify(_this.profile.address), _this.profile.role, _this.profile.capablities, JSON.stringify(_this.profile.favourites), function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (!result.insertId) {
                        return;
                    }
                    console.log('Profile Data Inserted' + result.insertId);
                });
            });
        };
        _this.delete = function () { return false; };
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
    return Customer;
}(UserBase_1.UserBase));
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map