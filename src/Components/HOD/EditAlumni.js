import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditAlumni extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit</h2>
                            <form action="/HOD/EditAlumni/1004" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="3A6atyO-qQ0bh0nQjaOdMKxp2wjlGSX2I28Uu4VJa8FMwN6lSvmb1uwjcVktXxX0qh0Kvs-TMJeiUoaGQkyJ3GCZktNZqRZTb1AlONdkvciBrGwHVCD2VtiBHspNEll-0" />    <div className="form-horizontal">
                                <h4>Alumni</h4>
                                <hr />
                                <input data-val="true" data-val-number="The field AlumniID must be a number." data-val-required="The AlumniID field is required." id="AlumniID" name="AlumniID" type="hidden" defaultValue={1004} />
                                <input id="Password" name="Password" type="hidden" defaultValue="IW32kQX6bgQVmyqcMLPP/w==" />
                                <input data-val="true" data-val-number="The field ProgramID must be a number." id="ProgramID" name="ProgramID" type="hidden" defaultValue />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" id="Name" name="Name" type="text" defaultValue="Kamran Abdul Sattar" />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="No">Contact#</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-regex="Entered phone format is not valid." data-val-regex-pattern="^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$" id="No" name="No" type="text" defaultValue="0312-5262885" />
                                        <span className="field-validation-valid" data-valmsg-for="No" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Email">Email</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="Invalid Email Address!" data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} data-val-required="The Email field is required." id="Email" name="Email" type="email" defaultValue="kami@kami.com" />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="PassingYr">Passing Year</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field Passing Year must be a number." id="PassingYr" name="PassingYr" type="number" defaultValue={2010} />
                                        <span className="field-validation-valid" data-valmsg-for="PassingYr" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CGPA">CGPA</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field CGPA must be a number." data-val-range="The field CGPA must be between 1 and 4." data-val-range-max={4} data-val-range-min={1} id="CGPA" name="CGPA" type="text" defaultValue="3.6" />
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
                                <Link to="/HOD/Alumni">Back to List</Link>
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
