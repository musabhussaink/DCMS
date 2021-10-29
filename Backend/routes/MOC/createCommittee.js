const express= require('express');
const Router = express.Router();
var db= require('../../database/connectionDB');
require('dotenv').config;

Router.post('/', (req, res) =>{
    console.log(res.config);
    db.query('INSERT INTO committee[committeeName, goal, committeeCreationDate] VALUES [?, ?, ?]', (err, data)=>{
        res.json({
            result: data
        })
    })
});



module.exports = Router;
