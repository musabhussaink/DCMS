import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditIndustry extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit</h2>
                            <form action="/Admin/EditIndustry/6" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="WVqiBEIswygmImxIU6D-YK1dv53LppU7Rm7dcuKslQCD-1nIkTnE5zwcz0k0fLC0mB8e9I4Y9JRqBsjyF_wileFeTrnBZgKzDU3_6txnQW5dzMYDh2Zir_FUcZlh-Y500" />    <div className="form-horizontal">
                                <h4>Industry</h4>
                                <hr />
                                <input data-val="true" data-val-number="The field IndustryID must be a number." data-val-required="The IndustryID field is required." id="IndustryID" name="IndustryID" type="hidden" defaultValue={6} />
                                <input id="Password" name="Password" type="hidden" defaultValue="IW32kQX6bgQVmyqcMLPP/w==" />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue="Kamran Abdul Sattar" />
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
                                        <input className="form-control text-box single-line" data-val="true" data-val-email="Invalid Email Address!" data-val-length="The field Email must be a string with a maximum length of 40." data-val-length-max={40} data-val-required="The Email field is required." id="Email" name="Email" type="email" defaultValue="kamran.bcs095@gmail.com" />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
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
                                <Link to="/Admin/Industry">Back to List</Link>
                            </div>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src="/Content/spinner.gif" alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
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
