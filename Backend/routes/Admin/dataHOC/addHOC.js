const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');
require('dotenv').config;

Router.get('/userlist', function (req, res) {
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=1;', (err, data)=>{
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (data) {
            res.json(data);
        }
    });
});

Router.get('/committeelist', function (req, res) {
    db.query('SELECT DISTINCT committee.idCommittee,committee.CommitteeName FROM committee where committee.Status = 1', function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json(result);
        }
    });
}) 

Router.post('/updateHead', (req, res) => {
    let committeeId = req.body.committee;
    let headId = req.body.user;
    let values = [headId, 3, committeeId];
    db.query(`DELETE from user_roles where user_roles.Committee_idCommittee=${committeeId}`, function (err, result1){
        if(result1){
            console.log("kuch huwa")
            db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`, `Committee_idCommittee`) VALUES (?)', [values], function (err, result)
            {
                if(result) {
                    res.json({
                        success: true,
                        err: 'Successfully added Head of Committee'
                    })
                }
                if(err) {
                    res.json({
                        success: false,
                        err: 'Can not interted right know. Try again!'
                    })
                }
            })      
        }
    })
})

module.exports = Router;