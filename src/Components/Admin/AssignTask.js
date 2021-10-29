import React, { Component } from 'react'
import axios from 'axios';
import Select from 'react-select';
import { Link, Redirect } from 'react-router-dom';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Swal from 'sweetalert2'


export default class AssignTask extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        selectOptions : [],
        Description:"",
        Deadline:"",
        userID: []
        }
    }
    async getOptions(){
        const res = await axios.get('http://localhost:3306/assignTaskADMIN')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))

        // console.log(options);
    
        this.setState({selectOptions: options})
    }
    
    //////////////////////////////////
    
    // handleMultipleMembersChange(e){
    //     this.setState({Members: e})
    //     console.log(e)
    //    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         Name: event.target.value,
    //     })
    // }
    handleChange(e){
        this.setState({userID:e})
    }


    handleDescriptionchange = (event) => {
        this.setState({
            Description: event.target.value
        })
    }

    handleDeadlinechange = (event) => {
        this.setState({
            Deadline: event.target.value
        })
    }

    componentDidMount(){
        this.getOptions()
    }

    // resetForm() {
    //     this.setState({
    //         Description:"",
    //         Deadline:"",          
    //     })
    // }
    state = {
        redirect: false
    }
    
    setRedirect = () => {
        this.setState({
        redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/HOC/AssignTasks' />
        }
    }

AssignTask = async () => {

    try {
        var Description = this.state.Description;
        var Deadline = this.state.Deadline;
        var createUser = localStorage.getItem('userId')
        var userID = this.state.userID
        // var uploadFile =  this.state.uploadFile;
        

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/assignTaskADMIN',
            data: {
                Description: Description,
                Deadline: Deadline,
                userId: userID,
                createBy: createUser
                // uploadFile : uploadFile,
            
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            Swal.fire('Task Created!','The Task has been created', 'success');
        }

        else if (result && result.success === false) {
            Swal.fire('failed',result.err, 'warning')
        }
    }
    catch (e) {
        console.log(e);
    }
}


    render() {
        // console.log(this.state.selectOptions)
        return (
        <div>
            <div id="page-wrapper" style={{}}>
                <h1>Assign Task</h1>
                <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                AssignTo
                                </label>
                                <div className="col-md-10">
                                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti />
                                {/* <input onChange={this.NameChange} type="input" className="form-control text-box single-line" ></input> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Description
                                </label>
                                <div className="col-md-10">
                                    <textarea onChange={this.handleDescriptionchange} ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Deadline
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleDeadlinechange} type="date" className="form-control text-box single-line"  placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Upload File
                                </label>
                                <div className="col-md-10">
                                    <input  onChange={this.handleuplaodFilechange} type="file" id="myFile" name="filename"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br> */}
                
                    <br></br>
                    <div className="row">
                        <div className="col-md-offset-2 col-md-10">
                            <div className="form-group">
                            <Link to="/Admin/AssignedTask"> 
                            <input type="submit" defaultValue="Create" onClick={() => this.AssignTask()} className="btn btn-primary" />
                            </Link> 

                            <div>
                                {/* {this.renderRedirect()}
                                <button onClick={this.setRedirect}><input type="submit" defaultValue="Create" onClick={() => this.CreateCommittee()} className="btn btn-primary" /></button> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
        
        </div>

        )
    }

}