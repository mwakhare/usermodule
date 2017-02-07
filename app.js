"use strict";
var config = require("./config/env");
var express_1 = require("./config/express");
var app = new express_1.Application();
app.listen(config.app_port, config.env);
//# sourceMappingURL=app.js.map