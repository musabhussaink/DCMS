import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewCommeetiee extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <link href="/Content/PagedList.css" rel="stylesheet" type="text/css" />
                            <br /><br />
                            <h2>View Committee</h2>
                            <br /><br /><br />
                            <table className="table table-striped table-condensed table-bordered">
                                <tbody><tr>
                                    <th>
                                        Sr.No
                                    </th>
                                    <th>
                                        <a href="/MOC/ViewCommeetiee  ?sortOrder=name_desc">Name</a>
                                    </th>
                                    <th>
                                        Member Of Commeetiee
                                    </th>
                                    <th>
                                        Role in Commeetiee
                                    </th>
                                    
                                </tr>
                                    <tr>
                                        <td>
                                            1.
                                        </td>
                                        <td>

                                            Rohan
                                        </td>
                                        <td>
                                            FYP Commeetiee
                                        </td>
                                        <td>
                                            Head of Commeetiee
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                        <td>
                                            2.
                                        </td>
                                        <td>

                                            Kamran
                                        </td>
                                        <td>
                                            Thesis Commeetiee
                                        </td>
                                        <td>
                                            Member of Commeetiee
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                        <td>
                                            3.
                                        </td>
                                        <td>

                                            Musab
                                        </td>
                                        <td>
                                            Evaluation Commeetiee
                                        </td>
                                        <td>
                                            Head of Commeetiee
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                        <td>
                                            4.
                                        </td>
                                        <td>

                                            Shahid 
                                        </td>
                                        <td>
                                            Thesis Commeetiee
                                        </td>
                                        <td>
                                            Head of Commeetiee
                                        </td>
                                       
                                    </tr>
                                </tbody></table>
                            <br />
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
