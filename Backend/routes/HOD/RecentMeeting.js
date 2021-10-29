const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    var userId = req.headers['x-custom-header'];
    db.query(`SELECT * FROM users, meeting WHERE users.idUser = meeting.createMeetingUser and meeting.Date < CURDATE() and users.idUser = ?`,[userId], (err, data)=>{
        res.json({
            result: data
        })
    })
});



module.exports = Router;
