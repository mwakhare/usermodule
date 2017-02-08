"use strict";
var getConnection = require('../../config/db.service');
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.load = function (req, res, next, id) {
        req.id = id;
        return next(req, id);
    };
    UserController.prototype.get = function (req, res, id) {
        res.json(req.id);
    };
    UserController.prototype.update = function (req, res) {
    };
    UserController.prototype.list = function (req, res) {
        getConnection(function (err, con) {
            if (err) {
                console.log("getConnection (user list) error");
                res.json(false);
            }
            var userQuery = 'select * from user';
            console.log('database connection (user list) thread id: ' + con.threadId);
            con.query(userQuery, function (err, users) {
                con.release();
                if (err) {
                    console.log("userQuery (user list) error");
                    res.json(false);
                }
                else {
                    res.json(users);
                }
            });
        });
    };
    UserController.prototype.remove = function (req, res) {
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map