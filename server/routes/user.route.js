"use strict";
var express = require("express");
var expressJwt = require("express-jwt");
var user_controller_1 = require("../controllers/user.controller");
var config = require("../../config/env");
var UserRoute = (function () {
    function UserRoute() {
        var user = new user_controller_1.UserController();
        this._router = express.Router();
        this._router.route('/').post(expressJwt({ secret: config.jwt_secret }), user.list);
        this._router.param('userID', user.load);
        this._router.route('/:userID')
            .get(expressJwt({ secret: config.jwt_secret }), user.get)
            .post(expressJwt({ secret: config.jwt_secret }), user.update)
            .delete(expressJwt({ secret: config.jwt_secret }), user.remove);
    }
    UserRoute.prototype.route = function () {
        return this._router;
    };
    return UserRoute;
}());
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.route.js.map