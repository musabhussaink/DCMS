import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditFaculty extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit</h2>
                            <form action="/Admin/EditFaculty/3049" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="0YOG25W3qczC7hqn8owoi7v4Gb34glLiJLW3ryvgbekDJOk056L3ijKp9crDzIFdOhorj65z9WTxdBO8VDqiD28eGFgKOK2U5iNlB5WI_LjQPs0AfbkVoxHCdO4XHuSt0" />    <div className="form-horizontal">
                                <h4>Faculty</h4>
                                <hr />
                                <input data-val="true" data-val-number="The field FacultyID must be a number." data-val-required="The FacultyID field is required." id="FacultyID" name="FacultyID" type="hidden" defaultValue={3049} />
                                <input id="Password" name="Password" type="hidden" defaultValue="QDCv8uM+Jj/PQxpwvqZXag==" />
                                <input id="Roles" name="Roles" type="hidden" defaultValue="Faculty" />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue="Kamran" />
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
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="Invalid Email Address!" data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} data-val-required="The Email field is required." id="Email" name="Email" type="email" defaultValue="kamran.bcs095@gmail.com" />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Roles">Roles</label>
                                    <div className="col-md-10">
                                        <input type="checkbox" defaultValue="Mentor" id="mentor" name="facRole" />Mentor
                                        <input type="checkbox" defaultValue="PEC" id="PEC" name="facRole" />PEC
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Save" className="btn btn-default" />
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
