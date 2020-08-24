import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="bottom" style={{ backgroundColor: '#2c3e50', color: 'white', marginTop: '-20px', height: '10%' }} id="myFooter">
                    <div className="container">
                        <div className="col-md-4">
                            <h3 />
                            <p>COMSATS Institue of Information Technology, Islamabad</p>
                        </div>
                        <div className="col-md-4">
                            <h3 />
                            <span style={{ color: 'white' }} className="fa fa-mobile dark" /> <p>0092-51-9247000-9247002</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
