import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateCommittee extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Create Committee</h2>
                            <hr></hr>
                            <form action="/HOD/CreateCommittee"><input name="__RequestVerificationToken" type="hidden" defaultValue="9VoIdSnaplP2kJk8caDA2b19kWHDL5FZMPBNnUz4ZVSzNY-_C4Q_pZXVjyMjDp3OFtATglj0Lxb7vb1SILyaZMfQuz5DCse0Da26Y-8t5Cv_nPNZZYtO8CEUhhZuaIwz0" />    <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SemesterNo">Date</label>
                                    <div className="col-md-10">
                                        <input type="date" className="form-control text-box single-line"></input>
                                        {/* <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Committee name</label>
                                    <div className="col-md-10">
                                    <input type="text" className="form-control text-box single-line"></input>
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Head</label>
                                    <div className="col-md-10">
                                    {/* <input type="text" className="form-control text-box single-line"></input> */}
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Head
                                        <span class="caret"></span></button>
                                    </div>
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo" for="comment">Goal</label>
                                    <div className="col-md-10">
                                    <textarea class="form-control" rows="5" id="comment"></textarea>
                                    {/* <input type="input" className="form-control text-box single-line"></input> */}
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo"> Add Members</label>
                                    <div className="col-md-10">
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the Participants
                                        <span class="caret"></span></button>
                                    {/* <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Kamran Abbasi
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Rohan Ilyas
                                                </label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <label class="checkbox">
                                                    <input type="checkbox" value=""/>Musab Khatri
                                                </label>
                                            </a>
                                        </li>
                                    </ul>  */}
                                </div>
                                    {/* <input type="search" className="form-control text-box single-line"></input> */}
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Head of Committee</label>
                                    <div className="col-md-10">
                                    <input type="search" className="form-control text-box single-line"></input>
                                        {/* <input className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="SectionNo" name="SectionNo" type="text" defaultValue /> eg. A,B,C...
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" /> */}
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
                                <Link to="/HOD/ViewCommittees">Back to List</Link>
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
