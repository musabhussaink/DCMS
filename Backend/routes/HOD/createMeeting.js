var express = require('express');
var Router = express.Router();
var db = require('../../database/connectionDB');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

Router.get('/', function (req, res) {
    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=2 AND roles.roles_id!=1', function (err, result) {
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
Router.post('/', function (req, res) {
    // let idMilestone = req.body.idMilestone;
    let createUser = req.body.user;
    let Date = req.body.date;
    let Time = req.body.time;
    let Duration = req.body.duration;
    let Agenda = req.body.agenda;
    let Venue = req.body.venue;
    let ParticipantInvited = req.body.participantInvited;

    var values = [Date,Time,Duration,Agenda,Venue,ParticipantInvited.length,createUser];
    console.log(values);
    db.query('INSERT INTO `meeting`(`Date`, `Time`, `Duration`, `Agenda`, `Venue`,`ParticipantInvited`, `createMeetingUser`) VALUES (?)', [values], function (err, result) 
    {
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        var meetingId= result.insertId;
        if(result){
            for (var e in ParticipantInvited) 
                    {
                        ParticipantInvitedId=ParticipantInvited[e].value;
                        var values1= [meetingId,ParticipantInvitedId, ParticipantInvited.length];
                        // console.log(values3);
                        db.query('INSERT INTO `meetingparticipant`(`Meeting_idMeeting`, `Users_idUser`, `Attendance`) VALUES (?)', [values1], function (err2, result2)
                        {
                            // if (err2) 
                            //     {
                            //         res.json({
                            //             success: false,
                            //             err2: 'Can not interted right know. Try again!'
                            //         });
                            //         return;
                            //         // console.log(err2);
                            //     };
                            // if(result2){
                            //     res.json({
                            //         success:true
                            //     })
                            //     // console.log(result2)
                            // }
                        });
                    }
            console.log("1 record inserted");
            for(let CID in ParticipantInvited){
                
            db.query('SELECT users.Email FROM users,committeemembers WHERE users.idUser = committeemembers.Users_idUser AND committeemembers.Committee_idCommittee = ?',[ParticipantInvited[CID].value], async(err,data)=>{
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
                                console.log(`Email sent to ${email}: ` + info.response);
                            }
                        });
                        // console.log("Message sent: %s", info.messageId);
                    }
                    catch (e) {
                        console.log(e);
                    
                } 
            }

            })

            }

        }
    });
 });
 Router.get('/CommitteeList', function (req, res) {
    db.query('SELECT DISTINCT committee.idCommittee,committee.CommitteeName FROM committee', function (err, result) {
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
Router.post('/CommitteeList', function (req, res) {
    // let idMilestone = req.body.idMilestone;
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
            });
            db.query('SELECT users.Email FROM users,committeemembers WHERE committeemembers.Users_idUser=users.idUser AND committeemembers.Committee_idCommittee = ?',[Committee], async(err,data)=>{
                if(err){
                    res.json({
                        success:'false',
                        err:err.message
                    })

                }
                if(data){
                //  res.json(data)
                for(let CID in data){
                    let email = data[CID].Email;
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
                                console.log(`Email sent to ${email}: ` + info.response);
                            }
                        });
                        // console.log("Message sent: %s", info.messageId);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }   
                // console.log(data)
                }
            })
        }
        res.json({
            success: true
        })
    });
 });
        

module.exports = Router;