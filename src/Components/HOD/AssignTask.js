import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AssignTask extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Assign the Task</h3>
                            <br></br> <hr />
                            <form>
                                {/* <input name="__RequestVerificationToken" type="hidden" defaultValue="dp1rMPG_WaeLFhrTLjyIfpfPkGylll_M7Ue86VX6uzrE59MWaEK90uXm0qaPrRFJMA5s6PHmKEKO9X_OBgUY-d915FItoadbcv1UxC3lq2ldaoMPdFsP0Udit0s2uppZ0" />     */}
                                <div className="form-horizontal">
                                    <hr />
                                    <div className="form-group">
                                    <label className="control-label col-md-2">Search by Name</label>
                                    <div className="col-md-3">
                                        <input type="search" className="form-control"></input>
                                        {/* <select className="form-control" id="Session" name="Session"><option value="FA">FA</option>
                                            <option value="SP">SP</option>
                                        </select> */}
                                        {/* <span className="field-validation-valid" data-valmsg-for="SessionName" data-valmsg-replace="true" /> */}
                                    </div>
                                    <label className="control-label col-md-2">Search by Role</label>
                                    <div className="col-md-3">
                                        <select className="form-control" id="Year" name="Year">
                                            <option value={15}>Student</option>
                                            <option value={16}>Committee Members</option>
                                            <option value={17}>Faculty Members</option>
                                            <option value={18}>Head of Committee</option>
                                            {/* <option value={19}>Admin</option>
                                            <option value={20}>20</option>
                                            <option value={21}>21</option> */}
                                        </select>
                                        {/* <span className="field-validation-valid" data-valmsg-for="Year" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form> 
                            {/* Ending of Search Form */}

                            {/* Starting of table */}
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Major Role</th>
                                        {/* <th scope="col">Assign</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Head of Department</td>
                                        <td><Link to="/HOD/AssigningTask"><button className="btn btn-primary">Assign</button></Link></td>
                                            </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Head of Committee</td>
                                        <td><Link to="/HOD/AssigningTask"><button className="btn btn-primary">Assign</button></Link></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Student</td>
                                        <td><Link to="/HOD/AssigningTask"><button className="btn btn-primary">Assign</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                                    {/* Ending of table */}
                            <div>
                                <a href="/HOD/AssignedTask">View all Assigned Tasks</a>
                            </div>
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

            </div>

        )
    }
}
