import React, { Component } from 'react'
import Header from './Components/Faculty/Header'
import Menu from './Components/Faculty/Menu'
import Footer from './Components/Faculty/Footer'
import Index from './Components/Faculty/Index'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ViewCommittee from './Components/Faculty/ViewCommittee'
import ViewProjects from './Components/Faculty/ViewProjects'
import ViewThesis from './Components/Faculty/ViewThesis'

export default class FacultyRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header />
          <Menu /> */}

          {/*Faculty index Route */}
          {/* <Route path="/" exact strict render={() => { return (<Index />) }} /> */}
          <Route path="/Faculty" render={() => { return (<Header />) }} />
          <Route path="/Faculty" render={() => { return (<Menu />) }} />
          <Route path="/Faculty" exact strict render={() => { return (<Index />) }} />
          
          {/* Faculty Committees Routes */}
          <Route path="/Faculty/ViewCommittee" exact strict render={
            () => {
              return (<ViewCommittee />)
            }
          } />
          
           {/* Faculty FYP Routes */}
          <Route path="/Faculty/ViewProjects" exact strict render={
            () => {
              return (<ViewProjects />)
            }
          } />

          {/* Faculty Thesis Routes */}
          <Route path="/Faculty/ViewThesis" exact strict render={
            () => {
              return (<ViewThesis />)
            }
          } />
          

          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}
