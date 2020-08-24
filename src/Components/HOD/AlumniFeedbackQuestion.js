import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AlumniFeedbackQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h2>Alumni Question(s)</h2>
                            <p>
                                <Link className="btn btn-primary" style={{ float: 'right', marginBottom: '10px' }} to="/Admin/AddAlumniQuestion">Add question</Link>
                            </p>
                            <table className="table table-bordered table-condensed table-striped">
                                <tbody><tr>
                                    <th>
                                        Question
                                    </th>
                                    <th>
                                        QuestionType
                                    </th>
                                    <th>
                                        Visible
                                    </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            How well did we understand what you wanted?
                                        </td>
                                        <td>
                                            Close Ended
                                        </td>
                                        <td>
                                            Yes
                                        </td>
                                        <td>
                                            <Link to="/Admin/EditAlumniQuestion">Edit</Link> |
                                            <a href="/Admin/DeleteAlumniQuestion" onclick="return confirm('Are you sure you want to delete this question? All data related to this question might also be deleted.');">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Open Question Testing
                                        </td>
                                        <td>
                                            Open Ended
                                        </td>
                                        <td>
                                            Yes
                                        </td>
                                        <td>
                                            <Link to="/Admin/EditAlumniQuestion">Edit</Link> |
                                            <a href="/Admin/DeleteAlumniQuestion" onclick="return confirm('Are you sure you want to delete this question? All data related to this question might also be deleted.');">Delete</a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

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
