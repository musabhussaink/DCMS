const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.get('/', (req, res) =>{
    var userId = req.headers['x-custom-header'];
    db.query('SELECT * FROM committeemembers, meeting, committee WHERE committee.idCommittee = meeting.Committee_idCommittee and committeemembers.Committee_idCommittee = meeting.Committee_idCommittee and meeting.Date < CURDATE() AND committeemembers.Users_idUser = ?',[userId], (err, data)=>{
        res.json({
            result: data
        })
    })
});



module.exports = Router;
