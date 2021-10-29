    var express = require('express');
    var Router = express.Router();
    var db = require('../../../database/connectionDB');

    Router.get('/', function (req, res) {
        db.query('SELECT milestone.Name, milestone.CreateDate, milestone.CompleteOn,milestone.TotalTask, milestone.Status,committee.CommitteeName  FROM milestone,committee WHERE milestone.Committee_idCommittee=committee.idCommittee', function (err, result) {
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
    module.exports = Router;