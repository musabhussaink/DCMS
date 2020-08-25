import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FacultyDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Details</h2>
                            <div>
                                <h4>Faculty</h4>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Name
                                    </dt>
                                    <dd>
                                        Kamran
                                    </dd>
                                    <dt>
                                        Contact#
                                    </dt>
                                    <dd>
                                    </dd>
                                    <dt>
                                        Email
                                    </dt>
                                    <dd>
                                        <Link to="mailto:kamran.bcs095@gmail.com">kamran.bcs095@gmail.com</Link>
                                    </dd>
                                    <dd>
                                        <table className="table table-striped table-condensed table-bordered">
                                            <tbody><tr>
                                                <th>Course Title</th>
                                                <th>Code</th>
                                                <th>Semester</th>
                                                <th>Section</th>
                                                <th>Session</th>
                                                <th />
                                            </tr>
                                            </tbody></table>
                                    </dd>
                                </dl>
                            </div>
                            <p>
                                <Link to="/HOD/EditFaculty">Edit</Link> |
                                <Link to="/HOD/Faculty">Back to List</Link>
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
