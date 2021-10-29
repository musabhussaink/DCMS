var express = require('express');
var Router = express.Router();
var db = require('../../../../database/connectionDB');
Router.get('/', (req, res) => {
    db.query('SELECT  committee.CommitteeName, COUNT(meeting.idMeeting) AS Total_Meetings_Made  FROM meeting, committee WHERE meeting.Committee_idCommittee= committee.idCommittee AND committee.Status=1 GROUP BY committee.CommitteeName;', (err, result) => {
        let committeeName=[];
        let Total_Meetings_Made=[];

        if (err) {
            res.json({
                success: false,
                err: err.message
            })
        }
        if (result) {
            
            // console.log(result);
            for(const dataObj of result){
                committeeName.push(dataObj.CommitteeName);
                Total_Meetings_Made.push(parseInt(dataObj.Total_Meetings_Made) );
            }
            // console.log(committeeName);
            // console.log(totalCommitteeMembers)
            res.json({
                success: true,
                committeeName: committeeName,
                Total_Meetings_Made:Total_Meetings_Made
            });
        }
    });
})


module.exports = Router;