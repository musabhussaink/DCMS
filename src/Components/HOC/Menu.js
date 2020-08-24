import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div id="sidebar" style={{ backgroundColor: 'CCCCB2' }}>
                    <div className="navbar-default sidebar" role="navigation" id="sideBar" >
                        <div className="sidebar-nav">
                            <ul className="nav" id="side-menu">
                                <li />
                                <li>
                                    <Link to="/HOC">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                <li>
                                    <a href=""> Tasks<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/AssignTask"> Assign Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/AssignedTask"> All Assigned Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/SubmittedTask"> Submitted Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/RejectedTask"> Rejected Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href=""> Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/Committees"> View Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/SetMilestone"> Set Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/ViewMilestone"> View Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href=" "> Meetings<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/CreateMeeting"> Call Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/MeetingRecords"> Meeting Records<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/AvailableSlot"> Available slot<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                
                                <li className={30}>
                                    <a href=" "> ReportGeneration<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/ReportCommittee"> Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/ReportCM"> Committee Members Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
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
