var express = require('express');
var Router = express.Router();
var db = require('../../../database/connectionDB');

Router.get('/', function (req, res) {
    var userId = req.headers['x-custom-header'];
    db.query(`SELECT * FROM users, meeting, committee WHERE committee.idCommittee = meeting.Committee_idCommittee AND users.idUser = meeting.createMeetingUser and meeting.Date < CURDATE() and users.idUser = 3`,[userId], (err, data)=>{
        res.json({
            result: data
        })
    })
})  
module.exports = Router;