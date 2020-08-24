import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewFaculty extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <h2>Generate the Report of a Faculty Member</h2> <hr></hr>
                            <form action="/Admin/ReportFaculty" method="get" onsubmit="return check(this) && false;">    <div style={{ display: 'flex' }}>
                                <p style={{ paddingTop: 7, marginLeft: 20 }}> <b>Search:</b></p> <select className="form-control" id="ListItems" name="ListItems" style={{ marginLeft: 5 }}><option selected="selected" value>Select Search Criteria</option>
                                    <option value="Name">Search by Name</option>
                                    <option value="email">Search by Email</option>
                                </select>
                                <p style={{ paddingTop: 7 }} /> <input className="form-control" id="SearchString" name="SearchString" style={{ marginLeft: 5 }} type="text" defaultValue />
                                <input type="submit" defaultValue="Search" className="btn btn-primary" style={{ marginLeft: 5 }} />
                            </div>
                            </form><br />
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        <a href="/Admin/Faculty?sortOrder=name_desc">Name</a>
                                    </th>
                                    <th>
                                        Contact No.
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                    <tr>
                                        <td>
                                            Kamran
                                        </td>
                                        <td>
                                            03410831268
                                        </td>
                                        <td><Link to="/Admin/ReportsSection" onClick={() => (window.confirm('Generate the Report?'))}><button className="btn btn-primary">Generate Report</button></Link></td>
                                    </tr>
                                </tbody></table>
                            <br />
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
