import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateMeeting extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Call Meeting</h2>
                            <form action="/Admin/CreateSection" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="9VoIdSnaplP2kJk8caDA2b19kWHDL5FZMPBNnUz4ZVSzNY-_C4Q_pZXVjyMjDp3OFtATglj0Lxb7vb1SILyaZMfQuz5DCse0Da26Y-8t5Cv_nPNZZYtO8CEUhhZuaIwz0" />    <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SemesterNo">Date</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-number="The field Semester No must be a number." data-val-range="The field Semester No must be between 1 and 8." data-val-range-max={8} data-val-range-min={1} data-val-required="The Semester No field is required." id="date" name="date" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Time</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="time" name="time" type="time" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Duration</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="duration" name="duration" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Agenda</label>
                                    <div className="col-md-10">
                                        <textarea id="agenda" name="agenda" placeholder="Write something.."></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Venue</label>
                                    <div className="col-md-10">
                                        <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="duration" name="duration" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Participants Invited</label>
                                    <div className="col-md-10">
                                    <input type="button" defaultValue="Select Participant" className="btn btn-default" />
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
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
                                <Link to="/HOC/MeetingRecords">Back to List</Link>
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
