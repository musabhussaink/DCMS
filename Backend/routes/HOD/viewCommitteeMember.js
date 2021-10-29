const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    db.query('SELECT idCM, Name, PhoneNo, CommitteeName, Email, idUser FROM users, committeemembers, committee Where committee.idCommittee = committeemembers.Committee_idCommittee AND users.idUser = committeemembers.Users_idUser', (err, data)=>{
        res.json({
            result: data
        })
        //UNION ALL SELECT role_name FROM users, user_roles, roles Where users.idUser = user_roles.Users_idUser and roles.roles_id = user_roles.roles_roles_id

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
