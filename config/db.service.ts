import * as mysql from "mysql";
import * as config from './env';
     
var pool  = mysql.createPool({
                connectionLimit : 100, //max limit to fix.
                host     : 'localhost',
                user     : 'raghuram',
                password : 'Tori@2016',
                database : 'KorsAll'
});

var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        if(err) {
          return cb(err);
        }
        cb(null, connection);
    });
};
module.exports = getConnection;