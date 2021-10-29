var express = require('express');
var Router = express.Router();
const moment = require('moment');
var db = require('../../../database/connectionDB');
require('dotenv').config;

Router.get('/', function (req, res) {
    var userId = req.headers['x-custom-header'];
    db.query('SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3 and committee.Status = 1 AND users.idUser=?',[userId], function (err, result) {
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (result) {
            res.json({
                sessionsData: result
            })
        }
    });
})

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

Router.put('/updateCommittee', (req, res) => {
    let committeeId = req.body.CommitteeId
    let CommitteeName = req.body.CommitteeName;
    let CommitteeGoal = req.body.CommitteeGoal;
    let CommitteeDesolvingDate = moment(req.body.CommitteeDesolvingDate).format("YYYY-MM-DD")
    let CommitteeDescription = req.body.CommitteeDescription;
    let Members = req.body.Members;

    db.query(`UPDATE committee SET committee.CommitteeName='${CommitteeName}', committee.goal='${CommitteeGoal}', committee.committeeDesolveDate='${CommitteeDesolvingDate}', committee.Description='${CommitteeDescription}' WHERE committee.idCommittee=?`,[committeeId], function (err, result) 
    {
        console.log("kuch huwa")
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        if(result){
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
    };
    });
})

module.exports = Router;