import mysql, { MysqlError } from "mysql";
import config from "../01-Utils/config";

const connection = mysql.createPool({
    host: config.mySql.host,
    user: config.mySql.user,
    password: config.mySql.password,
    database: config.mySql.database
});

function execute(sql: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(sql, (err: MysqlError, result: any) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    execute
};