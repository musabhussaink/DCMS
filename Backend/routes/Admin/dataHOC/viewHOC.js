const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3', (err, data)=>{
        res.json({
            result: data
        })
        //UNION ALL SELECT role_name FROM users, user_roles, roles Where users.idUser = user_roles.Users_idUser and roles.roles_id = user_roles.roles_roles_id

    })
});


module.exports = Router;
