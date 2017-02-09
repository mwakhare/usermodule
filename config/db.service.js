"use strict";
var mysql = require("mysql");
var config = require("./env");
var pool = mysql.createPool({
    connectionLimit: 100,
    host: config.db_host,
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name
});
var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("db.service:pool.getConnection error: " + err);
            return callback(err);
        }
        callback(null, connection);
    });
};
module.exports = getConnection;
//# sourceMappingURL=db.service.js.map