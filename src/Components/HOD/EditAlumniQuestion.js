import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditAlumniQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Edit Question</h3>
                            <form action="/HOD/EditAlumniQuestion/3" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="skQzh1NKpSb2Y42-ezHWUGJU5WILxWw9Mee6fEh63AXtttjul3ZwJDAtthwlx9EBHtyUl2hcaT1rpawP_rDAmn30lhtq3jShC7S8QkoIsJwJqINK0u6XcEtfUZdf6NmC0" />    <div className="form-horizontal">
                                <hr />
                                <input data-val="true" data-val-number="The field AlqID must be a number." data-val-required="The AlqID field is required." id="AlqID" name="AlqID" type="hidden" defaultValue={3} />
                                <input data-val="true" data-val-number="The field AdminID must be a number." id="AdminID" name="AdminID" type="hidden" defaultValue={1004} />
                                <input id="QuestionType" name="QuestionType" type="hidden" defaultValue="Close Ended" />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Question">Question</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" id="Question" name="Question" type="text" defaultValue="How well did we understand what you wanted?" />
                                        <span className="field-validation-valid" data-valmsg-for="Question" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Visible_to_alumnus:_">Visible to alumnus: </label>
                                    <div className="col-md-10">
                                        <input type="radio" defaultValue="Yes" required name="visible" id="Y" />Yes
                                        <input type="radio" defaultValue="No" required name="visible" id="N" />No
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Save" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/HOD/AlumniQuestion">Back to Alumni questions</Link>
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
