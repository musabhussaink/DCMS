import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExcelStudents extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Import Excel Sheet-Student</h2>
                            <h4>Note: Excel sheet must contain the following columns in any order: Name, RegNo, No, Email, Password, CGPA, Roles.</h4>
                            <p>Allowed formats: .xls and .xlsx(max file size = 4mb)</p>
                            <a href="">Download Sample Sheet</a>
                            <br />
                            <br />
                            <form action="/Admin/ExcelStudent" encType="multipart/form-data" method="post">    <input type="file" name="file" className="btn btn-default" /><br />
                                <input type="submit" defaultValue="Submit" className="btn btn-primary" id="button" />
                            </form>
                            <br />
                            <div>
                                <Link to="/Admin/Student">Back to List</Link>
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
