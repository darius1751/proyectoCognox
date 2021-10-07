const UserModel = require('../models/UserModel.js');
const conexion = require('../db/conexion');
const AccountController = require('./AccountController.js');
const UserController = ()=>{
    
    const login = async (req,res)=>{
        const {identification,password} = req.body;
        const connection = await conexion();
        const user = new UserModel(null,null,identification,password);
        let results = await connection.query('SELECT id,name FROM client WHERE identification = ? AND password = ?',[user.identification,user.password]);
        results = (results[0]?.id)? results[0]: {id:null};
        if(results?.id)
            results.accounts = await AccountController.getByUserIdMethod(results?.id);
        res.send(results);
    }
    
    return {
       login
    };
}
module.exports = UserController();