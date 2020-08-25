import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditPLO extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit PLO</h2>
                            <form action="/HOD/EditPLO/3" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="CuoBPRYbEkt7__aKtcJNXHKZzqLymvdhBeW2eJ1KzKoVZ2V9SlAVkdgiIxwSzZ54P7lsvFlP-K5-yD6QJVnUjBLnXRJ9wtrult6txM_GDenww9kyQx4n69fUbbljAUvj0" />    <div className="form-horizontal">
                                <hr />
                                <input data-val="true" data-val-number="The field ID must be a number." data-val-required="The ID field is required." id="ID" name="ID" type="hidden" defaultValue={3} />
                                <input data-val="true" data-val-number="The field ProgramID must be a number." id="ProgramID" name="ProgramID" type="hidden" defaultValue={1} />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Description">Description</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-length="The field Description must be a string with a maximum length of 280." data-val-length-max={280} data-val-required="The Description field is required." id="Description" name="Description" type="text" defaultValue="Identify performances that you expect of graduates and write them to complete the statement." />
                                        <span className="field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true" />
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
                                <Link to="/HOD/PLO">Back to List</Link>
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
