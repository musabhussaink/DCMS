import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewStudents extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <h2>Student</h2> <br></br>
                            <form action="/Admin/Student" method="get" onsubmit="return check(this) && false;">        <div style={{ display: 'flex' }}>
                                <p style={{ paddingTop: 7, marginLeft: 20 }}> <b>Search:</b></p> <select className="form-control" id="ListItems" name="ListItems" style={{ marginLeft: 5 }}><option selected="selected" value>Select Search Criteria</option>
                                    <option value="Name">Search by Name</option>
                                    <option value="regNo">Search by Registration No</option>
                                    <option value="email">Search by Email</option>
                                </select>
                                <p style={{ paddingTop: 7 }} /> <input className="form-control" id="SearchString" name="SearchString" style={{ marginLeft: 5 }} type="text" />
                                {/* <input type="submit" defaultValue="Search" className="btn btn-primary" style={{ marginLeft: 5 }} /> */}
                            </div>
                            </form>
                            <br /> <hr></hr>
                            <form action="/Admin/Student" method="post" onsubmit="return confirmDelete(this) && false;"><table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                    </th>
                                    <th>
                                        <a href="/Admin/Student?sortOrder=name_desc">Name</a>
                                    </th>
                                    <th>
                                        Registration No.
                </th>
                                    <th>
                                        Contact No.
                </th>
                                    <th>
                                        Email
                </th>
                                    <th>
                                        CGPA
                </th>
                                    <th />
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" defaultValue={5763} name="stdID" id="stdID" />
                                        </td>
                                        <td>
                                            Waleed Amjad
                                        </td>
                                        <td>
                                            FA10-BCS-001
                                        </td>
                                        <td>
                                            0346-5335365
                                        </td>
                                        <td>
                                            <Link to="mailto:kamran.bcs095@gmail.com">kamran.bcs095@gmail.com</Link>
                                        </td>
                                        <td>
                                            0
                                        </td>
                                        {/* <td>
                                            <Link to="/Admin/Student/AssignCourse" className="btn btn-primary">Assign Course</Link>
                                        </td> */}
                                        <td>
                                            <Link to="/Admin/EditStudent">Edit</Link> |
                                            <Link to="/Admin/DetailsStudent">Details</Link> |
                                            <a href="/Admin/Student">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                <input type="submit" defaultValue="Delete Selected" className="btn btn-primary" disabled />
                            </form><br />
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
