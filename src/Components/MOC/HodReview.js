import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HodReview extends Component{
    render(){
        return(
         
         <div>
             <div id="page-wrapper">
                 <div><h1>Head of Department Reviews</h1></div><hr></hr>
             <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Yasir Faheemk</td>
                    <td>2-Aug-2020</td>
                    <td>Keep it up !!</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Yasir Faheem</td>
                    <td>2-Aug-2020</td>
                    <td>Excellent Work !!</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Yasir Faheem</td>
                    <td>2-Aug-2020</td>
                    <td>Keep it up !!</td>
                    </tr>
                </tbody>
                </table>
                 </div>
         </div>   
        )
    }
}