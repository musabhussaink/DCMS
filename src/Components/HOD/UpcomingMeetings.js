import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UpcomingMeetings extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Upcoming Meeting Details</h2>
                            <hr></hr>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Meeting ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Agenda</th>
                                        <th scope="col">Venue</th>
                                        <th scope="col">Participants Invited</th>
                                        <th scope="col">Head of Committee</th>
                                        {/* <th scope="col">Assign</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>20-08-2020</td>
                                        <td>9:00 am</td>
                                        <td>1 hour</td>
                                        <td>Discission of 1st Sessional Exams</td>
                                        <td>Room G05, CS Department</td>
                                        <td>5</td>
                                        <td>Dr. Yasir Faheem</td>
                                        {/* <td><Link to="/HOD/Session_View" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td> */}
                                            </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>21-08-2020</td>
                                        <td>10:00 am</td>
                                        <td>2 hour</td>
                                        <td>Discission of 1st Sessional Exams</td>
                                        <td>Room G05, CS Department</td>
                                        <td>10</td>
                                        <td>Dr. Kamran Abbasi</td>
                                        {/* <td><Link to="/HOD/Session_View" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td> */}
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>22-08-2020</td>
                                        <td>11:00 am</td>
                                        <td>3 hour</td>
                                        <td>Discission of 1st Sessional Exams</td>
                                        <td>Room G05, CS Department</td>
                                        <td>20</td>
                                        <td>Dr. Rohan Ilyas</td>
                                        {/* <td><Link to="/HOD/Session_View" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td> */}
                                    </tr>
                                </tbody>
                            </table>
        {/* Page 1 of 1 */}
                        <div className="pagination-container"><ul className="pagination"><li className="active"><a>1</a></li></ul></div>
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
