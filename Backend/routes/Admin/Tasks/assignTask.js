var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

Router.get('/', function (req, res) {

    db.query('SELECT DISTINCT users.idUser,users.Name FROM roles, users, user_roles WHERE user_roles.Users_idUser= users.idUser AND user_roles.roles_roles_id= roles.roles_id AND roles.roles_id!=6 AND roles.roles_id!=1 AND roles.roles_id!=2;', (err, data)=>{
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

Router.post('/', function (req, res) {
    let Description = req.body.Description;
    let Status = 0;
    let Deadline = req.body.Deadline;
    let userId = req.body.userId;
    let CreatedBy =  req.body.createBy
    console.log(userId)
    for (var e in userId) 
    {
        let user = userId[e].value;
        db.query('INSERT INTO `taskuser`(`Users_idUser`) VALUES (?)', [CreatedBy], function (err, result1) {
            let taskUser = result1.insertId
            let values = [Description,Status,Deadline, user, taskUser];
            console.log(values);
            if(result1){
                db.query('INSERT INTO `task`(`Description`, `Status`, `Deadline`, `Users_idUser`, `AssignedBy`, `AssignDate`) VALUES (? , CURDATE())', [values], function (err, result) {
                    if (err) {
                        res.json({
                            success: false,
                            err:err.message
                        })
                        console.log(err.message);
                        return;
                    }
            if(result){
                        console.log("1 record inserted");
                        console.log(userId[0].value);


            for(let CID in userId){
            db.query('SELECT users.Email FROM users WHERE users.idUser = ?',[userId[CID].value], async(err,data)=>{
    
                if(err){
                    res.json({
                        success:'false',
                        err:err.message
                    })
    
                }
                if(data){
                 res.json(data)   
                    
                   
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
                            html: `Dear User you have a new task and description of task is " ${Description} " and Deadline of task is ${Deadline}`, // html body
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
    
                        
            }
           
                        
        });
                if(err){
                    res.json({
                        success: false,
                        err:err.message
                    })
                }
            }
        })
}
});
module.exports = Router;