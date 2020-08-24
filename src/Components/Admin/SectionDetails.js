import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SectionDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Section Details</h3>
                            <div>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Semester No
            </dt>
                                    <dd>
                                        8
            </dd>
                                    <dt>
                                        Section
            </dt>
                                    <dd>
                                        A
            </dd>
                                    <dd>
                                        <table className="table table-striped table-condensed table-bordered">
                                            <tbody><tr>
                                                <th>Course Name</th>
                                                <th>Code</th>
                                                <th>Assigned Session</th>
                                                <th>Unassign</th>
                                            </tr>
                                                <tr>
                                                    <td>
                                                        Database
                    </td>
                                                    <td>
                                                        CSC21
                    </td>
                                                    <td>
                                                        FA14
                    </td>
                                                    <td>
                                                        <a href="/Admin/DeleteSecCourse/1?secID=7">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Algorithms
                    </td>
                                                    <td>
                                                        CSC236
                    </td>
                                                    <td>
                                                        FA14
                    </td>
                                                    <td>
                                                        <a href="/Admin/DeleteSecCourse/2?secID=7">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Visual Programming
                    </td>
                                                    <td>
                                                        CSC789
                    </td>
                                                    <td>
                                                        FA14
                    </td>
                                                    <td>
                                                        <a href="/Admin/DeleteSecCourse/4?secID=7">Delete</a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </dd>
                                    <dd>
                                    </dd>
                                </dl>
                            </div>
                            <Link to="/Admin/Section">Back to Sections</Link>
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
