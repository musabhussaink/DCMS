import React, { Component } from 'react'
import AdminIndex from './Components/Admin/Index'
import AssignTask from './Components/Admin/AssignTask'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AssignedTask from './Components/Admin/AssignedTask'
import ViewCommitteeMembers from './Components/Admin/ViewCommitteeMembers'
import AddCommitteeMembers from './Components/Admin/AddCommitteeMembers'
import CourseDetail from './Components/Admin/CourseDetail'
import EditCourse from './Components/Admin/EditCourse'
import UpcomingMeetings from './Components/Admin/UpcomingMeetings'
import RecentMeetings from './Components/Admin/RecentMeetings'
import CreateMeeting from './Components/Admin/CreateMeeting'
import SectionDetails from './Components/Admin/SectionDetails'
import SectionCourse from './Components/Admin/SectionCourse'
import ViewStudents from './Components/Admin/ViewStudents'
import AddStudents from './Components/Admin/AddStudents'
import ExcelStudents from './Components/Admin/ExcelStudents'
import EditStudent from './Components/Admin/EditStudent'
import StudentDetails from './Components/Admin/StudentDetails'
import ViewFaculty from './Components/Admin/ViewFaculty'
import AssignCourse from './Components/Admin/AssignCourse'
import AssignCourseFaculty from './Components/Admin/AssignCourseFaculty'
import AddFaculty from './Components/Admin/AddFaculty'
import FacultyDetails from './Components/Admin/FacultyDetails'
import EditFaculty from './Components/Admin/EditFaculty'
import ExcelFaculty from './Components/Admin/ExcelFaculty'
import ViewHOD from './Components/Admin/ViewHOD'
import AddHOD from './Components/Admin/AddHOD'
import AssignMentorCourse from './Components/Admin/AssignMentorCourse'
import MentorDetails from './Components/Admin/MentorDetails'
import ViewCommittees from './Components/Admin/ViewCommittees'
import ExcelCommittee from './Components/Admin/ExcelCommittee'
import CommitteeFeedbackQuestions from './Components/Admin/CommitteeFeedbackQuestions'
import EditAlumni from './Components/Admin/EditAlumni'
import AlumniDetails from './Components/Admin/AlumniDetails'
import AddAlumniQuestion from './Components/Admin/AddAlumniQuestion'
import EditAlumniQuestion from './Components/Admin/EditAlumniQuestion'
import AddIndustry from './Components/Admin/AddIndustry'
import ExcelIndustry from './Components/Admin/ExcelIndustry'
import IndustryFeedbackQuestion from './Components/Admin/IndustryFeedbackQuestion'
import EditIndustry from './Components/Admin/EditIndustry'
import IndustryDetails from './Components/Admin/IndustryDetails'
import EditIndustryQuestion from './Components/Admin/EditIndustryQuestion'
import AddIndustryQuestion from './AddIndustryQuestion'
import ViewIndustry from './Components/Admin/ViewIndustry'
import ViewHOC from './Components/Admin/ViewHOC'
import AddHOC from './Components/Admin/AddHOC'
import AddPLO from './Components/Admin/AddPLO'
import EditPLO from './Components/Admin/EditPLO'
import AdminMenu from './Components/Admin/Menu'
import CreateCommittee from './Components/Admin/CreateCommittee'
import Header from './Components/Admin/Header'
// import Footer from './Components/Shared/MainFooter'
// import AdminRoutes from './Components/Admin/AdminRoutes'
import ReportCommittee from './Components/Admin/ReportCommittee'
import ReportCM from './Components/Admin/ReportCM'
import ReportHOD from './Components/Admin/ReportHOD'
import ReportHOC from './Components/Admin/ReportHOC'
import ReportFaculty from './Components/Admin/ReportFaculty' 
import ReportsSection from './Components/Admin/ReportsSection'

export default class AdminRouting extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/Admin" render={() => { return (<Header />) }} />


          {/*Admin index Route */}
          <Route path="/Admin" render={() => { return (<AdminMenu />) }} />
          <Route path="/Admin" exact strict render={() => { return (<AdminIndex />) }} />

          
        {/* Reports of Admin section */}

        <Route path="/Admin/ReportCommittee" exact strict render={() => { return (<ReportCommittee />) }} />
        <Route path="/Admin/ReportFaculty" exact strict render={() => { return (<ReportFaculty />) }} />
        <Route path="/Admin/ReportHOD" exact strict render={() => { return (<ReportHOD />) }} />
        <Route path="/Admin/ReportHOC" exact strict render={() => { return (<ReportHOC/>) }} />
        <Route path="/Admin/ReportCM" exact strict render={() => { return (<ReportCommittee/>) }} />

        <Route path="/Admin/ReportsSection" exact strict render={() => { return (<ReportsSection/>) }} />

        

   





          {/* Admin Session Routes */}
          <Route path="/Admin/AssignTask" exact strict render={
            () => {
              return (<AssignTask />)
            }
          } />
          <Route path="/Admin/AssignedTask" exact strict render={
            () => {
              return (<AssignedTask />)
            }
          } />

          {/* Admin Course Routes */}
          <Route path="/Admin/ViewCommitteeMembers" exact strict render={
            () => {
              return (<ViewCommitteeMembers />)
            }
          } />
          <Route path="/Admin/AddCommitteeMembers" exact strict render={
            () => {
              return (<AddCommitteeMembers />)
            }
          } />
          <Route path="/Admin/DetailsCourse" exact strict render={
            () => {
              return (<CourseDetail />)
            }
          } />
          <Route path="/Admin/EditCourse" exact strict render={
            () => {
              return (<EditCourse />)
            }
          } />

          {/* Admin Section Routes */}
          <Route path="/Admin/UpcomingMeetings" exact strict render={
            () => {
              return (<UpcomingMeetings />)
            }
          } />
          <Route path="/Admin/CreateMeeting" exact strict render={
            () => {
              return (<CreateMeeting />)
            }
          } />
          <Route path="/Admin/RecentMeetings" exact strict render={
            () => {
              return (<RecentMeetings />)
            }
          } />
          <Route path="/Admin/DetailsSection" exact strict render={
            () => {
              return (<SectionDetails />)
            }
          } />
          <Route path="/Admin/SectionCourse" exact strict render={
            () => {
              return (<SectionCourse />)
            }
          } />

          {/* Admin Student Routes */}
          <Route path="/Admin/Student" exact strict render={
            () => {
              return (<ViewStudents />)
            }
          } />
          <Route path="/Admin/Student/AssignCourse" exact strict render={
            () => {
              return (<AssignCourse />)
            }
          } />
          <Route path="/Admin/CreateStudent" exact strict render={
            () => {
              return (<AddStudents />)
            }
          } />
          <Route path="/Admin/DetailsStudent" exact strict render={
            () => {
              return (<StudentDetails />)
            }
          } />
          <Route path="/Admin/EditStudent" exact strict render={
            () => {
              return (<EditStudent />)
            }
          } />
          <Route path="/Admin/ExcelStudent" exact strict render={
            () => {
              return (<ExcelStudents />)
            }
          } />

          {/* Admin Faculty Routes */}
          <Route path="/Admin/Faculty" exact strict render={
            () => {
              return (<ViewFaculty />)
            }
          } />
          <Route path="/Admin/Faculty/AssignCourseFaculty" exact strict render={
            () => {
              return (<AssignCourseFaculty />)
            }
          } />
          <Route path="/Admin/CreateFaculty" exact strict render={
            () => {
              return (<AddFaculty />)
            }
          } />
          <Route path="/Admin/DetailsFaculty" exact strict render={
            () => {
              return (<FacultyDetails />)
            }
          } />
          <Route path="/Admin/EditFaculty" exact strict render={
            () => {
              return (<EditFaculty />)
            }
          } />
          <Route path="/Admin/ExcelFaculty" exact strict render={
            () => {
              return (<ExcelFaculty />)
            }
          } />

          {/* Admin Mentor Routes */}
          <Route path="/Admin/ViewHOD" exact strict render={
            () => {
              return (<ViewHOD />)
            }
          } />
          <Route path="/Admin/AddHOD" exact strict render={
            () => {
              return (<AddHOD />)
            }
          } />
          
          <Route path="/Admin/MentorCourse" exact strict render={
            () => {
              return (<AssignMentorCourse />)
            }
          } />
          
          <Route path="/Admin/MentorDetails" exact strict render={
            () => {
              return (<MentorDetails />)
            }
          } />

          {/* Admin Alumni Routes */}

          <Route path="/Admin/ViewCommittees" exact strict render={
            () => {
              return (<ViewCommittees />)
            }
          } />
          <Route path="/Admin/CreateCommittee" exact strict render={
            () => {
              return (<CreateCommittee />)
            }
          } />
          <Route path="/Admin/ExcelCommittee" exact strict render={
            () => {
              return (<ExcelCommittee />)
            }
          } />
          <Route path="/Admin/CommitteeFeedbackQuestions" exact strict render={
            () => {
              return (<CommitteeFeedbackQuestions />)
            }
          } />
          <Route path="/Admin/EditAlumni" exact strict render={
            () => {
              return (<EditAlumni />)
            }
          } />
          <Route path="/Admin/DetailsAlumni" exact strict render={
            () => {
              return (<AlumniDetails />)
            }
          } />
          <Route path="/Admin/AddAlumniQuestion" exact strict render={
            () => {
              return (<AddAlumniQuestion />)
            }
          } />
          <Route path="/Admin/EditAlumniQuestion" exact strict render={
            () => {
              return (<EditAlumniQuestion />)
            }
          } />

          {/* Admin Industry Routes .................*/}
          <Route path="/Admin/Industry" exact strict render={
            () => {
              return (<ViewIndustry />)
            }
          } />
          <Route path="/Admin/CreateIndustry" exact strict render={
            () => {
              return (<AddIndustry />)
            }
          } />
          <Route path="/Admin/ExcelIndustry" exact strict render={
            () => {
              return (<ExcelIndustry />)
            }
          } />
          <Route path="/Admin/IndustryQuestion" exact strict render={
            () => {
              return (<IndustryFeedbackQuestion />)
            }
          } />
          <Route path="/Admin/EditIndustry" exact strict render={
            () => {
              return (<EditIndustry />)
            }
          } />
          <Route path="/Admin/DetailsIndustry" exact strict render={
            () => {
              return (<IndustryDetails />)
            }
          } />
          <Route path="/Admin/AddIndustryQuestion" exact strict render={
            () => {
              return (<AddIndustryQuestion />)
            }
          } />
          <Route path="/Admin/EditIndustryQuestion" exact strict render={
            () => {
              return (<EditIndustryQuestion />)
            }
          } />

          {/* Admin PLOs Routes */}
          <Route path="/Admin/ViewHOC" exact strict render={
            () => {
              return (<ViewHOC />)
            }
          } />
          <Route path="/Admin/AddHOC" exact strict render={
            () => {
              return (<AddHOC />)
            }
          } />
          
          <Route path="/Admin/CreatePLO" exact strict render={
            () => {
              return (<AddPLO />)
            }
          } />
          <Route path="/Admin/EditPLO" exact strict render={
            () => {
              return (<EditPLO />)
            }
          } />
        </div>
      </Router>
    )
  }
}