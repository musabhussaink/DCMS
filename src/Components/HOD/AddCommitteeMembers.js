import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddCommitteeMembers extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add Member to a Committee</h3>
                            <form action="/Admin/AddCommitteeMembers" encType="multipart/form-data"><input name="__RequestVerificationToken" type="hidden" defaultValue="bpUdLmTWPRJn4lM9tEDR5BHKcgKacwOMZ289ij61XUkakpUuqQhAaAq7LaAtYyoMqebf5ZhvW_JdjDyYrwZWq29apopxi93SKbMGWMoaEaC6ZtkFKCavZ9xNviJtz0s60" />    <div className="form-horizontal">
                                <hr />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Code">Select the Committee</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Code field is required." id="Code" name="Code" type="text" />
                                        {/* <span className="field-validation-valid" data-valmsg-for="Code" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Faculty Member Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text"  />
                                        {/* <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CreditHrs">Role</label>
                                    <div className="col-md-10">
                                    <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text"  />
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-number="The field CreditHrs must be a number." data-val-range="The field CreditHrs must be between 1 and 6." data-val-range-max={6} data-val-range-min={1} id="CreditHrs" name="CreditHrs" type="number" defaultValue /> */}
                                        {/* <span className="field-validation-valid" data-valmsg-for="CreditHrs" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CreditHrs">Today's Date</label>
                                    <div className="col-md-10">
                                    <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="date"  />
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-number="The field CreditHrs must be a number." data-val-range="The field CreditHrs must be between 1 and 6." data-val-range-max={6} data-val-range-min={1} id="CreditHrs" name="CreditHrs" type="number" defaultValue /> */}
                                        {/* <span className="field-validation-valid" data-valmsg-for="CreditHrs" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Outline">Outline</label>
                                    <div className="col-md-10">
                                        <input type="file" name="file" />
                                    </div>
                                </div> */}
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-default" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/Admin/ViewCommitteeMembers">Back to List</Link>
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
