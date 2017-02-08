"use strict";
var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'raghuram',
    password: 'Tori@2016',
    database: 'KorsAll'
});
var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return cb(err);
        }
        cb(null, connection);
    });
};
module.exports = getConnection;
//# sourceMappingURL=db.service.js.map