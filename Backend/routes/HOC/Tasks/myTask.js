const express= require('express');
const Router = express.Router();
var db= require('../../../database/connectionDB');
const { join } = require('path');
const Formidable = require('formidable');
const child_process = require('child_process');
const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))
// const download = require("download");
require('dotenv').config;

Router.get('/', (req, res) =>{
    var userId = req.headers['x-custom-header'];
    db.query('SELECT * FROM task, users, status WHERE task.Status = status.StatusId and task.Users_idUser=users.idUser and users.idUser = ?',[userId], (err, data)=>{
        res.json({
            result: data
        })
    })
});

async function checkCreateUploadsFolder (uploadsFolder) {
	try {
		await fs.statAsync(uploadsFolder)
	} catch (e) {
		if (e && e.code == 'ENOENT') {
			console.log('The uploads folder doesn\'t exist, creating a new one...')
			try {
				await fs.mkdirAsync(uploadsFolder)
			} catch (err) {
				console.log('Error creating the uploads folder 1')
				return false
			}
		} else {
			console.log('Error creating the uploads folder 2')
			return false
		}
	}
	return true
}

function checkAcceptedExtensions (file) {
	const type = file.type.split('/').pop()
	const accepted = ['jpeg', 'jpg', 'png', 'gif', 'pdf']
	if (accepted.indexOf(type) == -1) {
		return false
	}
	return true
}

Router.post('/upload', async (req, res) => {
	let form = Formidable.IncomingForm()
	const uploadsFolder = join(__dirname, 'uploadedFile', 'uploads')
	form.multiples = true
	form.uploadDir = uploadsFolder
	form.maxFileSize = 50 * 1024 * 1024 // 50 MB
	const folderCreationResult = await checkCreateUploadsFolder(uploadsFolder)
	if (!folderCreationResult) {
		return res.json({ok: false, msg: "The uploads folder couldn't be created"})
	}
	form.parse(req, async (err, fields, files) => {
		let myUploadedFiles = []
		if (err) {
			console.log('Error parsing the incoming form')
			return res.json({ok: false, msg: 'Error passing the incoming form'})
		}
        // If we are sending only one file:
		if (!files.files.length) {
			const file = files.files
			if (!checkAcceptedExtensions(file)) {
				console.log('The received file is not a valid type')
				return res.json({ok: false, msg: 'The sent file is not a valid type'})
			}
            const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
			myUploadedFiles.push(fileName)
			try {
				await fs.renameAsync(file.path, join(uploadsFolder, fileName))
			} catch (e) {
				console.log('Error uploading the file')
				try { await fs.unlinkAsync(file.path) } catch (e) {}
				return res.json({ok: false, msg: 'Error uploading the file'})
			}
		} else {
			for(let i = 0; i < files.files.length; i++) {
				const file = files.files[i]
				if (!checkAcceptedExtensions(file)) {
					console.log('The received file is not a valid type')
					return res.json({ok: false, msg: 'The sent file is not a valid type'})
                }
                const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
				myUploadedFiles.push(fileName)
				try {
					await fs.renameAsync(file.path, join(uploadsFolder, fileName))
				} catch (e) {
					console.log('Error uploading the file')
					try { await fs.unlinkAsync(file.path) } catch (e) {}
					return res.json({ok: false, msg: 'Error uploading the file'})
				}
			}
		}
		res.json({ok: true, msg: 'Files uploaded succesfully!', files: myUploadedFiles})
	})
})

Router.post('/submitTask', (req, res) => {
    let taskId = req.body.taskId
    var status = 1
    db.query(`UPDATE task SET task.Status = '${status}',task.SubmissionDate = CURDATE(), task.SubmissionTime = CURTIME() WHERE task.idTask = ?`,[taskId], (err, data)=>{
        if(err){
            return res.json({success: false,
                err: 'Can not updated right know. Try again!'})
        }
        res.json({
            success: true,
            data: data
        })
    })
})

Router.post('/uploadFileName', (req, res) => {
    let file = req.body.file
    let taskId = req.body.taskId
    db.query(`UPDATE task SET task.uploadFile = '${file}' WHERE task.idTask = ?`,[taskId], (err, data)=>{
        if(err){
            return res.json({success: false,
                err: 'Can not updated right know. Try again!'})
        }
        res.json({
            success: true,
            data: data
        })
    })
})

// Router.delete('/delCommittee/:id', (req, res) =>{
//     const idCommittee = req.params.id;
//     console.log(idCommittee); 
//     db.query('DELETE FROM user_roles WHERE user_roles.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         if(data){
//             console.log("user roles committee deleted")
//             db.query('DELETE FROM milestone WHERE milestone.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                 if(err){
//                     console.log(err)
//                     return;
//                 }
//                 if(data){
//                     console.log("milestone committee deleted")
//                     db.query('DELETE FROM hoc_feedback WHERE hoc_feedback.CommitteeMembers_idCommitteeMembers = ?', idCommittee, (err, data)=>{
//                         if(err){
//                             console.log(err)
//                             return;
//                         }
//                         if(data){
//                             console.log("hoc_feedback committee deleted")
//                             db.query('DELETE FROM committeemembers WHERE committeemembers.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                                 if(err){
//                                     console.log(err)
//                                     return;
//                                 }
//                                 if(data){
//                                     console.log("committeemembers committee deleted")
//                                     db.query('DELETE FROM meeting WHERE meeting.Committee_idCommittee = ?', idCommittee, (err, data)=>{
//                                         if(err){
//                                             console.log(err)
//                                             return;
//                                         }
//                                         if(data){
//                                             console.log("meeting committee deleted")
//                                             db.query('DELETE FROM committee WHERE committee.idCommittee = ?', idCommittee, (err, data)=>{
//                                                 if(err){
//                                                     console.log(err)
//                                                     return;
//                                                 }
//                                             })
//                                         }
//                                     })
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// });

Router.get('/readFile', (req, res) =>{
    let img = __dirname + "/uploadedFile/uploads/MOC.png";

  fs.access(img, fs.constants.F_OK, err => {
    //check that we can access  the file
    console.log(`${img} ${err ? "does not exist" : "exists"}`);
  });

  fs.readFile(img, function(err, content) {
    if (err) {
    console.log(err)
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
      //specify the content type in the response will be an image
      res.writeHead(200, { "Content-type": "image/png" });
      res.end(content);
    }
  });
});

// const folderpath = './uploadedFile';
Router.get('/downloadFile', async function(req, res){
    res.json({
        file: __dirname + "/uploadedFile/uploads/MOC.png"
    })
    
     // Set disposition and send it.
    
    // child_process.execSync(`zip -r archive *`, {
    //     cwd: folderpath
    //   });
    //   res.download(folderpath + '/archive.zip');
});




// app.get("/files/downloads", (req, res) => {

//   // we want to use a sync exec to prevent returning response
//   // before the end of the compression process

//   // zip archive of your folder is ready to download
  
// })


module.exports = Router;
