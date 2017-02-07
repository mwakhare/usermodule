"use strict";
var express = require("express");
var auth_route_1 = require("./auth.route");
var user_route_1 = require("./user.route");
var router = express.Router();
router.get('/health-check', function (req, res) {
    res.json('OK');
});
var authRoute = new auth_route_1.AuthRoute();
var userRoute = new user_route_1.UserRoute();
router.use('/auth', authRoute.route());
router.use('/user', userRoute.route());
module.exports = router;
//# sourceMappingURL=index.route.js.map