import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

export default class HodReview extends Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3306/HODReviews";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(post => {
            this.setState({posts: post.result})
        })
    }
    render(){
        const columns = [
            { 
                Header: "Name",
                accessor:"Name",
                headerStyle: { fontWeight: 'bold' },
                style:{
                    textAlign:"center"
                }
            },
            {
                Header: "Date",
                accessor:"Date",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            },
            {
                Header:"Reviews",
                accessor:"Reviews",
                headerStyle: { fontWeight: 'bold' },
                filterable:'',
                style:{
                    textAlign:"center"
                }
            }
        ]
        return(
         
         <div>
             <div id="page-wrapper">
                 <div><h1>Head of Department Reviews</h1></div><hr></hr>
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
        )
    }
}