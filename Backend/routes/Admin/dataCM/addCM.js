const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');

Router.get('/userlist', function (req, res) {
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id = 5', (err, data)=>{
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

Router.get('/roleslist', (req, res) =>{
    db.query('SELECT * FROM roles WHERE roles_id != 1  and roles_id != 2 AND roles_id != 5  and roles_id != 6', (err, data)=>{
        res.json(data);
    })
});



Router.post('/', function (req, res) {
    let committee = req.body.committee
    let user = req.body.user
    let role = req.body.role

    var values = [committee, user];
    if(role == 4){
        db.query('INSERT INTO `committeemembers`(`Committee_idCommittee`, `Users_idUser`) VALUES (?)', [values], function (err, result)
        {   
            console.log(result)
            if(err){
                res.json({
                    success:false
                }) 
                return;           
            }
            res.json({
                success:true
            }) 

        });
    } else if(role == 3){
        db.query('DELETE FROM user_roles WHERE user_roles.Committee_idCommittee = ?', committee, (err, data)=>{
            console.log(data);
            if(err){
                res.json({
                    success:false
                }) 
                return;           
            }
            if(data){
                values = [user, role, committee];
                db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`, `Committee_idCommittee`) VALUES (?)', [values], function (err2, result2){
                    if(err2){
                        res.json({
                            success:false
                        }) 
                        return;           
                    }
                })
                res.json({
                    success:true
                })
            } 
        })
    }
});



module.exports = Router;