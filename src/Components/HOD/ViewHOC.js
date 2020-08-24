import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewHOC extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <br />
                            <h3>Head of Committees</h3>
                            <br />
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Assigning Date</th>
                                        <th scope="col">Committee Name</th>
                                        <th scope="col">Committee Description</th>
                                        {/* <th scope="col">Assign</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Head of Committee</td>
                                        <td>20-08-2020</td>
                                        <td>FYP</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/Admin/DeletePLO" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditPLO" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Head of Committee</td>
                                        <td>20-08-2020</td>
                                        <td>Thesis</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/Admin/DeletePLO" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditPLO" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>Head of Committee</td>
                                        <td>20-08-2020</td>
                                        <td>Exams</td>
                                        <td>Description of Committee Goes here</td>
                                        <td><Link to="/Admin/DeletePLO" onClick={() => (window.confirm('Delete the item?'))}><button className="btn btn-primary">Delete</button></Link></td>
                                        <td><Link to="/Admin/EditPLO" onClick={() => (window.confirm('Edit the item?'))}><button className="btn btn-primary">Edit</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
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

