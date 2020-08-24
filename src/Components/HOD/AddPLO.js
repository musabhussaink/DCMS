import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddPLO extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Add a PLO</h2>
                            <form action="/Admin/CreatePLO" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="hsfRMGTAdv_lLeATBKWEwpgR4NLMsmFI4iTpb25OkkwODLxNjMnlxBlx_hFJC3KjU0XRyMcJng5fX5e635DGtvF_S9Ql2d1_QtlBB5XoNCO2KwON4lJTzBk38Jw83i890" />    <div className="form-horizontal">
                                <hr />
                                <input data-val="true" data-val-number="The field ProgramID must be a number." id="ProgramID" name="ProgramID" type="hidden" defaultValue />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Description">Description</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-length="The field Description must be a string with a maximum length of 280." data-val-length-max={280} data-val-required="The Description field is required." id="Description" name="Description" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-default" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/Admin/PLO">Back to List</Link>
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
