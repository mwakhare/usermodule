"use strict";
var AuthController = (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (req, res, next) {
        res.json(req.body);
    };
    AuthController.prototype.register = function (req, res, next) {
    };
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map