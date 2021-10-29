import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import {Modalview} from './ViewCommittee/viewModal'
import {Modalupdate} from './ViewCommittee/updateModal'
import axios from 'axios';

export default class ViewCommittees extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            committeeDetails: [],
            headDetails:[],
            memberDetails: [],
            showView: false,
            showUpdate: false,
            role: '',
            name: '',
            email: '',
            id: ''
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = async () => {
        const loginToken = localStorage.getItem('token');
        console.log(loginToken);
    
        await axios.get('http://localhost:3306/login/verifyToken', { headers: {
            'X-Custom-Header': loginToken
        }}).then(res =>{
            this.setState({
                role: res.data.role,
                name: res.data.name,
                email: res.data.email,
                id: res.data.userId
            })
            var userID = this.state.id
            localStorage.setItem('userid', userID)
            localStorage.setItem('name', this.state.email)
    
            console.log(res.data);
        }, err => { console.log(err)});
    
    
        await axios.get('http://localhost:3306/CommitteesHoc',  { headers: {
            'X-Custom-Header': localStorage.getItem('userid')
        }}).then(res => {this.setState({posts: res.data.sessionsData})});
    }

    handleCloseView = () => this.setState({showView: false});
    handleShowView = () => this.setState({showView: true});

    handleCloseUpdate = () => this.setState({showUpdate: false});
    handleShowUpdate = () => this.setState({showUpdate: true});

    async viewCommitteeDetails(idCommittee) {
        await axios.get('http://localhost:3306/CommitteesHoc/details', { headers: {
            'X-Custom-Header': idCommittee
        }})
        .then(res =>{
            this.setState({memberDetails: res.data.resultMembers,committeeDetails: res.data.resultCommittee[0]})
            if(res.data.resultHead.length == 0){
                this.setState({headDetails: {idUser: 0,Name: 'Not Assigned Yet'}})
            } else {
                this.setState({headDetails: res.data.resultHead[0]})
            }
        }, err => { console.log(err)});

        this.handleShowView();
        // $("#myModal").modal("show");
    }

    async updateRow(idCommittee){
        await axios.get('http://localhost:3306/CommitteesHoc/details', { headers: {
            'X-Custom-Header': idCommittee
        }})
        .then(res =>{
            this.setState({memberDetails: res.data.resultMembers,committeeDetails: res.data.resultCommittee[0]})
        }, err => { console.log(err)});

        this.handleShowUpdate();
    }
    
    render() {
        const columns = [ 
            {
                Header: "Committee Name",
                accessor: "CommitteeName",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Goal",
                accessor: "goal",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Creation Date",
                accessor: "committeeCreationDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Desolving Date",
                accessor: "committeeDesolveDate",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Description",
                accessor: "Description",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Actions",
                headerStyle: { fontWeight: 'bold' },
                Cell: props => {
                    return(
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        <button className="btn btn-Warning" onClick={() => { this.updateRow(props.original.idCommittee)}}><i className="fas fa-edit"></i> Edit</button>
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
                        
                        <button className="btn btn-primary" onClick= {e => {this.viewCommitteeDetails(props.original.idCommittee)}} ><i class="fas fa-eye"></i> Details</button>
                        // {/* <Modalview show={this.state.showView} close = {this.handleCloseView} committeeDetails = {this.state.committeeDetails} memberDetails = {this.state.memberDetails} headDetails = {this.state.headDetails}></Modalview> */}
                        
                        // <a href="" className="btn btn-sm btn-danger"> Delete</a> 
                        // <Link to="/HOD/CreateCommittee" onClick={() => { console.log(props.row._original);this.updateRow(props.row.idCommittee)}}><button className="btn btn-primary">Edit</button></Link>
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
            <div id="page-wrapper" style={{}}>
                <div className="row">
                    <div className="col-lg-12">
                        <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                        <h2>Committees in CS Department</h2>
                        <hr></hr>
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
                 </div>
                {this.state.showView ? <Modalview show={this.state.showView} close = {this.handleCloseView} committeeDetails = {this.state.committeeDetails} memberDetails = {this.state.memberDetails} headDetails = {this.state.headDetails}></Modalview>: <div></div>} 
                {this.state.showUpdate ? <Modalupdate show={this.state.showUpdate} close = {this.handleCloseUpdate} committeeDetails = {this.state.committeeDetails} memberDetails = {this.state.memberDetails} ></Modalupdate>: <div></div>}
                 <hr />
                 {/* <Modalupdate></Modalupdate> */}
                 </div>
        );
    }
}
