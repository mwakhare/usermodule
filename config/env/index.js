"use strict";
var path = require("path");
var env = process.env.NODE_ENV || 'development';
var config = require('./' + env);
var defaults = {
    root: path.join(__dirname, '/..')
};
module.exports = config;
//# sourceMappingURL=index.js.map