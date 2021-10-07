const express = require('express');
const userController = require('../controllers/UserController.js');
const userRouters =()=>{
    const routers = express.Router();
    routers.post('/login',userController.login);
    return routers;
}
module.exports = userRouters;

