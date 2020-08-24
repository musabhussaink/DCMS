import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewTimeTable extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <br /><br />
                            <h2>ViewTimeTable</h2>
                            <br /><br />
                            <table className="table table-striped table-condensed table-bordered">                 
                                <thead>
                                    <tr>
                                    <th  scope="col">Days</th>
                                    <th scope="col">9:00-10:30am</th>
                                    <th scope="col">10:30-12:00pm</th>
                                    <th scope="col">12:00-1:30pm</th>
                                    <th scope="col">1:30-3:00pm</th>
                                    <th scope="col">3:00-4:30pm</th>
                                    <th scope="col">4:30-5:30pm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th  scope="row">Monday</th>
                                    <td >Meeting with members</td>
                                    <td>Data Algo Lec</td>
                                    <td>     </td>
                                    <td ></td>
                                    <td >Tea Time</td>
                                    <td>
                                    </td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>


                                    </tr>
                                    <tr>
                                    <th scope="row">Tuesday</th>
                                    <td></td>
                                    <td ></td>
                                    <td >Marking</td>
                                    <td>Programming Fundamentals</td>
                                    <td></td>
                                    <td>Tea Time</td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>


                                    </tr>
                                    <tr>
                                    <th scope="row">Wednesday</th>
                                    <td ></td>
                                    <td >Marking</td>
                                    <td>Programming Fundamentals</td>
                                    <td></td>
                                    <td></td>
                                    <td >Data Algo Lec</td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>



                                    </tr>
                                    <tr>
                                    <th scope="row">Thursday</th>
                                    <td ></td>
                                    <td >Meeting with members</td>
                                    <td>Data Algo Lec</td>
                                    <td>     </td>
                                    <td ></td>

                                    <td> Lecture</td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>


                                    </tr>
                                    <tr>
                                    <th scope="row">Friday</th>
                                    <td >Data Algo Lec</td>
                                    <td>FYP meeting</td>
                                    <td ></td>
                                    <td></td><td></td>
                                    <td></td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>

                                    </tr>
                                    <tr>
                                    <th scope="row">Saturday</th>
                                    <td>     </td>
                                    <td ></td>
                                    <td> Lecture</td>
                                    <td>Data Warehousing Lecture</td>
                                    <td ></td>

                                    <td>Data Mining Lecture</td>
                                    <td><Link to="/MOC/ViewTimeTable" onClick={() => (window.confirm('Edit the TimeTable?'))}><button className="btn btn-primary">Edit</button></Link></td>

                                    </tr>                                    
                                </tbody></table>
                            <br />
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