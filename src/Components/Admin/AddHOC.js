import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "react-table-6/react-table.css";
import { Link, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class AddHOC extends Component 
{
    constructor(props){
        super(props)
        this.state = {
        CommitteeOptions: [],
        UserOptions: [],
        RoleOptions: [],
        committee: "",
        role: "",
        User: "",
        disable: ""
        }
    }
    async getCommitteeOptions(){
        const res = await axios.get('http://localhost:3306/addHOCADMIN/committeelist')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idCommittee,
            "label" : d.CommitteeName
        }))
        this.setState({CommitteeOptions: options})
    }

    async getUserOptions(){
        const res = await axios.get('http://localhost:3306/addHOCADMIN/userlist')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))
    
        this.setState({UserOptions: options})
    }

    componentDidMount(){
        this.getCommitteeOptions();
        this.getUserOptions();
        this.state.disable = true;
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
    handleDisable(){
        this.setState({
            disable: false
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
            return <Redirect to='/Admin/ViewHOC' />
        }
    }

    CreateHOCUser = async () => {

    try {
        var committeeId = this.state.committee;
        var userId = this.state.user;
        console.log(committeeId)
        console.log(userId)

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/addHOCADMIN/updateHead',
            data: {
               committee: committeeId,
               user: userId
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            window.location.reload();
            Swal.fire('Head Added!','this record has been added', 'success');
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
                <h1>Add head of Committee User</h1>
                <hr></hr>
                <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Committee
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.CommitteeOptions} onChange={(e)=>{
                                        this.handleCommitteeChange(e);
                                        this.handleDisable();}} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Head User
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.UserOptions} onChange={this.handleUserChange.bind(this)} isDisabled={this.state.disable} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <div>
                            <div className="container-fluid" style={mystyle}><Link to="/Admin/ViewHOC">
                                    <input style={mystyle} type="submit" defaultValue="Create" onClick={() => this.CreateHOCUser()} className="btn btn-primary" /></Link>
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