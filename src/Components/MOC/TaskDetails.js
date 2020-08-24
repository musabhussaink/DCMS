import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TaskDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Tasks Details</h3>
                            <div>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Task iD
            </dt>
                                    <dd>
                                        1
            </dd>
                                    <dt>
                                        Assigned To
            </dt>
                                    <dd>
                                        ROHAN AWAN
            </dd>
                                    <dd>
                                        <table className="table table-striped table-condensed table-bordered">
                                            <tbody><tr>
                                                <th>Task id</th>
                                                <th>Assigned To</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                            </tr>
                                                <tr>
                                                    <td>
                                                        1
                    </td>
                                                    <td>
                                                        ROHAN AWAN
                    </td>
                                                    <td>
                                                        15 Sep,2020
                    </td>
                                                    <td>
                                                        <a href="/MOC/DeleteSecCourse/1?secID=1">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        2
                    </td>
                                                    <td>
                                                        KAMRAN ABBASI
                    </td>
                                                    <td>
                                                        20 Sep,2020
                    </td>
                                                    <td>
                                                        <a href="/MOC/DeleteSecCourse/2?secID=2">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        3
                    </td>
                                                    <td>
                                                        ROHAN AWAN
                    </td>
                                                    <td>
                                                        25 Sep,2020
                    </td>
                                                    <td>
                                                        <a href="/MOC/DeleteSecCourse/4?secID=3">Delete</a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </dd>
                                    <dd>
                                    </dd>
                                </dl>
                            </div>
                            <Link to="/MOC/ViewTask">Back to Tasks</Link>
                            <br />
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
