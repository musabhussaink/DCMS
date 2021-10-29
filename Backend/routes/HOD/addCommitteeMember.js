const express= require('express');
const Router = express.Router();
const moment = require('moment');
var db= require('../../database/connectionDB');

Router.get('/userlist', function (req, res) {

    // res.redirect('/viewCommittees')
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
    let date = req.body.date

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


//     db.query('INSERT INTO `committee`(`CommitteeName`, `goal`, `committeeCreationDate`, `committeeDesolveDate`, `Description`, `Status`) VALUES (?)', [values], function (err, result) 
//     {
//         if (err) {
//             res.json({
//                 success: false,
//                 err: 'Can not interted right know. Try again!'
//             })
//         }
        
//         if(result){
//             var committeeID= result.insertId;
//             var values1= [headID, '3', committeeID];
//             db.query('INSERT INTO `user_roles`(`Users_idUser`, `roles_roles_id`, `Committee_idCommittee`) VALUES (?)', [values1], function (err1, result1)
//             {
//                 if (err1) 
//                 {
//                     res.json({
//                         success: false,
//                         err: 'Can not interted right know. Try again!'
//                     })
//                 }
//                 if(result1)
//                 {
//                     for (var e in Members) 
//                     {
//                         MembersId=Members[e].value;
//                         var values3= [committeeID,MembersId];
//                         // console.log(values3);
//                         db.query('INSERT INTO `committeemembers`(`Committee_idCommittee`, `Users_idUser`) VALUES (?)', [values3], function (err2, result2)
//                         {
//                             // if (err2) 
//                             //     {
//                             //         res.json({
//                             //             success: false,
//                             //             err2: 'Can not interted right know. Try again!'
//                             //         });
//                             //         return;
//                             //         // console.log(err2);
//                             //     };
//                             // if(result2){
//                             //     res.json({
//                             //         success:true
//                             //     })
//                             //     // console.log(result2)
//                             // }
//                         });
//                     }

//                 }
//             } 
//         )};

//     // console.log(committeeID) 
//         // console.log("1 record inserted");

//         // res.json({
//         //     success: true, 
//         // })
//     });


});



module.exports = Router;