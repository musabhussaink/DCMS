const bcrypt = require('bcrypt');
const express= require('express');
const Router = express.Router();
var db= require('../database/connectionDB');
var jwtToken= require('jsonwebtoken');
require('dotenv').config();

Router.get('/roles', (req, res) =>{
    db.query('SELECT * FROM `roles`', (err, data)=>{
        res.json(data);
    })
});

Router.get('/verifyToken', function (req, res) {
    var token = req.headers['x-custom-header'];
    if (!token) return res.json({ success: false, err: 'No token provided.'});
    jwtToken.verify(token, process.env.SECRET, function (err, user) {
        if (err) return res.json({ success: false, err: 'Failed to authenticate. Please Login again' });
        if (user) {
            res.send(user);
        }
    });
});

Router.post('/',function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let roleId = req.body.role;

        db.query('SELECT users.idUser,users.Name,users.Email,roles.role_name FROM user_roles,users,roles WHERE user_roles.Users_idUser=users.idUser AND user_roles.roles_roles_id= roles.roles_id AND users.Email=? AND users.Password=? AND roles.roles_id=? LIMIT 1',[email,password,roleId],function (err,data) {
        if(err){
            res.json({
                success: false,
                msg: err.message
            });
            return;
        }  
        if(data && data.length==1){
            const usersData= {
                name: data[0].Name,
                email: data[0].Email,
                role: data[0].role_name,
                userId: data[0].idUser
            }
            console.log(usersData);

            const accessToken = generateAccessToken(usersData);
            // res.cookie('jwt', 'dsa', { maxAge: 86400});
            // res.setHeader('Set-cookie', 'newUser=true')
            
            res.json({
                success:true,
                token: accessToken,
                role:  data[0].role_name,
                roleId:  data[0].roles_id,
                userId: data[0].idUser
            });

        } else {
            if(roleId == 4){
                db.query('SELECT users.idUser,users.Name,users.Email,roles.role_name FROM users, committeemembers, roles Where users.idUser = committeemembers.Users_idUser AND users.Email=? AND users.Password=? AND roles.roles_id=4 LIMIT 1',[email,password,roleId],function (err,data1) { 
                    const usersData= {
                        name: data1[0].Name,
                        email: data1[0].Email,
                        role: data1[0].role_name,
                        userId: data1[0].idUser
                    }
                    console.log(usersData);
        
                    const accessToken = generateAccessToken(usersData);
                    // res.cookie('jwt', 'dsa', { maxAge: 86400});
                    // res.setHeader('Set-cookie', 'newUser=true')
                    
                    res.json({
                        success:true,
                        token: accessToken,
                        role:  data1[0].role_name,
                        roleId:  data1[0].roles_id,
                        userId: data1[0].idUser
                    });
                 })
            }
        }
    });

}); 

function generateAccessToken(user) {
  return jwtToken.sign(user, ""+process.env.SECRET, { expiresIn:86400 });
}

module.exports = Router;
