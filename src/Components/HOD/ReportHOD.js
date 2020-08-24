import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReportHOD extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <h2>Generate the Report of Head of Department</h2>
                            <hr></hr>
                            <form action="/HOD/ReportsSection" method="get" onsubmit="return check(this) && false;">        <div style={{ display: 'flex' }}>
                                <p style={{ paddingTop: 7, marginLeft: 20 }}> <b>Search:</b></p> <select className="form-control" id="ListItems" name="ListItems" style={{ marginLeft: 5 }}><option selected="selected" value>Select Search Criteria</option>
                                    <option value="Name">Search by Name</option>
                                    <option value="email">Search by Email</option>
                                </select>
                                <p style={{ paddingTop: 7 }} /> <input className="form-control" id="SearchString" name="SearchString" style={{ marginLeft: 5 }} type="text" defaultValue />
                                <input type="submit" defaultValue="Search" className="btn btn-primary" style={{ marginLeft: 5 }} />
                            </div>
                            </form><hr></hr>
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Contact No.
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            Kamran Abdul Sattar
                                        </td>
                                        <td>
                                            0312-5262885
                                        </td>
                                        <td>
                                            <a href="mailto:kamran_bcs095@yahoo.com">kamran_bcs095@yahoo.com</a>
                                        </td>
                                        <td><Link to="/HOD/ReportsSection" onClick={() => (window.confirm('Generate the Report?'))}><button className="btn btn-primary">Generate Report</button></Link></td>

                                    </tr>
                                </tbody></table>
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