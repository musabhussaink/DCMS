const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');

Router.get('/statuslist', (req, res) =>{
    db.query('SELECT * FROM status WHERE StatusId != 0  and StatusId != 1 AND StatusId != 2  and StatusId != 3', (err, data)=>{
        res.json(data);
    })
});

Router.post('/', function (req, res) {
    let Email = req.body.Email;
    let Password = req.body.Password;
    let PhoneNo = req.body.PhoneNo;
    let Name = req.body.Name;
    let Designation = req.body.Designation;
    let role = 2;
    let Status = req.body.status;
    var values = [Email, Password, PhoneNo, Name, Designation, Status];
    if(Status == 4){
    db.query('update `users` set Status = 5 where Status = 4', function (err, result) {
    db.query('INSERT INTO `users`(`Email`, `Password`, `PhoneNo`, `Name`, `Designation`, `Status`) VALUES (?)', [values], function (err, result) 
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
            // db.query('DELETE FROM user_roles WHERE user_roles.roles_roles_id = ?', role, (err, data)=>{})
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
    } else {
        db.query('INSERT INTO `users`(`Email`, `Password`, `PhoneNo`, `Name`, `Designation`, `Status`) VALUES (?)', [values], function (err, result) 
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
    }
});

module.exports = Router;