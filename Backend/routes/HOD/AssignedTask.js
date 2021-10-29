const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
const moment = require('moment');

Router.get('/', function (req, res, next) {
    var userId = req.headers['x-custom-header'];
    console.log(userId)
    db.query('SELECT idTask,Description,StatusName,AssignDate,Deadline,uploadFile,Comment, users.Name FROM task, users, taskuser, status WHERE task.Users_idUser= users.idUser and taskuser.TaskUserId = task.AssignedBy and task.Status = status.StatusId AND taskuser.Users_idUser = ?',[userId], (err, data)=>{
        if (err) {
            res.json({
                success: false,
                err: 'Unexpected Error occurred. Try Again! '
            })
        }
        if (data) {
            // res.json({
            //     viewCommittees: data
            // })
            res.json(data);
            // res.render('Committees',{title:'View Committees', viewCommittees: data});
        }
    });
    // res.render('Committees',{title:'View Committees', viewCommittees: data});   
})

Router.post('/approveTask', (req, res) => {
    let taskId = req.body.taskId
    var status = 2
    db.query(`UPDATE task SET task.Status = '${status}' WHERE task.idTask = ?`,[taskId], (err, data)=>{
        if(err){
            return res.json({success: false,
                err: 'Can not updated right know. Try again!'})
        }
        res.json({
            success: true,
            data: data
        })
    })
})

Router.post('/discardTask', (req, res) => {
    let taskId = req.body.taskId
    var status = 3
    db.query(`UPDATE task SET task.Status = '${status}' WHERE task.idTask = ?`,[taskId], (err, data)=>{
        if(err){
            return res.json({success: false,
                err: 'Can not updated right know. Try again!'})
        }
        res.json({
            success: true,
            data: data
        })
    })
})

Router.post('/postReview', (req, res) => {
    let taskId = req.body.taskId
    let review = req.body.review
    let user = req.body.user
    let role = req.body.role
    let date = moment(new Date()).format("YYYY-MM-DD");
    var values = [review, date, user, role , taskId];
    console.log(values);
    db.query('INSERT INTO `Reviews`(`Reviews`, `Date`, `Users_idUser`, `Roles_rolesid`, `task_idTask`) VALUES (?)', [values], (err, data)=>{
        if(err){
            return res.json({success: false,
                err: 'Can not inserted right know. Try again!'})
        }
        res.json({
            success: true,
            data: data
        })
    })
})

module.exports = Router;