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
                                    <Link to="/Faculty">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                {/* <li>
                                    <a href="#"> Committees<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Faculty/ViewCommittee"> View Committees<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    
                                </li> */}
                                <li>
                                    <a href="#"> FYP Management<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Faculty/ViewProjects"> View Projects<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"> Thesis Management<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Faculty/ViewThesis"> View Thesis<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
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
