import ReactDom from 'react-dom'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2'




export default class CreateMeeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            showView: true,
        }
    }
    handleCloseView = () => this.setState({showView: false});
    render() 
    {
    return (
          // ReactDom.createPortal
    // (
      
      <div>
      <div id="page-wrapper" style={{}}> 
      <div style={{zIndex:1000, position:'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,.7)'}}/>
        <div style={{ opacity: this.state.showView ? '1': '0', zIndex: 1000, position:'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#FFF', padding: '20px'}}> 
        <div className="modal-dialog">{console.log(this.state.showView)}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title align-center">Choose Meeting :</h4>
            </div>
            
            <div className="modal-body text-center">
              <div>   
                <Link to="/Admin/Meeting/CommitteeBased"> Committee Based<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
                  <hr></hr>
                  <Link to="/Admin/Meeting/ParticipantBased"> Participant Based<span className="fa fa-share" style={{ float: 'left', margin: '3px' }}>&nbsp;</span></Link>
              </div>
            </div>
              
              <div className="modal-footer">
              <Link to="/Admin/UpcomingMeetings"><button onClick={this.handleCloseView} type="button" className="btn btn-danger" data-dismiss="modal">Close</button></Link>
                </div>
              </div>
        </div>
        </div>
        </div>
          </div>
          // ,
          // document.getElementById('portal')
          
    )
}
}
