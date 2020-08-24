import React, { Component } from 'react';
import Index from './Components/Student/Index'
import Header from './Components/Student/Header'
import Menu from './Components/Student/Menu'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import UploadScope from './Components/Student/UploadScope'
import UploadSRS from './Components/Student/UploadSRS'



class StudentRouting extends Component {

    render() { 
        return (  
            <Router>
                <div>
                    <Route path="/Student" render={() => { return (<Header />) }} />
                    <Route path="/Student" render={() => { return (<Menu />) }} />
                    <Route path="/Student" exact strict render={() => { return (<Index />) }} />
                    <Route path="/Student/UploadScope" exact strict render={() => { return (<UploadScope />) }} />
                    <Route path="/Student/UploadSRS" exact strict render={() => { return (<UploadSRS />) }} />


                    
                </div>
            </Router>
        );
    }
}
export default StudentRouting;