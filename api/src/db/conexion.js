const promiseMysql = require('promise-mysql');
const keys = require('./keys');
const conexion = async ()=>{
    return await promiseMysql.createPool(keys).getConnection();
}
module.exports = conexion;