import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


export default class SubmittedTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3306/ReportCommitteeMemsHoc').then(
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
        
            const columns = [
           
               { 
                Header: "S.No",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"100",
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "First Name",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Last name",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },

            {
                Header: "Major Role",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Commiittee Name",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Action",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
           
  
        ]
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br></br>
                            <h2>Committee Member Report</h2>
                            
                            <hr></hr>
                            <ReactTable className="-striped -highlight"
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              noDataText={"Please Wait..."}
                              defaultPageSize={8}>
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
