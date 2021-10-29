import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "react-table-6/react-table.css";
import { Link, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class AddStudents extends Component 
{
    constructor(props){
        super(props)
        this.state = {
        Email: "",
        Password: "",
        Name: "",
        PhoneNo: "",
        Designation: "",
        RegistrationNo: ""
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            Email: event.target.value,
        })
    }

    handlePasswordchange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }

    handleNamechange = (event) => {
        this.setState({
            Name: event.target.value
        })
        // console.log(event.target.value)
    }

    handlePhoneNochange = (event) => {
        this.setState({
            PhoneNo: event.target.value
        })
    }

    handleDesignationchange = (event) => {
        this.setState({
            Designation: event.target.value
        })
    }
    handleRegistrationNochange = (event) => {
        this.setState({
            RegistrationNo: event.target.value
        })
    }

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
            return <Redirect to='/Admin/Student' />
        }
    }

    CreateStudentUser = async () => {

    try {
        var Email = this.state.Email;
        var Password = this.state.Password;
        var PhoneNo = this.state.PhoneNo;
        var Name = this.state.Name;
        var Designation = this.state.Designation;
        var Registration = this.state.RegistrationNo

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/addStudentADMIN',
            data: {
                Email: Email,
                Password: Password,
                PhoneNo: PhoneNo,
                Name: Name,
                Designation: Designation,
                Registration: Registration
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            window.location.reload();
            Swal.fire('Student Added!','this record has been added', 'success');
        }

        else if (result && result.success === false) {
            Swal.fire('Failed!',result.err, 'warning');
        }
    }
    catch (e) {
        console.log(e);
    }
}

    render() {
        // console.log(this.state.selectOptions)
        const mystyle = {
            color: "white",
            padding: "20px",
            fontFamily: "Arial",
            textAlign: "center",
            font: "900 40px",
            width:"100%"
        };
        return (
        <div>
            <div id="page-wrapper" style={{}}>
                <h1>Add Student User</h1>
                <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Email
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleEmailChange} type="input" className="form-control text-box single-line" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Password
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handlePasswordchange} type="text" className="form-control text-box single-line" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Name
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleNamechange} type="text" className="form-control text-box single-line" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    PhoneNo
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handlePhoneNochange} type="text" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Registration No.
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleRegistrationNochange} type="text" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Designation
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleDesignationchange} type="text" className="form-control text-box single-line"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <div>
                            <div className="container-fluid" style={mystyle}><Link to="/Admin/Student">
                                    <input style={mystyle} type="submit" defaultValue="Create" onClick={() => this.CreateStudentUser()} className="btn btn-primary" /></Link>
                                </div>
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