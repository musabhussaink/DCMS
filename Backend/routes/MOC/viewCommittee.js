const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    var userId = req.headers['x-custom-header'];
    // SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee AND user_roles.roles_roles_id=4 and committee.Status = 1 AND users.idUser=?
    db.query('SELECT * FROM users, committee, committeemembers WHERE users.idUser = committeemembers.Users_idUser AND committee.idCommittee = committeemembers.Committee_idCommittee and committee.Status = 1 AND users.idUser=?',[userId], (err, data)=>{
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

// Router.delete('/delCommittee/:id', (req, res) =>{
//     const idCommittee = req.params.id;
//     console.log(idCommittee); 
//     db.query('DELETE FROM user_roles WHERE user_roles.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         if(data){
//             console.log("user roles committee deleted")
//             db.query('DELETE FROM milestone WHERE milestone.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                 if(err){
//                     console.log(err)
//                     return;
//                 }
//                 if(data){
//                     console.log("milestone committee deleted")
//                     db.query('DELETE FROM hoc_feedback WHERE hoc_feedback.CommitteeMembers_idCommitteeMembers = ?', idCommittee, (err, data)=>{
//                         if(err){
//                             console.log(err)
//                             return;
//                         }
//                         if(data){
//                             console.log("hoc_feedback committee deleted")
//                             db.query('DELETE FROM committeemembers WHERE committeemembers.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                                 if(err){
//                                     console.log(err)
//                                     return;
//                                 }
//                                 if(data){
//                                     console.log("committeemembers committee deleted")
//                                     db.query('DELETE FROM meeting WHERE meeting.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                                         if(err){
//                                             console.log(err)
//                                             return;
//                                         }
//                                         if(data){
//                                             console.log("meeting committee deleted")
//                                             db.query('DELETE FROM committee WHERE committee.idCommittee = ?', idCommittee, (err, data)=>{
//                                                 if(err){
//                                                     console.log(err)
//                                                     return;
//                                                 }
//                                             })
//                                         }
//                                     })
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// });


module.exports = Router;
