const express = require('express');
const accountController = require('../controllers/AccountController');
const accountRouters =()=>{
    const routers = express.Router();
    routers.get('/:id',accountController.getByUserId);
    routers.put('/:id',accountController.putCash);
    return routers;
}
module.exports = accountRouters;
