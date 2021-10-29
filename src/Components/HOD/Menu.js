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
                                    <Link to="/HOD">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                <li className={2}>
                                    <a href=""> Commitee<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/ViewCommittees"> View Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/CreateCommittee"> Create Commitee<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/HOD/ExcelCommittee"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                        {/* <li>
                                            <Link to="/HOD/CommitteeFeedbackQuestions"> Feedback Questions<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href=""> Tasks<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/AssignTask"> Assign Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/AssignedTask"> All Assigned Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href=""> Meeting<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/UpcomingMeetings"> View Upcoming Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/CreateMeeting"> Create Meeting<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/RecentMeetings"> View Recent Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={30}>
                                    <a href=""> Student<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/Student"> View Student<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/CreateStudent"> Add Student<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/HOD/ExcelStudent"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>  */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href="">Members of Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/ViewCommitteeMembers"> View Committee Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/AddCommitteeMembers"> Add Committee Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={5}>
                                    <a href=""> Faculty Members<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/Faculty"> View Faculty Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/CreateFaculty"> Add Faculty Members<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/HOD/ExcelFaculty"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={3}>
                                    <a href=""> Head of Department<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="/HOD/ViewHOD"> View Head of Department<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li>
                                        {/* <li>
                                            <a href="/HOD/AddHOD"> Add Head of Department<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href=""> Head of Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOD/ViewHOC"> View Head of Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/AddHOC"> Add Head of Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/HOD/CreatePLO"> Add PLO<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                
                                <li className={1}>
                                    <a href=""> Reports<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                
                                        <li>
                                            <Link to="/HOD/ReportCommittee">Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/ReportHOC">Head of Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/ReportFaculty">Faculty Member Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/ReportCM">Committee Member Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/ExcelIndustry"> Import Excel Sheet<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/IndustryQuestion"> Feedback Question<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOD/Industry"> View Reports History<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
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
