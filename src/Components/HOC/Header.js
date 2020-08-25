import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {

    constructor (props) {
        super(props);
        this.details = this.details.bind(this);
    }

    details() {
        var ele = document.getElementById("Dialog-Box");
        if (ele.style.display == 'none') {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }
    }

    render() {
        return (
            <div>
                <header className="top" style={{ backgroundColor: '#2c3e50' }}>
                    <div className="container">
                        <a href="/HOC" className="navbar-brand" style={{ color: 'white', marginLeft: 22 }}>
                            Departmental Committee Management System</a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="glyphicon glyphicon-align-justify" />
                        </button>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav" style={{ float: 'right' }} id="topLink">
                                <li className="active"><Link to="/HOC">Home</Link></li>
                                <li><a href="/HOC">About</a></li>
                                <li><a href="/HOC">Notification</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="infoImg" style={{ float: 'right' }}>
                        <img onClick={this.details} src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAA3NCSVQICAjb4U/gAAACOklEQVRIie2WX2sTQRTFz53Z3ex2W5MUFYoUtChENOCD9FHQfoJ+Q7+Ar75YEVtEWhRrsNgqKFKIJq3Nn4buutm514cotulmtsb2Qeh5HGbOb+bembNLD1cEZyl1pu7ngJPIOflUpUAEACJgPlWA1jAGn7709joJgOmid3V2cjB4CgDXxfuP+89e7SpAKQLALLy6c//uxZs3pvr9fwM4Dt68a79425ooHOqWJgBP13bjH+bOrVKa2hxsTSZCq91fWd874v5bEwW1sr7XavcHjRkHoBVqm+3AGzkn8FRts62tN9F6AoXtRqRG71ARbTciGhsAIE4YlgoQ4iTnwloBgmLoyOgwFEExdGBNSxuABXOzoTEjDYyRudmQxwcwqpWSAJmHEIEA1UrJ/qptABE4mhYXZqKEzdF9GpYo4cWFGUeTpYYAKPeDoxV6B2Z5rfn5a+RoApAauTYT3Ju/PDmhTV4o5QMAEMHRiGJudRIA5aIX+Co12aUbUn4WEYEILPB9dSXwAbCA5U+yjg/QGlqhs582d+NWN+kdmCRhAK5LYeCULriXpv3psssM5pGkbIBSEMHGVqf2odvupVqTIhx+0SJggWEJPHX7+lS1Ui54lJneGT1wNOrN+PHyN8NwNdmzTASGpZ/Kg/ns9B6+pkqh3ogePakrIs/Jccev/lNQUEurOxtbXa3zAFpj6eVO6Otc6yGFvn7++vvxTgwDjEH3IP1b94EEiGMztDbjJVvyOV/H1v7//0XngFz9BH8G8F3led9qAAAAAElFTkSuQmCC" style={{ "pointerEvents": "all" }} />
                    </div>
                </header>

                <div id="Dialog-Box" style={{ display: 'none' }}>
                    <div style={{ margin: 20 }}>
                        <img src="/Content/pic.png" />
                        <div style={{ display: 'inline-block' }}>
                            <p style={{ fontSize: 20, display: '-webkit-inline-box' }}> HOC</p>
                            <p>hoc@hoc.com</p>
                        </div>
                        <div style={{ marginTop: 32 }}>
                            <a className="btn btn-info" href="/HOC" style={{ float: 'left' }}>Change Password</a>
                            <a className="btn btn-info" href="/" style={{ float: 'right' }}>Logout</a>
                        </div>
                    </div>
                </div>



            </div>

        )
    }
}
