import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddHOC extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Add New HOD</h2>
                            <form action="/Admin/AddHOC"><input name="__RequestVerificationToken" type="hidden" defaultValue="ZGaiNbLxv56lU8y27n2YZzmclN20ZHlbLndh2_ZRfWfy1jLv3yYscHF8OTMXqKyl6JJ38wb5TWqKFvO7uI-mm8mQ9QcpJZpoTz2D2lndnAeofB2z5530aAjRF3H6l2Qz0" />    <div className="form-horizontal">
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
                                    <label className="control-label col-md-2" htmlFor="Roles" title="Leave both unticked for instructor only">Roles</label>
                                    <div className="col-md-10">
                                        <input type="checkbox" defaultValue="Mentor" name="facRole" title="Leave both unticked for instructor only" />Mentor &nbsp;
                                        <input type="checkbox" defaultValue="PEC" name="facRole" title="Leave both unticked for instructor only" />PEC
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
                                <Link to="/Admin/Faculty">Back to List</Link>
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
