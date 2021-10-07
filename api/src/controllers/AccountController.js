const conexion = require('../db/conexion');
const AccountController = ()=>{
    const getByUserId = async (req,res)=>{
        const connection = await conexion();
        const {id} = req.params;
        const results = await getByUserIdMethod(id);
        res.send(results);
    };
    const getByUserIdMethod = async (id)=>{
        const connection = await conexion();
        return connection.query('SELECT id,cash FROM account WHERE client_id = ?',[id]);
    }
    const putCash = async (req,res)=>{
        const connection = await conexion();
        const {id} = req.params;
        const {cash} = req.body;
        connection.query('UPDATE account SET cash = ? WHERE id = ?',[cash,id]);
    }
    return {
        getByUserId,putCash,getByUserIdMethod
    };
}
module.exports = AccountController();