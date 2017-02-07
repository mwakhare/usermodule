"use strict";
var express = require("express");
var expressValidation = require("express-validation");
var param_validation_1 = require("../../config/param-validation");
var auth_controller_1 = require("../controllers/auth.controller");
var AuthRoute = (function () {
    function AuthRoute() {
        var auth = new auth_controller_1.AuthController();
        this._router = express.Router();
        this._router.route('/login').post(expressValidation(param_validation_1.default.login), auth.login);
        this._router.route('/register').post(expressValidation(param_validation_1.default.register), auth.register);
    }
    AuthRoute.prototype.route = function () {
        return this._router;
    };
    return AuthRoute;
}());
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map