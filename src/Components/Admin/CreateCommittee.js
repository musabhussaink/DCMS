import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import "react-table-6/react-table.css";
import { Link, Redirect } from 'react-router-dom'

export default class CreateCommittee extends Component 
{
    constructor(props){
        super(props)
        this.state = {
        selectOptions : [],
        Members:[],
        headID: "",
        CommitteeName:"",
        CommitteeGoal:"",
        CommitteeDesolvingDate:"",
        CommitteeDescription:"",
        committeeStatus: 1
        }
    }
    async getOptions(){
        const res = await axios.get('http://localhost:3306/ADMINcreateCommittee')
        const data = res.data
        
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))
    
        this.setState({selectOptions: options})
    }
    
    //////////////////////////////////
    handleChange(e){
        this.setState({headID:e.value})
        console.log(e.value)
    }
    
    handleMultipleMembersChange(e){
        this.setState({Members: e})
        // console.log(e)
       }

    handleCommitteeNameChange = (event) => {
        this.setState({
            CommitteeName: event.target.value,
        })
    }

    handleCommitteeGoalchange = (event) => {
        this.setState({
            CommitteeGoal: event.target.value
        })
    }

    handleCommitteeDesolvingDatechange = (event) => {
        this.setState({
            CommitteeDesolvingDate: event.target.value
        })
        // console.log(event.target.value)
    }

    handleCommitteeDescriptionchange = (event) => {
        this.setState({
            CommitteeDescription: event.target.value
        })
    }
    ///////////////////////////////////////////////////
    componentDidMount(){
        this.getOptions()
    }

    resetForm() {
        this.setState({
            CommitteeName: "",
            CommitteeGoal:"",
            CommitteeCreationDate:"",
            CommitteeDesolvingDate:"",
            CommitteeDescription:"",
            Members:"",
            headID: "",
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
            return <Redirect to='/Admin/ViewCommittees' />
        }
    }

CreateCommittee = async () => {

    try {
        var CommitteeName = this.state.CommitteeName;
        var CommitteeGoal = this.state.CommitteeGoal;
        var CommitteeDesolvingDate = this.state.CommitteeDesolvingDate;
        var CommitteeDescription = this.state.CommitteeDescription;
        var headID =  this.state.headID;
        var Members = this.state.Members;
        var status = this.state.committeeStatus;

        var res = await axios({
            method: 'post',
            url: 'http://localhost:3306/ADMINcreateCommittee',
            data: {
                CommitteeName: CommitteeName,
                CommitteeGoal: CommitteeGoal,
                CommitteeDesolvingDate: CommitteeDesolvingDate,
                CommitteeDescription: CommitteeDescription,
                status: status,
                headID : headID,
                Members: Members
            }
        })
        var result = res.data;
        console.log(result.success);
        if (result) {
            alert("Committee has been Created !!");
            this.resetForm();
        }

        else if (result && result.success === false) {
            alert(result.err);
            this.resetForm();
        }
    }
    catch (e) {
        console.log(e);
    }
}

    render() {
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
                <h1>Create Committee</h1>
                <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Name
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeNameChange} type="input" className="form-control text-box single-line" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Goal
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeGoalchange} type="text" className="form-control text-box single-line" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Desolving Date
                                </label>
                                <div className="col-md-10">
                                    <input onChange={this.handleCommitteeDesolvingDatechange} type="date" className="form-control text-box single-line"  placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Committee Description
                                </label>
                                <div className="col-md-10">
                                    {/* <input type="text" className="form-control text-box single-line"></input> */}
                                    <textarea onChange={this.handleCommitteeDescriptionchange} ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Select Head
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="control-label col-md-2">
                                    Add Members
                                </label>
                                <div className="col-md-10">
                                    <Select options={this.state.selectOptions} onChange={this.handleMultipleMembersChange.bind(this)} isMulti />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                            <div>
                            <div className="container-fluid" style={mystyle}><Link to="/Admin/ViewCommittees">
                                    <input style={mystyle} type="submit" defaultValue="Create" onClick={() => this.CreateCommittee()} className="btn btn-primary" /></Link>
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