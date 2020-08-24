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
                                    <Link to="/Student">Dashboard</Link><i className="fa fa-dashboard fa-fw" />
                                </li>
                                <li>
                                    <a href="#"> Upload Documents<span className="fa fa-chevron-right" style={{ float: 'right' }} /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Student/UploadScope"> Upload Scope Document<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/Student/UploadSRS"> Upload SRS Document<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                                        </li>
                                    </ul>
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
