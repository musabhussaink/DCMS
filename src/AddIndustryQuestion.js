import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddIndustryQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add Question</h3>
                            <form action="/Admin/AddIndustryQuestion" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="TFkJvioG6bYdy9NFqzr23h30x76DNBDOGg6XUKi06hwdGCuy0n3qhh1sYIM1QzYSiySJMR6NNLUcghv5-_iEC6JgBiVtceRnqB8YCYMuIbj9Tz05njpbWwMQf_Rvo9NW0" />    <div className="form-horizontal">
                                <hr />
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Question">Question</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" id="Question" name="Question" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Question" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="QuestionType">QuestionType</label>
                                    <div className="col-md-10">
                                        <select className="form-control" id="QuestionType" name="QuestionType"><option value="Close Ended">Close Ended</option>
                                            <option value="Open Ended">Open Ended</option>
                                        </select>
                                        <span className="field-validation-valid" data-valmsg-for="QuestionType" data-valmsg-replace="true" />
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
                                <Link to="/Admin/IndustryQuestion">Back to List</Link>
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
