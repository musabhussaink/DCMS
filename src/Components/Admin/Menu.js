import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div id="sidebar" style={{ backgroundColor: '#CCCCB2' }}>
                    <div className="navbar-default sidebar" role="navigation" id="sideBar" >
                        <div className="sidebar-nav">
                            <ul className="nav" id="side-menu">
                                <li />
                                <li>
                                    <Link to="/Admin">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                <li>
                                    <a href=""> Tasks<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/AssignTask"> Assign Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/AssignedTask"> All Assigned Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href=""> Meeting<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/UpcomingMeetings"> View Upcoming Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/CreateMeeting"> Create Meeting<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/RecentMeetings"> View Recent Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={30}>
                                    <a href=""> Student<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/Student"> View Student<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/CreateStudent"> Add Student<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ExcelStudent"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href="">Members of Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/ViewCommitteeMembers"> View Committee Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/AddCommitteeMembers"> Add Committee Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={5}>
                                    <a href=""> Faculty Members<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/Faculty"> View Faculty Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/CreateFaculty"> Add Faculty Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ExcelFaculty"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={3}>
                                    <a href=""> Head of Department<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="/Admin/ViewHOD"> View Head of Department<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li>
                                        <li>
                                            <a href="/Admin/AddHOD"> Add Head of Department<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href=""> Head of Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/ViewHOC"> View Head of Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/AddHOC"> Add Head of Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/Admin/CreatePLO"> Add PLO<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={2}>
                                    <a href=""> Commitee<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Admin/ViewCommittees"> View Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/CreateCommittee"> Create Commitee<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ExcelCommittee"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/CommitteeFeedbackQuestions"> Feedback Questions<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={1}>
                                    <a href=""> Reports<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                
                                        <li>
                                            <Link to="/Admin/ReportCommittee">Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ReportHOD">Head of Department Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ReportHOC">Head of Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ReportFaculty">Faculty Member Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ReportCM">Committee Member Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/ExcelIndustry"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/IndustryQuestion"> Feedback Question<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/Industry"> View Reports History<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>

                            </ul>
                        </div>
                        {/* /.sidebar-collapse */}
                    </div>
                    {/* /.navbar-static-side */}
                </div>
            </div>
        )
    }
}
