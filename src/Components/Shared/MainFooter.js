import React, { Component } from 'react'

export default class MainFooter extends Component {
    render() {
        return (
            <div>
                <div className="container"></div><br></br>
                <div className="bottom" style={{ backgroundColor: '#2c3e50', color: 'white', height: '10%' }} id="myFooter">
                    <div className="container">
                        <div className="col-md-4">
                            <h3 />
                            <p>COMSATS Institue of Information Technology, Islamabad</p>
                        </div>
                        <div className="col-md-4">
                            <h3 />
                            <span style={{ color: 'white' }} className="fa fa-mobile dark" /> <p>0092-3085181004</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
