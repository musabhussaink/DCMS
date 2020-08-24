import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddAlumniQuestion extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add Question</h3>
                            <form action="/Admin/AddAlumniQuestion" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="7pRk1fl9BFxzcaKYyYt25GmYdlW3RVi0sjNKXPnrot3ZLT-Z4L1KliiFaPNPaUPWYXhMagrCjHAkmDIddnxCP9ygGuIJ285Ncz1glvsVjTEdPans1BOr9yUkg47vaHqw0" />    <div className="form-horizontal">
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
                                        <input type="submit" defaultValue="Create" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <Link to="/Admin/AlumniQuestion">Back to Alumni questions</Link>
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
