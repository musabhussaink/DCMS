import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class ViewFaculty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3306/viewFacultyADMIN";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    render() {
        const columns = [ 
            {
                Header: "Name",
                accessor: "Name",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Contact",
                accessor: "PhoneNo",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
            },
            {
                Header: "Email",
                accessor: "Email",
                style:{
                    textAlign:"center"
                },
                headerStyle: { fontWeight: 'bold' },
                sortable: false
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
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <h2>Faculty</h2><hr></hr>
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
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
