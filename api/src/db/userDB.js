const conexion = require('./conexion.js');
const userDB = ()=>{
    const login = async (user)=>{
        try{
            const {identification,password} = user;
            const response = await conexion.query('SELECT id FROM user WHERE identification = ? AND password = ?',[identification,password]);
            
        }catch(err){
            
        }
        
    }
}