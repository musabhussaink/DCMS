import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditIndustryQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Edit Question</h3>
                            <form action="/HOD/EditIndustryQuestion/3" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="khfX4K6x2OVsJSPliSsYsyJnkx_FQO9ql0JUV7yW5bjFSVNPsyIWpLaJNWj0VtG-d1owDXnuQ7yz6M5zBbwm69TdA-H7UXGOVoOtI-fsYTzp-qTOz4rwqk9owapJpTC00" />    <div className="form-horizontal">
                                <hr />
                                <input data-val="true" data-val-number="The field IndqID must be a number." data-val-required="The IndqID field is required." id="IndqID" name="IndqID" type="hidden" defaultValue={3} />
                                <input data-val="true" data-val-number="The field AdminID must be a number." id="AdminID" name="AdminID" type="hidden" defaultValue={1004} />
                                <input id="QuestionType" name="QuestionType" type="hidden" defaultValue="Open Ended" />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Question">Question</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" id="Question" name="Question" type="text" defaultValue="Open Question Testing" />
                                        <span className="field-validation-valid" data-valmsg-for="Question" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Visible_to_industry_members:_">Visible to industry members: </label>
                                    <div className="col-md-8">
                                        <input type="radio" defaultValue="Yes" required name="visible" id="Y" />Yes
                                        <input type="radio" defaultValue="No" required name="visible" id="N" />No
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
                                <Link to="/HOD/IndustryQuestion">Back to List</Link>
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
