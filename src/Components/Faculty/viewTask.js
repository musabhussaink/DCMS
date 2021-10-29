import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import axios from 'axios'
import Swal from 'sweetalert2'

export default class ViewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            fileName: []
        }
    }
    
    async componentDidMount() {
        await axios.get('http://localhost:3306/viewTaskFaculty', { headers: {
            'X-Custom-Header': localStorage.getItem('userId')
        }}).then(res =>{
            this.setState({posts: res.data.result})
            console.log(res.data);
        }, err => { console.log(err)});
    }

    uploadFile = async e => {
        const files = e.target.files
        console.log('files', files[0].name)
        const form = new FormData()
        for (let i = 0; i < files.length; i++) {
          form.append('files', files[i], files[i].name)
        }
        try {
          let request = await fetch('http://localhost:3306/viewTaskFaculty/upload', {
            method: 'post',
            body: form,
          })
          const response = await request.json()
          this.setState({fileName: response.files})
          console.log('Response', response)
        } catch (err) {
          alert('Error uploading the files')
          console.log('Error uploading the files', err)
        }
      }
      
    async submitRow(id){
        try {
            var taskId = id;
            await axios.post(`http://localhost:3306/viewTaskFaculty/uploadFileName`, { file: this.state.fileName[0], taskId: taskId })
            .then(res =>{
                console.log(res);
            }, err => {
                console.log(err);
            })

            var res = await axios({
                method: 'post',
                url: 'http://localhost:3306/viewTaskFaculty/submitTask',
                data: {
                    taskId: taskId,
                }
            })
            var result = res.data;
            console.log(result.data);
            if (result) {
                Swal.fire('Submitted!','this task has been Submitted', 'success');
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
    render() {
        const columns = [
            { 
                Header: "Assigned Date",
                accessor:"AssignDate",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Assigned by",
                accessor:"Name",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            }, 
            {
                Header: "Due Date",
                accessor:"Deadline",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Status",
                accessor: "StatusName",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Description",
                accessor: "Description",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "File upload",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(<>
                        <input type="file" name="file" id="file" class="inputfile" multiple onChange={e => this.uploadFile(e)}
                        style={{
                            width: "0.1px",
                            height: "0.1px",
                            opacity: 0,
                            overflow: "hidden",
                            position: "absolute",
                            zindex: -1,
                            cursor: "pointer",
                            fontsize: "1.25em",
                            fontweight: 700,
                            color: "black",
                            display: "inline-block"
                        }} />
                        <label for="file" 
                        style={{
                            cursor: "pointer",
                            fontsize: "1.25em",
                            fontweight: 700,
                            color: "black",
                            display: "inline-block"
                        }}><i class="fa fa-upload" aria-hidden="true"><strong> File Choose</strong></i></label></>
                        // {/* <i class="fa fa-upload" aria-hidden="true"></i><input type="file" multiple style={{display: "inline-block"}}/></> */}
                        // onChange={e => uploadFile(e)}
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
                    return <button className="btn btn-primary" onClick= {e => {this.submitRow(props.original.idTask)}}>Submit</button>    
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
        ]
        return (
            <div id="page-wrapper" style={{}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Tasks</h2><hr></hr>
                        <ReactTable className = "-striped -highlight"
                            columns = {columns}
                            data = {
                                this.state.posts
                            }
                            filterable
                            defaultPageSize = {10}
                            noDataText = {"Please Wait.."}
                            pageSizeOptions = {[2,4,6]}
                            >
                        </ReactTable>
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
