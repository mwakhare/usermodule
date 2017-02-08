"use strict";
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.load = function (req, res, next, id) {
        console.log('User Loaded: ' + id);
        req.id = id;
        return next();
    };
    UserController.prototype.get = function (req, res) {
        console.log('get');
        return res.json(req.id);
    };
    UserController.prototype.update = function (req, res) {
        console.log('update');
        return res.json(req.id);
    };
    UserController.prototype.list = function (req, res) {
    };
    UserController.prototype.remove = function (req, res) {
        console.log('delete');
        return res.json(req.id);
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map