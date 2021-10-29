import React, { Component } from 'react'
// import Menu from './Menu';

export default class extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = 'js/Admin.js';
        script.async = 'true';
        document.body.appendChild(script);
    }
    windowOnload = () => {
        if (!window.location.hash) {
            window.location = window.location + '#';
            window.location.reload();
        }
    }
    render() {
        let load = true;
        if (load) {
            this.windowOnload();
        }
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                        <h2 style={{marginLeft:"400px"}}>Welcome Back ! [Head of Department] !</h2>
                            <br></br><hr></hr>
                            <div>
                            <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Total Number Of Committee Members</th>
                        <th scope="col">Total Number Of Faculty Members</th>
                        <th scope="col">Total Number Of HOC's</th>
                        <th scope="col">Total Number Of Faculty Members</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>20</td>
                        <td>30</td>
                        <td>40</td>
                        <td>50</td>
                        </tr>
                    </tbody>
                    </table>
                            </div>
                            <div id="container" style={{ width: '100%', height: 400 }}>

                            </div>
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
            </div>
        )
    }
}