import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Details</h2>
                            <div>
                                <h4>Student</h4>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Name
            </dt>
                                    <dd>
                                        Waleed Amjad
            </dd>
                                    <dt>
                                        Reg#
            </dt>
                                    <dd>
                                        FA10-BCS-001
            </dd>
                                    <dt>
                                        Contact#
            </dt>
                                    <dd>
                                        0346-5335365
            </dd>
                                    <dt>
                                        Email
            </dt>
                                    <dd>
                                        <a href="mailto:kamran.bcs095@gmail.com">kamran.bcs095@gmail.com</a>
                                    </dd>
                                    <dt>
                                        CGPA
            </dt>
                                    <dd>
                                        0
            </dd>
                                    <dd>
                                        <table className="table table-striped table-condensed table-bordered">
                                            <tbody><tr>
                                                <th>Course Title</th>
                                                <th>Code</th>
                                                <th>Semester</th>
                                                <th>Section</th>
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
                                                        <a href="/Admin/StudentCourseRemove" onclick="return confirm('Are you sure you want to remove this course?');">Remove Course</a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </dd>
                                </dl>
                            </div>
                            <p>
                                <Link to="/Admin/EditStudent">Edit</Link> |
                                <Link to="/Admin/Student">Back to List</Link>
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
