import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CommeetieeDetails extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Details</h2>
                            <div>
                                <h4>Commeetiee</h4>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Name
                                    </dt>
                                    <dd>
                                        Kamran
                                    </dd>
                                    <dt>
                                        Contact#
                                    </dt>
                                    <dd>
                                    </dd>
                                    <dt>
                                        Email
                                    </dt>
                                   
                                </dl>
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
