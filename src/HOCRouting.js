import React, { Component } from 'react'
import Header from './Components/HOC/Header'
import Menu from './Components/HOC/Menu'
import Footer from './Components/Shared/MainFooter'
import Index from './Components/HOC/Index'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ViewCommittee from './Components/HOC/ViewCommittee'
import EditCommittee from './Components/HOC/EditCommittee'
import SetMilestones from './Components/HOC/SetMilestones'
import ViewMilestones from './Components/HOC/ViewMilestones'
import DetailsMilestones from './Components/HOC/DetailsMilestone'
import EditMilestone from './Components/HOC/EditMilestone'
import CreateMeeting from './Components/HOC/CreateMeeting'
import UpcomingMeeting from './Components/HOC/UpcomingMeeting'
import AvailableSlot from './Components/HOC/AvailableSlots'
import AssignedTask from './Components/HOC/AssignedTask'
import AssignTask from './Components/HOC/AssignTask'
import RejectedTask from './Components/HOC/RejectedTask'
import SubmittedTask from './Components/HOC/SubmittedTask'
import ReportCM from './Components/HOC/ReportCM'
import ReportCommittee from './Components/HOC/ReportCommittee'
import ReportsSection from './Components/HOC/ReportsSection'
import AssigningTask from './Components/HOC/AssigningTask'


import FacultyIndex from './Components/Faculty/Index'

export default class HOCRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          {/* <Menu /> */}

          {/*HOC index Route */}
          {/* <Route path="/" exact strict render={() => { return (<Index />) }} /> */}
          <Route path="/HOC" render={() => { return (<Header />) }} />
          <Route path="/HOC" render={() => { return (<Menu />) }} />
          <Route path="/HOC" exact strict render={() => { return (<Index />) }} />


          
          
          {/* HOC Committees Routes */}
          <Route path="/HOC/Committees" exact strict render={
            () => {
              return (<ViewCommittee />)
            }
          } />
           <Route path="/HOC/EditCommittee" exact strict render={
            () => {
              return (<EditCommittee />)
            }
          } />
          <Route path="/HOC/SetMilestone" exact strict render={
            () => {
              return (<SetMilestones />)
            }
          } />
          <Route path="/HOC/ViewMilestone" exact strict render={
            () => {
              return (<ViewMilestones />)
            }
          } />
          <Route path="/HOC/EditMilestone" exact strict render={
            () => {
              return (<EditMilestone />)
            }
          } />
          <Route path="/HOC/DetailsMilestone" exact strict render={
            () => {
              return (<DetailsMilestones />)
            }
          } />

          {/* HOC Meetings Routes */}
          <Route path="/HOC/CreateMeeting" exact strict render={
            () => {
              return (<CreateMeeting />)
            }
          } />
          <Route path="/HOC/MeetingRecords" exact strict render={
            () => {
              return (<UpcomingMeeting />)
            }
          } />
          <Route path="/HOC/AvailableSlot" exact strict render={
            () => {
              return (<AvailableSlot />)
            }
          } />
          
          {/* HOC Task Routes */}
          <Route path="/HOC/AssignTask" exact strict render={
            () => {
              return (<AssignTask />)
            }
          } />

            {/* HOC Task Routes */}
            <Route path="/HOC/AssigningTask" exact strict render={
            () => {
              return (<AssigningTask />)
            }
          } />
          
          <Route path="/HOC/AssignedTask" exact strict render={
            () => {
              return (<AssignedTask />)
            }
          } />

          <Route path="/HOC/SubmittedTask" exact strict render={
            () => {
              return (<SubmittedTask />)
            }
          } />
          <Route path="/HOC/RejectedTask" exact strict render={
            () => {
              return (<RejectedTask />)
            }
          } />


          {/* HOC Reports Routes */}
          {/* <Route path="/HOC/CommitteeReport" exact strict render={
            () => {
              return (<ViewTask />)
            }

            
          } /> */}

<Route path="/HOC/ReportCM" exact strict render={
            () => {
              return (<ReportCM />)
            }
          } />


          <Route path="/HOC/ReportCommittee" exact strict render={
            () => {
              return (<ReportCommittee />)
            }
          } />
          <Route path="/HOC/ReportsSection" exact strict render={
            () => {
              return (<ReportsSection />)
            }
          } />
          


          {/*Faculty index Route */}
          {/* <Route path="/" exact strict render={() => { return (<FacultyIndex />) }} /> */}
          {/* <Route path="/Faculty" exact strict render={() => { return (<FacultyIndex />) }} /> */}
          
          
          
        </div>
      </Router>
    )
  }
}
