import * as mysql from "mysql";

class DBService {
    
    private static _db_pool = null;

    static getDBPool() : any {

        if (_db_pool == null) {
            
            _db_pool = mysql.createPool ({
                connectionLimit : 100, //max limit to fix.
                host     : 'localhost',
                user     : 'milind',
                password : 'Tori@2016',
                database : 'korsall'
            });
        }

        return _db_pool;
    }
}