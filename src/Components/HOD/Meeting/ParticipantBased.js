import React, { Component } from 'react'
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export default class ParticipantBased extends Component {

     
    constructor (props) {
        super(props)
        this.state = {
            selectOptions : [],
            Date: '',
            Time:'',
            Duration: '',
            Agenda: '',
            Venue: '',
            ParticipantInvited:[]
        };
    }

    async getOptions(){
        const res = await axios.get('http://localhost:3306/createMeetingHOD')
        const data = res.data
    
        const options = data.map(d => ({
            "value" : d.idUser,
            "label" : d.Name
        }))

        this.setState({selectOptions: options})
    }

    handleDateChange = (event) => {
        this.setState({
            Date: event.target.value
        });

    }
    handleTimeChange = (event) => {
        this.setState({
            Time: event.target.value
        });

    }
    handleDurationChange = (event) => {
        this.setState({
            Duration: event.target.value
        });
    }
    handleAgendaChange = (event) => {
        this.setState({
            Agenda: event.target.value
        });
    }
    handleVenueChange = (event) => {
        this.setState({
            Venue: event.target.value
        });
    }

    handleParticipantInvitedChange = (event) => {
        this.setState({
            ParticipantInvited: event
        });
    }

    componentDidMount(){
        this.getOptions()
    }

    state = {
        redirect: false
    }
    
    setRedirect = () => {
        this.setState({
        redirect: true
        })
    }

    // resetForm() {
    //     this.setState({
    //         Name: '',
    //         CreateDate: '',
    //         CompletionDate: '',
    //         TotalTask: '',
    //         Status: ''
    //     })
    // }

    CreateMeeting = async () => {

        try {
            var Dates = this.state.Date;
            var Times = this.state.Time;
            var Durations = this.state.Duration;
            var Agendas = this.state.Agenda;
            var Venues = this.state.Venue;
            var ParticipantInviteds = this.state.ParticipantInvited;
            var createUser = localStorage.getItem('userId')

            var res = await axios({
                method: 'post',
                url: 'http://localhost:3306/createMeetingHOD',
                data: {
                    user: createUser,
                    date: Dates,
                    time: Times,
                    duration: Durations,
                    agenda :Agendas,
                    venue :Venues,
                    participantInvited:ParticipantInviteds
                }
            })
            var result = res.data;
            console.log(result);
            if (result.success) {
                Swal.fire('Meeting Created!','The Participant based meeting has been created', 'success');
                // this.resetForm();
            }

            else if (result && result.success === false) {
                Swal.fire('failed',result.err, 'warning')
                // this.resetForm();
            } 
        }
        catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Call Meeting</h2>

                            <div className="form-horizontal">

                                <div className="form-group">
                                    <label className="control-label col-md-2" >Date</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Date} onChange={this.handleDateChange}  className="form-control text-box single-line" data-val="true" data-val-number="" data-val-range="" data-val-required="" id="date" name="date" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="SemesterNo" data-valmsg-replace="true" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-md-2" >Time</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Time} onChange={this.handleTimeChange}  className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="time" name="time" type="time" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2">Duration</label>
                                    <div className="col-md-10">
                                        <input  value={this.state.Duration} onChange={this.handleDurationChange}  className="form-control text-box single-line" data-val="true" data-val-required="The Section field is required." id="duration" name="duration" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Agenda</label>
                                    <div className="col-md-10">
                                        <textarea id="agenda"  value={this.state.Agenda} onChange={this.handleAgendaChange}  name="agenda" placeholder="Write something.."></textarea>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="SectionNo">Venue</label>
                                    <div className="col-md-10">
                                        <input value={this.state.Venue} onChange={this.handleVenueChange}  className="form-control text-box single-line" data-val="true" id="place" name="place" type="text" defaultValue /> 
                                        <span className="field-validation-valid" data-valmsg-for="SectionNo" data-valmsg-replace="true" />
                                    </div>
                                
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-md-2">
                                    Participant Invited
                                    </label>
                                    <div className="col-md-10">
                                        <Select options={this.state.selectOptions} onChange={this.handleParticipantInvitedChange.bind(this)} isMulti />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <Link to="/HOD/UpcomingMeetings"><input type="submit" onClick={() => this.CreateMeeting()} className="btn btn-default" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        )
    }
}