const express= require('express');
const Router = express.Router();
const moment = require('moment');
var db= require('../../database/connectionDB');

Router.get('/', function (req, res) {

    // res.redirect('/viewCommittees')
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

Router.post('/', function (req, res) {
    let CommitteeName = req.body.CommitteeName;
    let CommitteeGoal = req.body.CommitteeGoal;
    let CommitteeCreationDate = moment(new Date()).format("YYYY-MM-DD");
    let CommitteeDesolvingDate = moment(req.body.CommitteeDesolvingDate).format("YYYY-MM-DD") 
    let CommitteeDescription = req.body.CommitteeDescription;
    let headID = req.body.headID;
    let Members = req.body.Members;
    let status = req.body.status;
    // MembersId:[];

    // for (var e in Members) {
    //     // console.log('Employer ID: ', Members[e].value);
    //     // MembersId=Members[e].value;
    // }
    // console.log(MembersId)


    var values = [CommitteeName, CommitteeGoal,CommitteeCreationDate,CommitteeDesolvingDate,CommitteeDescription,status];
    db.query('INSERT INTO `committee`(`CommitteeName`, `goal`, `committeeCreationDate`, `committeeDesolveDate`, `Description`, `Status`) VALUES (?)', [values], function (err, result) 
    {
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        
        if(result){
            var committeeID= result.insertId;
            var values1= [headID, '3', committeeID];
            db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`, `Committee_idCommittee`) VALUES (?)', [values1], function (err1, result1)
            {
                if (err1) 
                {
                    res.json({
                        success: false,
                        err: 'Can not interted right know. Try again!'
                    })
                }
                if(result1)
                {
                    for (var e in Members) 
                    {
                        MembersId=Members[e].value;
                        var values3= [committeeID,MembersId];
                        // console.log(values3);
                        db.query('INSERT INTO `committeemembers`(`Committee_idCommittee`, `Users_idUser`) VALUES (?)', [values3], function (err2, result2)
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

                }
            } 
        )};

    // console.log(committeeID) 
        // console.log("1 record inserted");

        // res.json({
        //     success: true, 
        // })
    });


});



module.exports = Router;