import * as mysql from "mysql";
import * as config from './env';
     
/*var pool  = mysql.createPool({
                connectionLimit : 100, 
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
module.exports = getConnection;*/


var pool  = mysql.createPool({
                connectionLimit : 100, //max limit to fix.
                host     : (<any>config).db_host,
                user     : (<any>config).db_user,
                password : (<any>config).db_pass,
                database : (<any>config).db_name
});

var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the callback instead of throwing it
        if(err) 
        {
            console.log("pool.getConnection error" + err);
            return callback(err);
        }
        callback(null, connection);
    });
};

export = getConnection;