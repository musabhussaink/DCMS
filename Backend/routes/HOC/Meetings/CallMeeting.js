var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');



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
            res.json(result)
        }
    });
})  
Router.post('/', function (req, res) {
    let createUser = req.body.user;
    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let Committee = req.body.Committee;
 
    db.query('SELECT idCM, Name, PhoneNo, CommitteeName, idUser FROM users, committeemembers, committee Where committee.idCommittee = committeemembers.Committee_idCommittee AND users.idUser = committeemembers.Users_idUser and committee.idCommittee = ?',[Committee], (err, data)=>{
        var values = [Date,Time,Duration,Agenda,Venue,Committee,createUser,data.length];
        if(data){
            db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `Agenda`, `Venue`,`Committee_idCommittee`, `createMeetingUser`, `ParticipantInvited`) VALUES (?)', [values], function (err, result) 
            {
                if (err) {
                    res.json({
                        success: false,
                        err: 'Can not interted right know. Try again!'
                    })
                    return;
                }
                if(result){
                    db.query('SELECT users.Email FROM users,committeemembers WHERE users.idUser = committeemembers.Users_idUser AND committeemembers.Committee_idCommittee = ?',[Committee], async(err,data)=>{
                        if(err){
                            res.json({
                                success:'false',
                                err:err.message
                            })
        
                        }
                        if(data){
                        //  res.json(data)   
                        let email = data[0].Email;
                        try {
                            var transporter = nodemailer.createTransport(smtpTransport({
                                service: 'gmail',
                                host: 'smtp.gmail.com',
                                auth: {
                                    user: 'dcms337@gmail.com',
                                    pass: 'yasirfaheem'
                                }
                            }));
                
                            let mailOptions = await transporter.sendMail({
                                from: '"DCMS" <dcms337@gmail.com>', // sender address
                                to: email, // list of receivers
                                subject: "Notification", // Subject line
                                text: ``, // plain text body
                                html: `Dear User you have a meeting at ${Time} and venue is ${Venue} on ${Date}. Meeting agenda is ${Agenda} Please join this meeting. Thank-You`, // html body
                            });
                
                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                            // console.log("Message sent: %s", info.messageId);
                
                        }
                        catch (e) {
                            console.log(e);
                        }
                        // console.log(data)
                        }
                    })
                }
            });
        }            
    })
    res.json({
    success: true
})
 });

// Router.get('/', function (req, res) {
//     var userId = req.headers['x-custom-header'];
//     db.query('SELECT * FROM users, committee, user_roles WHERE users.idUser = user_roles.Users_idUser AND committee.idCommittee = user_roles.Committee_idCommittee and user_roles.roles_roles_id = 3 and committee.Status = 1 AND users.idUser=?',[userId], function (err, result) {
//         if (err) {
//             res.json({
//                 success: false,
//                 err: 'Unexpected Error occurred. Try Again! '
//             })
//         }
//         if (result) {
//             res.json(result)
//         }
//     });
// })  
// Router.post('/', function (req, res) {
//     let createUser = req.body.user;
//     let Date = req.body.date;
//     let Time = req.body.time;
//     let Duration = req.body.duration;
//     let Agenda = req.body.agenda;
//     let Venue = req.body.venue;
//     let Committee = req.body.Committee;

//     var values = [Date,Time,Duration,Agenda,Venue,Committee,createUser];
//     console.log(values);
//     db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `Agenda`, `Venue`,`Committee_idCommittee`, `createMeetingUser`) VALUES (?)', [values], function (err, result) 
//     {
//         if (err) {
//             res.json({
//                 success: false,
//                 err: 'Can not interted right know. Try again!'
//             })
//         }
//         var meetingId= result.insertId;
//         if(result){
//             db.query('SELECT idCM, Name, PhoneNo, CommitteeName, idUser FROM users, committeemembers, committee Where committee.idCommittee = committeemembers.Committee_idCommittee AND users.idUser = committeemembers.Users_idUser and committee.idCommittee = ?',[Committee], (err, data)=>{
//                 //UNION ALL SELECT role_name FROM users, user_roles, roles Where users.idUser = user_roles.Users_idUser and roles.roles_id = user_roles.roles_roles_id
        
//             })
//             console.log("1 record inserted");
//             db.query('SELECT users.Email FROM users,committeemembers WHERE committeemembers.Users_idUser=users.idUser AND committeemembers.Committee_idCommittee = ?',[Committee], async(err,data)=>{
//                 if(err){
//                     res.json({
//                         success:'false',
//                         err:err.message
//                     })

//                 }
//                 if(data){
//                 //  res.json(data)
//                 for(let CID in data){
//                     let email = data[CID].Email;
//                     try {
//                         var transporter = nodemailer.createTransport(smtpTransport({
//                             service: 'gmail',
//                             host: 'smtp.gmail.com',
//                             auth: {
//                                 user: 'dcms337@gmail.com',
//                                 pass: 'yasirfaheem'
//                             }
//                         }));
            
//                         let mailOptions = await transporter.sendMail({
//                             from: '"DCMS" <dcms337@gmail.com>', // sender address
//                             to: email, // list of receivers
//                             subject: "Notification", // Subject line
//                             text: ``, // plain text body
//                             html: `Dear User you have a meeting at ${Time} and venue is ${Venue} on ${Date}. Meeting agenda is ${Agenda} Please join this meeting. Thank-You`, // html body
//                         });
            
//                         transporter.sendMail(mailOptions, function (error, info) {
//                             if (error) {
//                                 console.log(error);
//                             } else {
//                                 console.log(`Email sent to ${email}: ` + info.response);
//                             }
//                         });
//                         // console.log("Message sent: %s", info.messageId);
//                     }
//                     catch (e) {
//                         console.log(e);
//                     }
//                 }   
//                 // console.log(data)
//                 }
//             })
//         }
//     });
//  });
            
module.exports = Router;