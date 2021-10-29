var express = require('express');
var Router = express.Router();
var db = require('../../../../database/connectionDB');
Router.get('/', (req, res) => {
    db.query('SELECT  committee.CommitteeName, COUNT(committeemembers.idCM) AS Total_Members  FROM committeemembers, committee WHERE committeemembers.Committee_idCommittee= committee.idCommittee AND committee.Status=1 GROUP BY committee.CommitteeName', (err, result) => {
        let committeeName=[];
        let totalCommitteeMembers=[];

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
                totalCommitteeMembers.push(parseInt(dataObj.Total_Members) );
            }
            // console.log(committeeName);
            // console.log(totalCommitteeMembers)
            res.json({
                success: true,
                committeeName: committeeName,
                totalCommitteeMembers:totalCommitteeMembers
            });
        }
    });
})


module.exports = Router;