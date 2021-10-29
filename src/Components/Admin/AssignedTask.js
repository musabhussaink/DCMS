import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactTables from "../../../node_modules/react-table-v6";
import "react-table-v6/react-table.css";
import axios from 'axios'
import Swal from 'sweetalert2'

export default class AssignedTask extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

async componentDidMount(){
    await axios.get('http://localhost:3306/viewAssignedTasksADMIN', { headers: {
            'X-Custom-Header': localStorage.getItem('userId')
        }}).then(res =>{
            this.setState({data: res.data})
            console.log(res.data);
        }, err => { console.log(err)});
}
async approveRow(id){
    try {
        var taskId = id;
        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/viewAssignedTasksADMIN/approveTask',
            data: {
                taskId: taskId,
            }
        })
        var result = res.data;
        console.log(result.data);
        if (result) {
            Swal.fire('Approved!','this task has been Approved', 'success');
            window.location.reload();
        }

        else if (result && result.success === false) {
            Swal.fire('failed','something wrong', 'warning')
        }
    }
    catch (e) {
        console.log(e);
    }
}

async download(){
    console.log("kuch huwa");
    // var file = null;
    // await axios.get(`http://localhost:3306/viewTaskMOC/downloadFile`)
    //         .then(res =>{
    //             file = res.data.file
    //         }, err => {
    //             console.log(err);
    //         })
    // const blob = new Blob(["This is a new File"], {type: "text/plain"})
    // downloadFile(blob, "newFile.txt")
}
// downloadFile(blob, file){
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = file
//     a.click();
// }

discardRow(id) {
    Swal.fire({
        title: 'Give Some Review!',                   
        showCancelButton: true,
        input: 'text',
        type: 'warning',
        confirmButtonText: 'SubmitReview',
        confirmButtonColor: '#4aa0f1',
        cancelButtonColor: '#898b8e',
        showLoaderOnConfirm: true,
        preConfirm: async (t) => {
            await axios.post(`http://localhost:3306/viewAssignedTasksADMIN/discardTask`, { taskId: id })
            .then(res =>{
            }, err => {
            })
        }
      }).then(async function (t) {
        await axios.post(`http://localhost:3306/viewAssignedTasksADMIN/postReview`, { taskId: id, review: t.value, user: localStorage.getItem('userId'), role: localStorage.getItem('roleId') })       
        .then(res =>{
            if(res.data.success){
                Swal.fire("Task Rejected", "this task has been Rejected", "success")
                console.log(res)
            }
        }, err => {
            Swal.fire('failed','something wrong', 'warning')
            console.log(err)
        })
      });
}
    render() {
            const columns = [
            {
                Header: "Task Description",
                accessor:"Description",
                filterable:'',
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }

            }, 
            {
                Header: "Status",
                accessor:"StatusName",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header: "Assigned Date",
                accessor: "AssignDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },       
            {
                Header: "Deadline",
                accessor: "Deadline",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
    

            },
            {
                Header:"File uploaded",
                accessor:"uploadFile",
                Cell: props => {
                    return(
                        <a onClick={this.download}><label for="file" 
                        style={{
                            cursor: "pointer",
                            fontsize: "1.25em",
                            fontweight: 700,
                            color: "black",
                            display: "inline-block"
                        }}><i class="fa fa-download" aria-hidden="true"><strong> {props.value}</strong></i></label></a>
                        //<button className="btn btn-success" onClick={() => { this.approveRow(props.original.idTask)}}><i className="fas fa-check"></i> Approve</button>
                    )
                },
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header:"Comment",
                accessor:"Comment",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header:"Name",
                accessor:"Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                filterable:''

            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <button className="btn btn-success" onClick={() => { this.approveRow(props.original.idTask)}}><i className="fas fa-check"></i> Approve</button>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        <button className="btn btn-danger" onClick={e => {this.discardRow(props.original.idTask)}}><i className="fas fa-trash"></i>Discard</button>
                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
]
        
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br></br>
                            <h2>Tasks Record</h2>
                            
                            <hr></hr>
                            <ReactTables className = "-striped -highlight"
                              columns = {columns}
                              data = {this.state.data}
                              filterable
                              defaultPageSize={10}>
                            </ReactTables>      
                        </div>
                       
                    </div>
                </div>
                <hr />
            </div>


        )
    }
}