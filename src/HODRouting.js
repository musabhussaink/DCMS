import React, { Component } from 'react'
import AssignTask from './Components/HOD/AssignTask'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AssignedTask from './Components/HOD/AssignedTask'
import ViewCommitteeMembers from './Components/HOD/ViewCommitteeMembers'
import AddCommitteeMembers from './Components/HOD/AddCommitteeMembers'
import CourseDetail from './Components/HOD/CourseDetail'
import EditCourse from './Components/HOD/EditCourse'
import UpcomingMeetings from './Components/HOD/UpcomingMeetings'
import RecentMeetings from './Components/HOD/RecentMeetings'
import CreateMeeting from './Components/HOD/CreateMeeting'
import SectionDetails from './Components/HOD/SectionDetails'
import SectionCourse from './Components/HOD/SectionCourse'
import ViewStudents from './Components/HOD/ViewStudents'
import AddStudents from './Components/HOD/AddStudents'
import ExcelStudents from './Components/HOD/ExcelStudents'
import EditStudent from './Components/HOD/EditStudent'
import StudentDetails from './Components/HOD/StudentDetails'
import ViewFaculty from './Components/HOD/ViewFaculty'
import AssignCourse from './Components/HOD/AssignCourse'
import AssignCourseFaculty from './Components/HOD/AssignCourseFaculty'
import AddFaculty from './Components/HOD/AddFaculty'
import FacultyDetails from './Components/HOD/FacultyDetails'
import EditFaculty from './Components/HOD/EditFaculty'
import ExcelFaculty from './Components/HOD/ExcelFaculty'
import ViewHOD from './Components/HOD/ViewHOD'
import AddHOD from './Components/HOD/AddHOD'
import AssignMentorCourse from './Components/HOD/AssignMentorCourse'
import MentorDetails from './Components/HOD/MentorDetails'
import ViewCommittees from './Components/HOD/ViewCommittees'
import ExcelCommittee from './Components/HOD/ExcelCommittee'
import CommitteeFeedbackQuestions from './Components/HOD/CommitteeFeedbackQuestions'
import EditAlumni from './Components/HOD/EditAlumni'
import AlumniDetails from './Components/HOD/AlumniDetails'
import AddAlumniQuestion from './Components/HOD/AddAlumniQuestion'
import EditAlumniQuestion from './Components/HOD/EditAlumniQuestion'
import AddIndustry from './Components/HOD/AddIndustry'
import ExcelIndustry from './Components/HOD/ExcelIndustry'
import IndustryFeedbackQuestion from './Components/HOD/IndustryFeedbackQuestion'
import EditIndustry from './Components/HOD/EditIndustry'
import IndustryDetails from './Components/HOD/IndustryDetails'
import EditIndustryQuestion from './Components/HOD/EditIndustryQuestion'
import AddIndustryQuestion from './AddIndustryQuestion'
import ViewIndustry from './Components/HOD/ViewIndustry'
import ViewHOC from './Components/HOD/ViewHOC'
import AddHOC from './Components/HOD/AddHOC'
import AddPLO from './Components/HOD/AddPLO'
import EditPLO from './Components/HOD/EditPLO'
import HODMenu from './Components/HOD/Menu'
import CreateCommittee from './Components/HOD/CreateCommittee'
import Header from './Components/HOD/Header'
// import Footer from './Components/Shared/MainFooter'
// import HODRoutes from './Components/HOD/HODRoutes'
import ReportCommittee from './Components/HOD/ReportCommittee'
import ReportCM from './Components/HOD/ReportCM'
import ReportHOD from './Components/HOD/ReportHOD'
import ReportHOC from './Components/HOD/ReportHOC'
import ReportFaculty from './Components/HOD/ReportFaculty' 
import ReportsSection from './Components/HOD/ReportsSection'
import HODIndex from './Components/HOD/Index'

export default class HODRouting extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/HOD" render={() => { return (<Header />) }} />


          {/*HOD index Route */}
          <Route path="/HOD" render={() => { return (<HODMenu />) }} />
          <Route path="/HOD" exact strict render={() => { return (<HODIndex />) }} />

          
        {/* Reports of HOD section */}

        <Route path="/HOD/ReportCommittee" exact strict render={() => { return (<ReportCommittee />) }} />
        <Route path="/HOD/ReportFaculty" exact strict render={() => { return (<ReportFaculty />) }} />
        <Route path="/HOD/ReportHOD" exact strict render={() => { return (<ReportHOD />) }} />
        <Route path="/HOD/ReportHOC" exact strict render={() => { return (<ReportHOC/>) }} />
        <Route path="/HOD/ReportCM" exact strict render={() => { return (<ReportCM/>) }} />

        <Route path="/HOD/ReportsSection" exact strict render={() => { return (<ReportsSection/>) }} />

        

   





          {/* HOD Session Routes */}
          <Route path="/HOD/AssignTask" exact strict render={
            () => {
              return (<AssignTask />)
            }
          } />
          <Route path="/HOD/AssignedTask" exact strict render={
            () => {
              return (<AssignedTask />)
            }
          } />

          {/* HOD Course Routes */}
          <Route path="/HOD/ViewCommitteeMembers" exact strict render={
            () => {
              return (<ViewCommitteeMembers />)
            }
          } />
          <Route path="/HOD/AddCommitteeMembers" exact strict render={
            () => {
              return (<AddCommitteeMembers />)
            }
          } />
          <Route path="/HOD/DetailsCourse" exact strict render={
            () => {
              return (<CourseDetail />)
            }
          } />
          <Route path="/HOD/EditCourse" exact strict render={
            () => {
              return (<EditCourse />)
            }
          } />

          {/* HOD Section Routes */}
          <Route path="/HOD/UpcomingMeetings" exact strict render={
            () => {
              return (<UpcomingMeetings />)
            }
          } />
          <Route path="/HOD/CreateMeeting" exact strict render={
            () => {
              return (<CreateMeeting />)
            }
          } />
          <Route path="/HOD/RecentMeetings" exact strict render={
            () => {
              return (<RecentMeetings />)
            }
          } />
          <Route path="/HOD/DetailsSection" exact strict render={
            () => {
              return (<SectionDetails />)
            }
          } />
          <Route path="/HOD/SectionCourse" exact strict render={
            () => {
              return (<SectionCourse />)
            }
          } />

          {/* HOD Student Routes */}
          <Route path="/HOD/Student" exact strict render={
            () => {
              return (<ViewStudents />)
            }
          } />
          <Route path="/HOD/Student/AssignCourse" exact strict render={
            () => {
              return (<AssignCourse />)
            }
          } />
          <Route path="/HOD/CreateStudent" exact strict render={
            () => {
              return (<AddStudents />)
            }
          } />
          <Route path="/HOD/DetailsStudent" exact strict render={
            () => {
              return (<StudentDetails />)
            }
          } />
          <Route path="/HOD/EditStudent" exact strict render={
            () => {
              return (<EditStudent />)
            }
          } />
          <Route path="/HOD/ExcelStudent" exact strict render={
            () => {
              return (<ExcelStudents />)
            }
          } />

          {/* HOD Faculty Routes */}
          <Route path="/HOD/Faculty" exact strict render={
            () => {
              return (<ViewFaculty />)
            }
          } />
          <Route path="/HOD/Faculty/AssignCourseFaculty" exact strict render={
            () => {
              return (<AssignCourseFaculty />)
            }
          } />
          <Route path="/HOD/CreateFaculty" exact strict render={
            () => {
              return (<AddFaculty />)
            }
          } />
          <Route path="/HOD/DetailsFaculty" exact strict render={
            () => {
              return (<FacultyDetails />)
            }
          } />
          <Route path="/HOD/EditFaculty" exact strict render={
            () => {
              return (<EditFaculty />)
            }
          } />
          <Route path="/HOD/ExcelFaculty" exact strict render={
            () => {
              return (<ExcelFaculty />)
            }
          } />

          {/* HOD Mentor Routes */}
          <Route path="/HOD/ViewHOD" exact strict render={
            () => {
              return (<ViewHOD />)
            }
          } />
          <Route path="/HOD/AddHOD" exact strict render={
            () => {
              return (<AddHOD />)
            }
          } />
          
          <Route path="/HOD/MentorCourse" exact strict render={
            () => {
              return (<AssignMentorCourse />)
            }
          } />
          
          <Route path="/HOD/MentorDetails" exact strict render={
            () => {
              return (<MentorDetails />)
            }
          } />

          {/* HOD Alumni Routes */}

          <Route path="/HOD/ViewCommittees" exact strict render={
            () => {
              return (<ViewCommittees />)
            }
          } />
          <Route path="/HOD/CreateCommittee" exact strict render={
            () => {
              return (<CreateCommittee />)
            }
          } />
          <Route path="/HOD/ExcelCommittee" exact strict render={
            () => {
              return (<ExcelCommittee />)
            }
          } />
          <Route path="/HOD/CommitteeFeedbackQuestions" exact strict render={
            () => {
              return (<CommitteeFeedbackQuestions />)
            }
          } />
          <Route path="/HOD/EditAlumni" exact strict render={
            () => {
              return (<EditAlumni />)
            }
          } />
          <Route path="/HOD/DetailsAlumni" exact strict render={
            () => {
              return (<AlumniDetails />)
            }
          } />
          <Route path="/HOD/AddAlumniQuestion" exact strict render={
            () => {
              return (<AddAlumniQuestion />)
            }
          } />
          <Route path="/HOD/EditAlumniQuestion" exact strict render={
            () => {
              return (<EditAlumniQuestion />)
            }
          } />

          {/* HOD Industry Routes .................*/}
          <Route path="/HOD/Industry" exact strict render={
            () => {
              return (<ViewIndustry />)
            }
          } />
          <Route path="/HOD/CreateIndustry" exact strict render={
            () => {
              return (<AddIndustry />)
            }
          } />
          <Route path="/HOD/ExcelIndustry" exact strict render={
            () => {
              return (<ExcelIndustry />)
            }
          } />
          <Route path="/HOD/IndustryQuestion" exact strict render={
            () => {
              return (<IndustryFeedbackQuestion />)
            }
          } />
          <Route path="/HOD/EditIndustry" exact strict render={
            () => {
              return (<EditIndustry />)
            }
          } />
          <Route path="/HOD/DetailsIndustry" exact strict render={
            () => {
              return (<IndustryDetails />)
            }
          } />
          <Route path="/HOD/AddIndustryQuestion" exact strict render={
            () => {
              return (<AddIndustryQuestion />)
            }
          } />
          <Route path="/HOD/EditIndustryQuestion" exact strict render={
            () => {
              return (<EditIndustryQuestion />)
            }
          } />

          {/* HOD PLOs Routes */}
          <Route path="/HOD/ViewHOC" exact strict render={
            () => {
              return (<ViewHOC />)
            }
          } />
          <Route path="/HOD/AddHOC" exact strict render={
            () => {
              return (<AddHOC />)
            }
          } />
          
          <Route path="/HOD/CreatePLO" exact strict render={
            () => {
              return (<AddPLO />)
            }
          } />
          <Route path="/HOD/EditPLO" exact strict render={
            () => {
              return (<EditPLO />)
            }
          } />
        </div>
      </Router>
    )
  }
}