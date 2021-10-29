import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


export default class ViewMilestones extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3306/ViewMilestonesHoc').then(
            res => {
                this.setState({
                    data: res.data.sessionsData
                })
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {

        {
            const columns = [
            //     {
            //     Header: "ID",
            //     accessor:"idMilestone"
                
            // },
               { 
                Header: "Milestone",
                accessor:"Name",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Create Date",
                accessor:"CreateDate",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Completion Date",
                accessor:"CompleteOn",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Total Task",
                accessor: "TotalTask",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            },       
            {
                Header: "Status",
                accessor: "Status",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
    

            },
            {
                Header:"Committee",
                accessor:"CommitteeName",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }
]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br></br>
                            <h2>Milestone</h2>
                            
                            <hr></hr>
                            <ReactTable className="-striped -highlight"
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              
                              defaultPageSize={10}>
                            </ReactTable>      

                           
                        </div>
                       
                    </div>
                </div>
                <hr />
            </div>

        )
    }
}
}
