import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddAlumni extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Add Alumni</h2>
                            <form action="/Admin/CreateAlumni" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="iNWhWtJR7kO8zpu9yU7oqpJPQaTZIaoj-eJ2KzxafZ7dXNwrvY-B9iQ95AIIV7RIIX-oerkvY57V9KtEhIQPOw8tnPmKlgcyINvy2q7OTCXdF5nI4wE-1g1oN0nDPr6c0" />    <div className="form-horizontal">
                                <hr />
                                <input id="Password" name="Password" type="hidden" defaultValue />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" id="Name" name="Name" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="No">Contact#</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-regex="Entered phone format is not valid." data-val-regex-pattern="^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$" id="No" name="No" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="No" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Email">Email</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="Invalid Email Address!" data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} data-val-required="The Email field is required." id="Email" name="Email" type="email" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="PassingYr">Passing Year</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field Passing Year must be a number." id="PassingYr" name="PassingYr" type="number" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="PassingYr" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CGPA">CGPA</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field CGPA must be a number." data-val-range="The field CGPA must be between 1 and 4." data-val-range-max={4} data-val-range-min={1} id="CGPA" name="CGPA" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="CGPA" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/Admin/Alumni">Back to List</Link>
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
