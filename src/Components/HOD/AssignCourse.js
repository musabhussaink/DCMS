import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AssignCourse extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Student Name: Waleed Amjad</h3>
                            <form action="/Admin/StudentCourse" className="form-horizontal" method="post" role="form"><input name="__RequestVerificationToken" type="hidden" defaultValue="B8IK3k4BW0RP_MUTrzvVAuGB9LHX6KjzWmCD2Q911RywXNlWrdXW-bU5XmFf35AO6oG-qKUn5tW12PG23e-nUto6m_VI-q_foYlgv_HG338BKbuDb5gBrtj1NfmQxTvy0" /><div className="validation-summary-valid" data-valmsg-summary="true"><ul><li style={{ display: 'none' }} />
                            </ul></div><table className="table table-condensed table-striped table-bordered">
                                    <tbody><tr>
                                        <th>
                                        </th>
                                        <th>
                                            Name
                </th>
                                        <th>
                                            CreditHrs
                </th>
                                        <th>
                                            Code
                </th>
                                        <th>
                                            Section
                </th>
                                    </tr>
                                        <tr>
                                            <td>
                                                <div id="MyDiv">
                                                    <input type="checkbox" name="course" defaultValue={1} id={1} onclick="ChangeCourse(this.id)" />
                                                </div>
                                            </td>
                                            <td>
                                                Database
                </td>
                                            <td>
                                                3
                </td>
                                            <td>
                                                CSC21
                </td>
                                            <td>
                                                <select id="List-1" name="section" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="MyDiv">
                                                    <input type="checkbox" name="course" defaultValue={2} id={2} onclick="ChangeCourse(this.id)" />
                                                </div>
                                            </td>
                                            <td>
                                                Algorithms
                </td>
                                            <td>
                                                3
                </td>
                                            <td>
                                                CSC236
                </td>
                                            <td>
                                                <select id="List-2" name="section" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="MyDiv">
                                                    <input type="checkbox" name="course" defaultValue={4} id={4} onclick="ChangeCourse(this.id)" />
                                                </div>
                                            </td>
                                            <td>
                                                Visual Programming
                </td>
                                            <td>
                                                3
                </td>
                                            <td>
                                                CSC789
                </td>
                                            <td>
                                                <select id="List-4" name="section" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="MyDiv">
                                                    <input type="checkbox" name="course" defaultValue={7} id={7} onclick="ChangeCourse(this.id)" />
                                                </div>
                                            </td>
                                            <td>
                                                System Programming
                </td>
                                            <td>
                                                3
                </td>
                                            <td>
                                                CSC123
                </td>
                                            <td>
                                                <select id="List-7" name="section" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="MyDiv">
                                                    <input type="checkbox" name="course" defaultValue={8} id={8} onclick="ChangeCourse(this.id)" />
                                                </div>
                                            </td>
                                            <td>
                                                Compiler Construction
                </td>
                                            <td>
                                                4
                </td>
                                            <td>
                                                CSC987
                </td>
                                            <td>
                                                <select id="List-8" name="section" />
                                            </td>
                                        </tr>
                                    </tbody></table>
                                <input type="submit" defaultValue="submit" className="btn btn-primary" />
                            </form><br />
                            <Link to="/Admin/Student">Back to list</Link>
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
