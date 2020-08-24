import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewTask extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Tasks</h2>
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody>
                                <tr>
                                    <th>
                                        Task id
                                    </th>
                                    <th>
                                        Assigned To
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Due Date
                                    </th>
                                    <th>
                                        
                                    </th>
                                    
                                    <th />
                                </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            ROHAN AWAN
                                        </td>
                                        <td>
                                            Active
                                        </td>
                                        <td>
                                            28 Aug,2020
                                        </td>
                                        <td>
                                            <Link to="/HOC/AddTask">Add</Link>
                                        </td>
                                        <td>
                                            <Link to="/MOC/TaskDetails">Details</Link> |
                                            <Link to="/HOC/DeleteSection">Delete</Link>
                                        </td>
                                    </tr>
                                </tbody></table>
        Page 1 of 1
                        <div className="pagination-container"><ul className="pagination"><li className="active"><a>1</a></li></ul></div>
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
