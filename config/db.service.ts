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

var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the callback instead of throwing it
        if(err) 
        {
            console.log("pool.getConnection error");
            return callback(err);
        }
        callback(null, connection);
    });
};

module.exports = getConnection;

