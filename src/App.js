import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Footer from './Components/Shared/MainFooter'
import MainHeader from './Components/Shared/MainHeader'
import Login from './Components/Shared/Login'
import AdminRoutes from './AdminRouting'
import HODRouting from './HODRouting'
import FacultyRouting from './FacultyRouting'
import HOCRouting from './HOCRouting'
import StudentRouting from './StudentRouting'
import MOCRouting from './MOCRouting'
import AboutUs from './Components/Shared/AboutUs'

export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
        <Route path="/" exact strict render={() => { return (<MainHeader />) }} />
        <Route path="/" exact strict render={() => { return (<Login />) }} />
        <Route path="/AboutUs" render={() => { return (<AboutUs />) }} />

        

        <Switch>
        <Route path="/Admin" exact strict render={() => { return (<AdminRoutes />) }} />
        </Switch>

        <Switch>
        <Route path="/HOD" exact strict render={() => { return (<HODRouting/>) }} />
        </Switch>

          {/* <AdminRoutes></AdminRoutes> */}
          {/* <HODRouting></HODRouting> */}
          <FacultyRouting></FacultyRouting>
          <HOCRouting></HOCRouting>
          <StudentRouting></StudentRouting>
          <MOCRouting></MOCRouting>
          
          <Footer/>
        </div>
      </Router>
    )
  }
}