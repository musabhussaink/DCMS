import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AssignMentorCourse extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <form action="/HOD/MentorCourse/1029" className="form-horizontal" method="post" role="form"><input name="__RequestVerificationToken" type="hidden" defaultValue="fXR6FA3sHgodAhME6OZ0pLC29dzxPvgtHwLtA9lPAIjz1mQ_DMLOCof9oG3xOxpPxq0jJQ208po01gfjwDM-o8FTp3AC7YBr8tgYN6cO4Nh96TsumC4YroRU87dPQPaR0" /><div className="validation-summary-valid" data-valmsg-summary="true"><ul><li style={{ display: 'none' }} />
                            </ul></div>    <h3>Mentor Name: Kamran Abdul Sattar</h3>
                                <div id="CList">
                                    <div id="L1" style={{ display: 'flex' }}>
                                        <select className="form-control" id={1} name="CourseList" onchange="CourseChange(this.id)" required="required"><option value>Please select a course</option>
                                            <option value={2}>Algorithms</option>
                                            <option value={8}>Compiler Construction</option>
                                            <option value={1}>Database</option>
                                            <option value={7}>System Programming</option>
                                            <option value={4}>Visual Programming</option>
                                        </select>
                                        <select required multiple name="List-1" id="List-1" style={{ marginLeft: 20 }} />
                                    </div>
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <input type="button" className="btn btn-default" onclick="AddRow()" defaultValue="Add a course" />
                                    <input type="submit" defaultValue="Register" className="btn btn-primary" style={{ marginLeft: 5 }} />
                                </div>
                            </form><br />
                            <Link to="/HOD">Back to HOD</Link>
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
