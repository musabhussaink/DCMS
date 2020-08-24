import React, { Component } from 'react'
import Header from './Components/MOC/Header'
import Menu from './Components/MOC/Menu'
import Index from './Components/MOC/Index'
import AddMeeting from './Components/MOC/AddMeeting'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ViewMeeting from './Components/MOC/ViewMeeting'
import CreateMilestone from './Components/MOC/CreateMilestone'
import ViewMilestone from'./Components/MOC/ViewMilestone'
import MilestoneDetail from './Components/MOC/MilestoneDetail'
import ViewTask from './Components/MOC/ViewTask'
import AddmoreTask from './Components/MOC/AddmoreTask'
import TaskDetails from './Components/MOC/TaskDetails'
import AddTask from './Components/MOC/AddTask'
import ViewCommeetiee from './Components/MOC/ViewCommeetiee'
import CommeetieeDetails from './Components/MOC/CommeetieeDetails'
import ExcelCommeettiee from './Components/MOC/ExcelCommeettiee'
import EditMilestone from './Components/MOC/EditMilestone'
import ViewTimeTable from './Components/MOC/ViewTimeTable'
import HocReview from './Components/MOC/HocReview'
import HodReview from './Components/MOC/HodReview'


export default class MOCRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header />
          <Menu /> */}

                    <Route path="/MOC" render={() => { return (<Header />) }} />
                    <Route path="/MOC" render={() => { return (<Menu />) }} />
                    <Route path="/MOC" exact strict render={() => { return (<Index />) }} />

          {/*MOC index Route */}
          {/* <Route path="/" exact strict render={() => { return (<Index />) }} /> */}
          {/* <Route path="/MOC" exact strict render={() => { return (<Index />) }} /> */}

          {/* MOC Session Routes */}
          <Route path="/MOC/AddMeeting" exact strict render={
            () => {
              return (<AddMeeting />)
            }
          } />
          <Route path="/MOC/HocReview" exact strict render={
            () => {
              return (<HocReview />)
            }
          } />
          <Route path="/MOC/HodReview" exact strict render={
            () => {
              return (<HodReview />)
            }
          } />

          <Route path="/MOC/ViewMeeting" exact strict render={
            () => {
              return (<ViewMeeting />)
            }
          } />

          {/* MOC Course Routes */}
          <Route path="/MOC/ViewMilestone" exact strict render={
            () => {
              return (<ViewMilestone/>)
            }
          } />
          <Route path="/MOC/CreateMilestone" exact strict render={
            () => {
              return (<CreateMilestone />)
            }
          } />
          <Route path="/MOC/MilestoneDetail" exact strict render={
            () => {
              return (<MilestoneDetail/>)
            }
          } />
          <Route path="/MOC/EditMilestone" exact strict render={
            () => {
              return (<EditMilestone/>)
            }
          } />

          {/* MOC Section Routes */}
          <Route path="/MOC/ViewTask" exact strict render={
            () => {
              return (<ViewTask />)
            }
          } />
          <Route path="/MOC/AddmoreTask" exact strict render={
            () => {
              return (<AddmoreTask />)
            }
          } />
          <Route path="/MOC/TaskDetails" exact strict render={
            () => {
              return (<TaskDetails />)
            }
          } />
          <Route path="/MOC/AddTask" exact strict render={
            () => {
              return (<AddTask />)
            }
          } />

          {/* Time table routes*/}

          <Route path="/MOC/ViewTimeTable" exact strict render={
            ()=>{
              return (<ViewTimeTable/>)
            }
          }  />

          {/* Commeetiee Routes */}

          <Route path="/MOC/ViewCommeetiee" exact strict render={
            () => {
              return (<ViewCommeetiee />)
            }
          } />
          
          
          <Route path="/MOC/CommeetieeDetails" exact strict render={
            () => {
              return (<CommeetieeDetails />)
            }
          } />
    
          <Route path="/MOC/ExcelCommeettiee" exact strict render={
            () => {
              return (<ExcelCommeettiee />)
            }
          } />
          
         
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}