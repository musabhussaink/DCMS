import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditMilestone extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit Course</h2>
                            <form action="/Admin/EditCourse/1" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="uTkCnCRrBSEn1GqbxnDN2zQRDxQWcXwX7TRgbFaYIbSvTDseyvFvQVtHBJX4YY2vM1_KvVf5OKY-T_0X53tpKzmO7IlUufkx-33vGXpg2jd_GweYv8WMinUfGIQawRs80" />    <div className="form-horizontal">
                                <hr />
                                <input data-val="true" data-val-number="The field CourseID must be a number." data-val-required="The CourseID field is required." id="CourseID" name="CourseID" type="hidden" defaultValue={1} />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue="Database" />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CreditHrs">CreditHrs</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field CreditHrs must be a number." data-val-range="The field CreditHrs must be between 1 and 6." data-val-range-max={6} data-val-range-min={1} id="CreditHrs" name="CreditHrs" type="number" defaultValue={3} />
                                        <span className="field-validation-valid" data-valmsg-for="CreditHrs" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Code">Code</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Code field is required." id="Code" name="Code" type="text" defaultValue="CSC21" />
                                        <span className="field-validation-valid" data-valmsg-for="Code" data-valmsg-replace="true" />
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
                                <Link to="/HOC/ViewMilestone">Back to List</Link>
                            </div>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
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
