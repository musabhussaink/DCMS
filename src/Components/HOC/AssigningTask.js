import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AssigningTask extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div id="page-wrapper">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Enter The Task</h2><hr></hr>
                            <textarea type="search" style={{width:'1000px', height:'100px'}}/> <hr></hr><br></br>
                        </div>
                        <label> Select the Deadline </label><br></br>
                            <input type="date"/><br></br><br></br>
                        <Link to="/HOC/AssignedTask"><button type="submit">Submit</button></Link>
                        {/* <input type="date"/> */}
                    </div>

                    </div>

                </div>
            </div>
        );
    }
}
 
export default AssigningTask;