var express = require('express');
var router = express.Router();

// var users = [
//   {
//     email: 'kamran@gmail.com',
//     password: 'password1',
//     role: 'Admin'
//   },
//   {
//     email: 'musab@gmail.com',
//     password: 'password2',
//     role: 'HOD'
//   },
//   {
//     email: 'rohan@gmail.com',
//     password: 'password3',
//     role: 'HOC'
//   },
//   {
//     email: 'noman@gmail.com',
//     password: 'password4',
//     role: 'Committee Member'
//   },
//   {
//     email: 'hamza@gmail.com',
//     password: 'password5',
//     role: 'Faculty'
//   },
//   {
//     email: 'ahad@gmail.com',
//     password: 'password3',
//     role: 'Student'
//   }
// ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to backend server")
});

// router.post('/login', function(req, res){
//   let result = users.find(user => user.email == req.body.email);
//   if(result) {
//     if(result.password == req.body.password) {
//       res.status(200).send({
//         message: result.role
//       })
//     } else {
//       res.status(200).send({
//         message: "Password incorrect!"
//       })
//     }
//   } else {
//     res.status(200).send({
//       message: "user not found!"
//     })
//   }
// })

module.exports = router;
