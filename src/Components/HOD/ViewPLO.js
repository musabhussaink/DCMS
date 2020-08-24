import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewPLO extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h3>PLO(s)</h3>
                            <br />
                            <table className="table table-bordered table-condensed table-striped">
                                <tbody><tr>
                                    <th>
                                        Sr No
              </th>
                                    <th>
                                        Description
              </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            1
              </td>
                                        <td>
                                            Identify performances that you expect of graduates and write them to complete the statement.
              </td>
                                        <td>
                                            <Link to="/Admin/EditPLO">Edit</Link> |
                                            <a href="/Admin/DeletePLO" onclick="return confirm('Are you sure to delete this PLO?');">Delete</a>
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

