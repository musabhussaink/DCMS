import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditStudent extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit</h2>
                            <form action="/HOD/EditStudent/5763" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="WyIoHDCGN7m5Rro9dMi1QFqNq49T_njAJ4qFL6MjkLt2dZ2exOTRQ-jLq-WeEmrUyj_c9k5EgY_NizMrTcxoCK7BXIQUEY_CZjA5QlDTb6HJ4xhFzBF-XVCaoW8cIIJp0" />    <div className="form-horizontal">
                                <h4>Student</h4>
                                <hr />
                                <input data-val="true" data-val-number="The field StudentID must be a number." data-val-required="The StudentID field is required." id="StudentID" name="StudentID" type="hidden" defaultValue={5763} />
                                <input id="Password" name="Password" type="hidden" defaultValue="OANq9aGLevXPQxpwvqZXag==" />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue="Waleed Amjad" />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="RegNo">Reg#</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Reg# field is required." id="RegNo" name="RegNo" type="text" defaultValue="FA10-BCS-001" />
                                        <span className="field-validation-valid" data-valmsg-for="RegNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="No">Contact#</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-regex="Entered phone format is not valid." data-val-regex-pattern="^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$" id="No" name="No" type="text" defaultValue="0346-5335365" />
                                        <span className="field-validation-valid" data-valmsg-for="No" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Email">Email</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} id="Email" name="Email" type="email" defaultValue="kamran.bcs095@gmail.com" />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CGPA">CGPA</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field CGPA must be a number." data-val-range="The field CGPA must be between 1 and 4." data-val-range-max={4} data-val-range-min={1} id="CGPA" name="CGPA" type="text" defaultValue={0} />
                                        <span className="field-validation-valid" data-valmsg-for="CGPA" data-valmsg-replace="true" />
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
                                <Link to="/HOD/Student">Back to List</Link>
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
