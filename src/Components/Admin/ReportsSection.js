import React, { Component } from 'react';

class ReportsSection extends Component {
    

    render() { 

        return (  
            <div>
                <div  id="page-wrapper" >
                    <div className="row">
                    <hr></hr><h1 style={{marginLeft:"150px" }}>Auto Generated Report of the Selected Entity</h1><hr>
                    </hr>
                    <table>
                        <th><div className="item">
                                <h3 style={{marginLeft:"250px" }}>Chart #1</h3><br></br><hr></hr>
                                <img alt="Image not available" src={require('../../Assets/ReportChart2.jpg')} style={{ height: 250, width: 500 }} />
                                <hr></hr>
                            </div></th>
                        <th>
                        <div className="item">
                                <h3 style={{marginLeft:"300px" }}>Chart #2</h3><br></br><hr></hr>
                                <img alt="Image not available" src={require('../../Assets/ReportChart1.gif')} style={{ height: 250, width: 500,marginLeft:"100px" }} />
                                <hr></hr>
                            </div>
                        </th>
                    </table>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        );
    }
}
export default ReportsSection;