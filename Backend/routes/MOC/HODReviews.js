const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM reviews, users WHERE users.idUser= reviews.Users_idUser and reviews.Roles_rolesid = 2', (err, data)=>{
        res.json({
            result: data
        })
    })
});


module.exports = Router;
