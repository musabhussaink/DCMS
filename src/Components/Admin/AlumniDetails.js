import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AlumniDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Details</h2>
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
                                </dl>
                            </div>
                            <p>
                                <Link to="/Admin/EditAlumni">Edit</Link> |
                                <Link to="/Admin/Alumni">Back to List</Link>
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
