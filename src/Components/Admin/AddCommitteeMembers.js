import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "react-table-6/react-table.css";
import { Link, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class AddCommitteeMembers extends Component 
{
    constructor(props){
        super(props)
        this.state = {
        CommitteeOptions: [],
        UserOptions: [],
        RoleOptions: [],
        committee: "",
        role: "",
        User: ""
        }
    }
    async getCommitteeOptions(){
        const res = await axios.get('http://localhost:3306/addCMADMIN/committeelist')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idCommittee,
            "label" : d.CommitteeName
        }))
        this.setState({CommitteeOptions: options})
    }

    async getUserOptions(){
        const res = await axios.get('http://localhost:3306/addCMADMIN/userlist')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))
    
        this.setState({UserOptions: options})
    }

    async getRoleOptions(){
        const res = await axios.get('http://localhost:3306/addCMADMIN/roleslist')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.roles_id,
            "label" : d.role_name
        }))
        this.setState({RoleOptions: options})
        console.log(this.state.RoleOptions);
    }
    componentDidMount(){
        this.getCommitteeOptions();
        this.getUserOptions();
        this.getRoleOptions();
    }

    handleCommitteeChange = (event) => {
        this.setState({
            committee: event.value,
        })
    }

    handleUserChange = (event) => {
        this.setState({
            user: event.value
        })
    }

    handleRoleChange = (event) => {
        this.setState({
            role: event.value
        })
        // console.log(event.target.value)
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
            return <Redirect to='/Admin/ViewCommitteeMembers' />
        }
    }

    CreateMemberUser = async () => {

    try {
        var committeeId = this.state.committee;
        var userId = this.state.user;
        var roleId = this.state.role;

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/addCMADMIN',
            data: {
               committee: committeeId,
               user: userId,
               role: roleId,
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            window.location.reload();
            Swal.fire('Member Added!','this record has been added', 'success');
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
                <h1>Add Committee Member</h1>
                <hr></hr>
                <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Committee
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.CommitteeOptions} onChange={this.handleCommitteeChange.bind(this)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select User
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.UserOptions} onChange={this.handleUserChange.bind(this)}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Role
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.RoleOptions} onChange={this.handleRoleChange.bind(this)}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <div>
                            <div className="container-fluid" style={mystyle}><Link to="/Admin/ViewCommitteeMembers">
                                    <input style={mystyle} type="submit" defaultValue="Create" onClick={() => this.CreateMemberUser()} className="btn btn-primary" /></Link>
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