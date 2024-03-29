import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import axios from 'axios';

export default class RecentMeetings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3306/viewRecentMeetingsADMIN')
        .then(res =>{
            this.setState({posts: res.data.result})
            console.log(res.data);
        }, err => { console.log(err)});
    }
    render() {
        const columns = [ 
            {
                Header: "Date",
                accessor: "Date",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Time",
                accessor: "Time",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false,
                filterable: false
            },
            {
                Header: "Duration",
                accessor: "Duration",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Agenda",
                accessor: "Agenda",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Venue",
                accessor: "Venue",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Participants Invited",
                accessor: "ParticipantInvited",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            {
                Header: "Meeting CreatedBy",
                accessor: "Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' }
            },
            // {
            //     Header: "Actions",
            //     headerStyle: { fontWeight: 'bold' },
            //     Cell: props => {
            //         return( 
            //             <button className="btn btn-danger" onClick={e => {this.deleteRow(props.original.idCommittee)}}><i className="fas fa-trash"></i>Delete</button>
            //         )
            //     },
            //     sortable: false,
            //     filterable: false,
            //     width: 100,
            //     maxWidth: 100,
            //     minWidth: 100
            // },
            // {
            //     Header: "Actions",
            //     headerStyle: { fontWeight: 'bold' },
            //     Cell: props => {
            //         return(
            //             <button className="btn btn-Warning" onClick={() => { this.updateRow(props.original.idCommittee)}}><i className="fas fa-edit"></i> Edit</button>
            //         )
            //     },
            //     sortable: false,
            //     filterable: false,
            //     width: 100,
            //     maxWidth: 100,
            //     minWidth: 100
            // }
        ]
        return (
            <div id="page-wrapper" style={{}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Recent Meeting Details</h2>
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
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
