import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SectionCourse extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Section-Course</h2>
                            <form action="/Admin/SectionCourse/7" className="form-horizontal" method="post" role="form"><input name="__RequestVerificationToken" type="hidden" defaultValue="27_96HEugL9ESF5SbkbT8JC1RhpNLEm-maNJfTgCB1yPvE-AJ6MzafaymjbIf7m4nWS1g1JsP7XeNw8Y5evSffBr4gNKQK5-_Mmg4GMyj56PxpALzJHdqCB5D67yHoGb0" /><div className="validation-summary-valid" data-valmsg-summary="true"><ul><li style={{ display: 'none' }} />
                            </ul></div>    <table className="table table-striped table-condensed table-bordered">
                                    <tbody><tr>
                                        <th>
                                        </th>
                                        <th>
                                            Course Name
                </th>
                                        <th>
                                            Credit Hours
                </th>
                                        <th>
                                            Code
                </th>
                                    </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="course" defaultValue={2} />
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
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="course" defaultValue={8} />
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
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="course" defaultValue={1} />
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
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="course" defaultValue={7} />
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
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="course" defaultValue={4} />
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
                                        </tr>
                                    </tbody></table>
                                <input type="submit" defaultValue="Assign courses" className="btn btn-primary" />
                            </form>
                            <br />
                            <Link to="/Admin/Section">Back to sections</Link>
                            <br /><br />
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
