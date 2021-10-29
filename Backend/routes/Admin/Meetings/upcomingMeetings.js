const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');

Router.get('/', (req, res) =>{
    db.query(`SELECT * FROM users, meeting WHERE users.idUser = meeting.createMeetingUser and meeting.Date >= CURDATE()`, (err, data)=>{
        res.json({
            result: data
        })
    })
});

module.exports = Router;