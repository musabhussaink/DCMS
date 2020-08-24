import React, { Component } from 'react';

class ReportsSection extends Component {
    

    render() { 

        return (  
            <div>
                <div  id="page-wrapper" >
                    <div className="row">
                    <h1>Auto Generated Report of the Selected Entity</h1>

                        <div className="col">
                            <div className="item">
                                <h3>Chart #1</h3>
                                <img alt="Image not available" src={require('../../Assets/ReportChart.png')} style={{ height: 300, width: 500 }} />
                            </div>
                        </div>
                        <div className="col">
                        <div className="item">
                        <h3>Chart #2</h3>

                                <img alt="Image not available" src={require('../../Assets/ReportChart1.gif')} style={{ height: 300, width: 500 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        );
    }
}
export default ReportsSection;