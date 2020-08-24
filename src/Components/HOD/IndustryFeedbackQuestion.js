import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IndustryFeedbackQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h3>Industry Question(s)</h3>
                            <p>
                                <Link className="btn btn-primary" style={{ float: 'right', marginBottom: '10px' }} to="/Admin/AddIndustryQuestion">Add question</Link>
                            </p>
                            <table className="table table-condensed table-striped table-bordered">
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
                                            Open Question Testing
              </td>
                                        <td>
                                            Open Ended
              </td>
                                        <td>
                                            Yes
              </td>
                                        <td>
                                            <Link to="/Admin/EditIndustryQuestion">Edit</Link> |
                                            <a href="/Admin/DeleteIndustryQuestion" onclick="return confirm('Are you sure you want to delete this question? All data related to this question might also be deleted.');">Delete</a>
                                        </td>
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
                                            <Link to="/Admin/EditIndustryQuestion">Edit</Link> |
                                            <a href="/Admin/DeleteIndustryQuestion/4" onclick="return confirm('Are you sure you want to delete this question? All data related to this question might also be deleted.');">Delete</a>
                                        </td>
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
