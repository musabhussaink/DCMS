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
        await axios.get('http://localhost:3306/SubmittedTasksHoc').then(
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
            //     {
            //     Header: "ID",
            //     accessor:"idMilestone"
                
            // },
               { 
                Header: "Sr No",
                accessor:"",
                width:"50",
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Task Description",
                accessor:"",
                width:"250",
                filterable:'',
                style:{
                    textAlign:"center"
                }

            }, 
            {
                Header: "Submit On",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },

            {
                Header: "Assigning Date",
                accessor:"",
                width:"150",
                filterable:'',
                

                style:{
                    textAlign:"center"
                }

            },
            {
                Header: "Task Deadline",
                accessor:"",
                headerStyle: { fontWeight: 'bold' },
                width:"150",
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
                            <h2>List of Submitted Tasks</h2>
                            
                            <hr></hr>
                            <ReactTable className="-striped -highlight"
                              columns = {columns} 
                              data = {this.state.data}
                              filterable
                              noDataText={"Please Wait..."}
                              defaultPageSize={5}>
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
