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
                                    <Link to="/MOC">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                <li className={5}>
                                    <a href="#"> Committee<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/MOC/ViewCommeetiee"> View Committee<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href="#"> Meeting<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/MOC/AddMeeting"> View Upcoming Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/MOC/ViewMeeting"> View Recent Meetings<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"> Milestone<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/MOC/ViewMilestone"> View Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/MOC/CreateMilestone"> Add Milestone<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li>
                                    <a href="#"> Task <span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/MOC/ViewTask"> View Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/MOC/AddmoreTask"> Add Task<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li> */}
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                <li className={30}>
                                    <a href="#"> Time Table <span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/MOC/ViewTimeTable"> View TimeTable<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                     
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                                
                                <li className={3}>
                                    <a href="#"> Reviews<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="/MOC/HodReview"> HOD Reviews<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li>
                                        <li>
                                            <a href="/MOC/HocReview"> HOC Reviews<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></a>
                                        </li>
                                    </ul>
                                    {/* /.nav-second-level */}
                                </li>
                               
                              
                                    </ul>
                                    {/* /.nav-second-level */}
                             
                        </div>
                        {/* /.sidebar-collapse */}
                    </div>
                    {/* /.navbar-static-side */}
                </div>
            </div>


        )
    }
}
