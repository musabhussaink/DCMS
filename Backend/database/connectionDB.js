
var mysql = require ('mysql');

var express = require ('express');

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"dcms",
    port:3307
});

// const db = mysql.createConnection({
//     host:"remotemysql.com",
//     user: "jIui6JBi8x",
//     password:"WrPkUsCIw5",
//     database:"jIui6JBi8x"
// });

db.connect(function(err){
    if(err){
        console.log('DB Error');
        throw err;
    }
    else{
        console.log("connect")
    }
});

module.exports= db;