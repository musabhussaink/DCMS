import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainHeader extends Component {
    render() {
        return (
            <div>
                <header className="top" style={{ backgroundColor: '#222', minHeight: 143 }}>
                    <div className="col-md-12" style={{ backgroundColor: '#222', height: 20 }}>
                    </div>
                    <div className="container">
                        <img src={require('../../Assets/comsats-logo.png')} alt="Image not available" style={{ float: 'left', marginBottom: 20 }} />
                        <a href="" className="navbar-brand pull-left" style={{ color: 'white', fontWeight: 'bold', fontSize: '2em', marginTop: 45 }}>
                            Departmental Committee Management System </a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="glyphicon glyphicon-align-justify" />
                        </button>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav" style={{ float: 'right' }} id="topLink">
                                <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                                <li><Link to="/AboutUs" style={{ color: 'white' }}>About</Link></li>
                                <li><Link to="/" style={{ color: 'white' }}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}
