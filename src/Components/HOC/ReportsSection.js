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
                                    <a href=""> Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/CommitteesHoc"> View Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/SetMilestoneHoc"> Set Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/ViewMilestoneHoc"> View Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href=""> Tasks<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/AssignTaskHoc"> Assign Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/AssignedTaskHoc"> All Assigned Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/SubmittedTaskHoc"> Submitted Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/RejectedTaskHoc"> Rejected Tasks<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li>
                                    <a href=" "> Meetings<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/CreateMeetingHoc"> Call Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/MeetingRecordsHoc"> Meeting Records<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/AvailableSlotHoc"> Available slot<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                
                                <li className={30}>
                                    <a href=" "> ReportGeneration<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/HOC/ReportCommitteeHoc"> Committee Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/HOC/ReportCMHoc"> Committee Members Report<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
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
