var express = require('express');
var Router = express.Router();
var db = require('../../database/connectionDB');
 
Router.get('/', function (req, res) {
    db.query('SELECT * FROM `milestone`', function (err, result) {
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
Router.post('/', function (req, res) {
    // let idMilestone = req.body.idMilestone;
    let Name = req.body.name;
    let CreateDate = req.body.createDate;
    let CompleteOn = req.body.completionDate;
    let TotalTask = req.body.totalTask;
    let Status = req.body.status;
    let Committee_idCommittee = 2;
 
    var values = [ Name, CreateDate,CompleteOn,TotalTask,Status, Committee_idCommittee];
 
    db.query('INSERT INTO `milestone`( `Name`, `CreateDate`, `CompleteOn`, `TotalTask`, `Status`, `Committee_idCommittee`) VALUES (?)', [values], function (err, result) {
 
        if (err) {
            res.json({
                success: false,
                err: 'Can not interted right know. Try again!'
            })
        }
        console.log("1 record inserted");
            res.json({
            success: true
        })
    });
});
module.exports = Router;