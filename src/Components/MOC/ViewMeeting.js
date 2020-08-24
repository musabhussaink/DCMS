import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ViewMeeting extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h3>Meetings</h3>
                            <table className="table table-bordered table-condensed table-striped">
                                <tbody><tr>
                                    <th>
                                        Meeting
              </th>
                                    <th>
                                        Start Date
              </th>
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            FA14
              </td>
                                        <td>
                                            06-Dec-14 12:36:19 PM
              </td>
                                        <td>
                                            <Link to="/MOC/DeleteSession/1" onClick={() => (window.confirm('Delete the item?'))}>Delete</Link>
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
