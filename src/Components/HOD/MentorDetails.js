import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MentorDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Mentor-Details</h2>
                            <br />
                            <dl className="dl-horizontal">
                                <dt style={{ width: 110 }}>
                                    Mentor Name:
                                </dt>
                                <dd style={{ marginLeft: 120 }}>
                                    Kamran Abdul Sattar
                                </dd>
                            </dl>
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        Course Name
                                    </th>
                                    <th>
                                        Code
                                    </th>
                                    <th>
                                        Semester No
                                    </th>
                                    <th>
                                        Section No
                                    </th>
                                    <th>
                                        Session
                                    </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            Database
                                    </td>
                                        <td>
                                            CSC21
                                    </td>
                                        <td>
                                            1
                                    </td>
                                        <td>
                                            A
                                    </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=1&fID=1029">Unassign</a>
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
                                            1
                                        </td>
                                        <td>
                                            A
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=2&fID=1029">Unassign</a>
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
                                            8
                                        </td>
                                        <td>
                                            A
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=4&fID=1029">Unassign</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Database
                                        </td>
                                        <td>
                                            CSC21
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            A
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=1&fID=1029">Unassign</a>
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
                                            1
                                        </td>
                                        <td>
                                            B
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=4&fID=1029">Unassign</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Database
                                        </td>
                                        <td>
                                            CSC21
                                        </td>
                                        <td>
                                            8
                                        </td>
                                        <td>
                                            A
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=1&fID=1029">Unassign</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Database
                                        </td>
                                        <td>
                                            CSC21
                                        </td>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            B
                                        </td>
                                        <td>
                                            FA14
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=1&fID=1029">Unassign</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Database
                                        </td>
                                        <td>
                                            CSC21
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            A
                                        </td>
                                        <td>
                                            SP15
                                        </td>
                                        <td>
                                            <a href="/HOD/MentorUnregister?cID=1&fID=1029">Unassign</a>
                                        </td>
                                    </tr>
                                </tbody></table>
                            <br />
                            <Link to="/HOD/HOD">Back to Head of Department</Link>
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
