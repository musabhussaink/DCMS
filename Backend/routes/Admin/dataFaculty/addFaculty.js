const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');

Router.post('/', function (req, res) {
    let Email = req.body.Email;
    let Password = req.body.Password;
    let PhoneNo = req.body.PhoneNo;
    let Name = req.body.Name;
    let Designation = req.body.Designation;
    let role = 5

    var values = [Email, Password, PhoneNo, Name, Designation]
    db.query('INSERT INTO `users`(`Email`, `Password`, `PhoneNo`, `Name`, `Designation`) VALUES (?)', [values], function (err, result) 
    {
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted  on users right know. Try again!'
            })
            return;
        }
        values = [result.insertId, role]
        if(result){
            db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`) VALUES (?)', [values], function (err, data) {
                if (err) {
                    res.json({
                        success: false,
                        err: 'Can not interted on usersRoles right know. Try again!'
                    })
                    return;
                }
            })
        }
        res.json({
            success: true,
        })
    });
});

module.exports = Router;