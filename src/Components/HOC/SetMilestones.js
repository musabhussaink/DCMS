import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SetMilestones extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Set Milestone</h2>
                            <form action="/HOC/CreateStudent" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="Pxn325IjnUF3956qEvOuuEStf-j6oo9Gulpsb7VXhHiPIjbMiwiX6ox-DfYvSpqFj8HsmNjvN8vjQR5ap8yPEqaAmjlHjbytUbnM6XFPuKtndKy9BDW0-zAvCAWdKU770" />    <div className="form-horizontal">
                                <hr />
                                <input id="Password" name="Password" type="hidden" defaultValue />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="RegNo">CreateDate</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Reg# field is required." id="start" name="startdate" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="RegNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="No">CompletionDate</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-regex="Entered phone format is not valid." id="end" name="enddate" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="No" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Email">TotalTask</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} id="Email" name="Email" type="email" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CGPA">Status</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field CGPA must be a number." data-val-range="The field CGPA must be between 1 and 4." data-val-range-max={4} data-val-range-min={1} id="CGPA" name="CGPA" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="CGPA" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Add" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/HOC/ViewMilestone">Back to List</Link>
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
