import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExcelFaculty extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Import Excel Sheet-Faculty</h3>
                            <h4>Note: Excel sheet must contain the following columns in any order: Name, No, Email, Password, Roles.</h4>
                            <h5>Roles column should contain any or all of the following seperated by a semi-colon(;): Faculty;Mentor;PEC </h5>
                            <p>Allowed formats: .xls and .xlsx(max file size = 4mb)</p>
                            <a href="">Download Sample Sheet</a>
                            <br />
                            <br />
                            <form action="/HOD/ExcelFaculty" encType="multipart/form-data" method="post">    <input type="file" name="file" className="btn btn-default" /><br />
                                <input type="submit" defaultValue="Submit" className="btn btn-primary" id="button" />
                            </form><br />
                            <div>
                                <Link to="/HOD/Faculty">Back to List</Link>
                            </div>
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
