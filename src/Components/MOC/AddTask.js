import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Addtask extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Add Task</h2>
                            <form action="/MOC/Addtask/7" className="form-horizontal" method="post" role="form"><input name="__RequestVerificationToken" type="hidden" defaultValue="27_96HEugL9ESF5SbkbT8JC1RhpNLEm-maNJfTgCB1yPvE-AJ6MzafaymjbIf7m4nWS1g1JsP7XeNw8Y5evSffBr4gNKQK5-_Mmg4GMyj56PxpALzJHdqCB5D67yHoGb0" /><div className="validation-summary-valid" data-valmsg-summary="true"><ul><li style={{ display: 'none' }} />
                            </ul></div>    <table className="table table-striped table-condensed table-bordered">
                                    <tbody>
                                    
                                    <th>
                                        Task id
                                    </th>
                                    <th>
                                        Assigned To
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Due Date
                                    </th>
                                    <th>
                                        
                                    </th>
                                    
                                    <th />
                                
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            ROHAN AWAN
                                        </td>
                                        <td>
                                            Active
                                        </td>
                                        <td>
                                            28 Aug,2020
                                        </td>
                                      </tr>
                                    </tbody>
                                    </table>
                                <input type="submit" defaultValue="Assign Task" className="btn btn-primary" />
                            </form>
                            <br />
                            <Link to="/MOC/ViewTask">Back to Task</Link>
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
