import * as mysql from "mysql";
import * as config from './env';

// class DBService {
    
//     private static _db_pool = null;

//     public static getDBPool() : any {

//         if (_db_pool == null) {
            
//             _db_pool = mysql.createPool ({
//                 connectionLimit : 100, //max limit to fix.
//                 host     : (<any>config).db_host(),
//                 user     : (<any>config).db_user(),
//                 password : (<any>config).db_pass(),
//                 database : (<any>config).db_name()
//             });
//         }

//         return _db_pool;
//         //module.exports = _db_pool;
//     }
// }

//   export const pool = mysql.createPool ({
//                 connectionLimit : 100, //max limit to fix.
//                 host     : (<any>config).db_host(),
//                 user     : (<any>config).db_user(),
//                 password : (<any>config).db_pass(),
//                 database : (<any>config).db_name()
//             });


        
var pool  = mysql.createPool({
                connectionLimit : 100, //max limit to fix.
                // host     : (<any>config).db_host(),
                // user     : (<any>config).db_user(),
                // password : (<any>config).db_pass(),
                // database : (<any>config).db_name()
                 host     : 'localhost',
                user     : 'milind',
                password : 'Tori@2016',
                database : 'korsall'
});

var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
          return cb(err);
        }
        cb(null, connection);
    });
};
module.exports = getConnection;

//module.exports.pool = pool.getConnection; // export the pools getConnection

// var getConnection = function (cb) {
//     pool.getConnection(function (err, connection) {
//         //if(err) throw err;
//         //pass the error to the cb instead of throwing it
//         if(err) {
//           return cb(err);
//         }
//         cb(null, connection);
//     });
// };

// module.exports = getConnection;


// var mySQL = require('mysql');
// var pool  = mySQL.createPool({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database
// });
// module.exports.pool = pool.getConnection; // export the pools getConnection