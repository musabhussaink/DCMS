import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewCommittee extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Committees</h2>
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        Sr No
              </th>
                                    <th>
                                        CommitteeName
              </th>
                                    <th>
                                        Goal
              </th>
                                    
                                </tr>
                                    <tr>
                                        <td>
                                            1
              </td>
                                        <td>
                                            Committee1
              </td>
                                        <td>
                                            goal1
              </td>
                                        
                                    </tr>

                                </tbody></table>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
                            </div>
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
