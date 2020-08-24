import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AssignedTask extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h3>List of Assigned Tasks</h3>
                            <hr></hr>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Major Role</th>
                                        <th scope="col">Assigning Date</th>
                                        <th scope="col">Task Deadline</th>
                                        <th scope="col">Task Description</th>
                                        {/* <th scope="col">Assign</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Head of Department</td>
                                        <td>20-08-2020</td>
                                        <td>30-08-2020</td>
                                        <td>Description of Task Goes here</td>
                                        <td><Link to="/HOC/AssignedTask" onClick={() => (window.confirm('Submit the Task?'))}><button className="btn btn-primary">Submit</button></Link></td>
                                                                                    
                                            </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Head of Committee</td>
                                        <td>20-08-2020</td>
                                        <td>30-08-2020</td>
                                        <td>Description of Task Goes here</td>
                                        <td><Link to="/HOC/AssignedTask" onClick={() => (window.confirm('Submit the Task?'))}><button className="btn btn-primary">Submit</button></Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Student</td>
                                        <td>20-08-2020</td>
                                        <td>30-08-2020</td>
                                        <td>Description of Task Goes here</td>
                                        <td><Link to="/HOC/AssignedTask" onClick={() => (window.confirm('Submit the Task?'))}><button className="btn btn-primary">Submit</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
                            </div>
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
