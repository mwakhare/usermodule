"use strict";
var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'milind',
    password: 'Tori@2016',
    database: 'korsall'
});
var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("pool.getConnection error");
            return callback(err);
        }
        callback(null, connection);
    });
};
module.exports = getConnection;
//# sourceMappingURL=db.service.js.map