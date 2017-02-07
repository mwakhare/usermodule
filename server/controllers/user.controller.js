"use strict";
var getConnection = require('../../config/db.service');
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.load = function (req, res, next, id) {
    };
    UserController.prototype.get = function (req, res) {
    };
    UserController.prototype.update = function (req, res) {
    };
    UserController.prototype.list = function (req, res) {
        getConnection(function (err, con) {
            if (err) { }
            var userQuery = 'select * from user';
            console.log("con: " + con);
            con.query(userQuery, function (err, user) {
                con.release();
                res.json(user);
            });
        });
    };
    UserController.prototype.remove = function (req, res) {
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map