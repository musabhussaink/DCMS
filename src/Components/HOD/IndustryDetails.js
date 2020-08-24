import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IndustryDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Details</h2>
                            <div>
                                <h4>Industry</h4>
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
                                        <a href="mailto:kamran.bcs095@gmail.com">kamran.bcs095@gmail.com</a>
                                    </dd>
                                </dl>
                            </div>
                            <p>
                                <Link to="/Admin/EditIndustry">Edit</Link> |
                                <Link to="/Admin/Industry">Back to List</Link>
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
