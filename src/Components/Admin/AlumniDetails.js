import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AlumniDetails extends Component {
    render() {
        return (
            <div>
                
                <div id="page-wrapper" style={{}}>
                <hr></hr>
        <h1>Details of Committee [FYP]</h1>
                <hr></hr>
            <h2>Head of Committee [Dr. Yasir Faheem]</h2>
            <hr></hr>
                    <div className="row">
                        <div className="col-lg-12">
                        <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Committee ID</th>
                                        {/* <th scope="col">Committee Name</th> */}
                                        <th scope="col">Members Name</th>
                                        {/* <th scope="col">Head</th> */}
                                         {/* <th scope="col">Creation Date</th>
                                         <th scope="col">Desolving Date</th>
                                         <th scope="col">Total Members</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Assign</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        
                                        {/* <td>FYP Committee-2020</td> */}
                                        <td>Kamran Abbasi</td>
                                        {/* <td>Dr. Yasir Faheem</td> */}
                                        {/* <td>20-08-2020</td>
                                        <td>30-08-2020</td>
                                        <td>20</td>
                                        <td>Description of Committee Goes here</td> */}
                                    
                                    
                                            </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        {/* <td>FYP Committee-2020</td> */}
                                        <td>Rohan Ilyas</td>
                                        {/* <td>Dr. Yasir Faheem</td>                                        */}
                                         {/* <td>20-07-2020</td>
                                        <td>10-08-2020</td>
                                        <td>10</td>
                                        <td>Description of Committee Goes here</td> */}
                                      
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        {/* <td>FYP Committee-2020</td> */}
                                        <td>Musab Khatri</td>
                                        {/* <td>Dr. Yasir Faheem</td> */}
                                        {/* <td>20-10-2020</td>
                                        <td>30-12-2020</td>
                                        <td>5</td>
                                        <td>Description of Committee Goes here</td> */}
                                         
                                    </tr>
                                </tbody>
                            </table>
                            {/* <h2>Details</h2>
                            <div>
                                <h4>Alumni</h4>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Name
                                    </dt>
                                    <dd>
                                        Kamran Abdul Sattar
                                    </dd>
                                    <dt>
                                        Contact#
                                    </dt>
                                    <dd>
                                        0312-5262885
                                    </dd>
                                    <dt>
                                        Email
                                    </dt>
                                    <dd>
                                        <a href="mailto:kami@kami.com">kami@kami.com</a>
                                    </dd>
                                    <dt>
                                        Passing Year
                                    </dt>
                                    <dd>
                                        2010
                                    </dd>
                                    <dt>
                                        CGPA
                                    </dt>
                                    <dd>
                                        3.6
                                    </dd>
                                </dl> */}
                            {/* </div> */}
                            <p>
                                <Link to="/Admin/ViewCommittees">Back to List</Link>
                            </p>
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
