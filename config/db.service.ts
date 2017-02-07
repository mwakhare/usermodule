import * as mysql from "mysql";
import * as config from './env';

class DBService {
    
    private static _db_pool = null;

    static getDBPool() : any {

        if (_db_pool == null) {
            
            _db_pool = mysql.createPool ({
                connectionLimit : 100, //max limit to fix.
                host     : (<any>config).db_host(),
                user     : (<any>config).db_user(),
                password : (<any>config).db_pass(),
                database : (<any>config).db_name()
            });
        }

        return _db_pool;
    }
}