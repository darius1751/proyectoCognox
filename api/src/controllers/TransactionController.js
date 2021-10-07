const TransactionModel = require('../models/TransactionModel');
const conexion = require('../db/conexion');
const TransactionController = ()=>{
    const getByUserId = async (req,res)=>{
        const connection = await conexion();
        const results = await connection.query('SELECT id,account_send_id,account_get_id,cash,date_transaction FROM transactions WHERE account_send_id = ?',[req.params.id]);
        res.send(results);
    }
    const post = async (req,res)=>{ 
        const connection = await conexion();
        const {accountSend,accountGet,cash} = req.body;
        const transaction = new TransactionModel(null,accountSend,accountGet,cash,null);
        const results = await connection.query('INSERT INTO transactions(cash,account_send_id,account_get_id) VALUES(?,?,?)',[transaction.cash,transaction.accountSend,transaction.accountGet]);
        res.send(results);
    };
    
    return {
       getByUserId,post
    };
}
module.exports = TransactionController();