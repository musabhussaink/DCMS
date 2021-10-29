const express= require('express');
const moment = require('moment');
const Router = express.Router();
var db= require('../../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT * FROM committee where committee.Status = 1', (err, data)=>{
        res.json({
            result: data
        })
    })
});

Router.get('/details', (req, res) =>{
    var committeeId = req.headers['x-custom-header'];
    db.query('SELECT * FROM committee where committee.idCommittee = ?',[committeeId], (err, data)=>{
        if(data){
            db.query('SELECT * FROM users, user_roles where users.idUser = user_roles.Users_idUser AND user_roles.Committee_idCommittee = ? AND user_roles.roles_roles_id = 3',[committeeId], (err, data1)=>{
                if(data1){
                    db.query('SELECT * FROM users, committeemembers where users.idUser = committeemembers.Users_idUser AND committeemembers.Committee_idCommittee = ?',[committeeId], (err, data2)=>{
                        res.json({
                            resultCommittee: data,
                            resultHead: data1,
                            resultMembers: data2,
                        })
                    })
                }  
            })
        }
    })
});

Router.put('/delCommittee', (req, res) => {
    var committeeId = req.body.id;
    db.query('UPDATE committee SET committee.Status=0 WHERE committee.idCommittee=?',[committeeId], (err, data)=>{
        if(err){
            return console.log(err);
        }
        res.json({
            result: data
        })
    })
})
Router.put('/updateCommittee', (req, res) => {
    let committeeId = req.body.CommitteeId
    let CommitteeName = req.body.CommitteeName;
    let CommitteeGoal = req.body.CommitteeGoal;
    let CommitteeDesolvingDate = moment(req.body.CommitteeDesolvingDate).format("YYYY-MM-DD")
    let CommitteeDescription = req.body.CommitteeDescription;
    let headId = req.body.headId;
    let Members = req.body.Members;
    
    db.query(`UPDATE committee SET committee.CommitteeName='${CommitteeName}', committee.goal='${CommitteeGoal}', committee.committeeDesolveDate='${CommitteeDesolvingDate}', committee.Description='${CommitteeDescription}' WHERE committee.idCommittee=?`,[committeeId], function (err, result) 
    {
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        if(result){
            var values1= [headId, '3', committeeId];
            console.log(values1);
            db.query(`UPDATE user_roles SET user_roles.Users_idUser='${headId}', user_roles.roles_roles_id='3' WHERE user_roles.Committee_idCommittee=?`, [committeeId], function (err1, result1)
            {
                console.log(result1)
                if(result1.affectedRows == 0){
                    if(headId == 0){
                        result1 = true;
                    } else {
                        db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`, `Committee_idCommittee`) VALUES (?)', [values1], function (errH, resultH){
                            result1 = true;
                        })
                    } 
                }
                if (err1) 
                {
                    res.json({
                        success: false,
                        err: 'Can not interted right know. Try again!'
                    })
                }
                if(result1)
                {
                    db.query('DELETE FROM committeemembers WHERE committeemembers.Committee_idCommittee = ?', committeeId, (err, data)=>{
                    if(data){
                        for (var e in Members) 
                        {
                            MembersId=Members[e].value;
                            var values3= [committeeId,MembersId];
                            console.log(values3);
                            db.query('INSERT INTO `committeemembers`(`Committee_idCommittee`, `Users_idUser`) VALUES (?)', [values3], function (err2, result2)
                            {
                                
                                if(err2){
                                    res.json({
                                        success:false
                                    })
                                }
                            });
                        }
                        res.json({
                            success:true
                        })
                    }
                })
                }
            
            } 
        )};
    });
})


module.exports = Router;
