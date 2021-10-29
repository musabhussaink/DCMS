import React from 'react'
import ReactDom from 'react-dom'

export const Modalview = ({ show, close, committeeDetails, memberDetails, headDetails}) => {
  if(!show) return null
    return ReactDom.createPortal(
      <>
    <div style={{zIndex:1000, position:'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,.7)'}}/>
        <div style={{ opacity: show ? '1': '0', zIndex: 1000, position:'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#FFF', padding: '20px'}}> 
            <div className="modal-dialog">{console.log(show)}
              <div className="modal-content">
              
                <div className="modal-header">
    <h4 className="modal-title align-center">Committee : {committeeDetails.CommitteeName}</h4>

                  {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                </div>
                
                <div className="modal-body text-center">
                  
                <table className="table table-hover table-bordered table-striped table-responsive">
            <tr>
              <th><p>Committee Name</p></th>
              <td><p>{committeeDetails.CommitteeName}</p></td>
            </tr>
            <tr>
              <th><p>Goal</p></th>
              <td><p>{committeeDetails.goal}</p></td>
            </tr>
            <tr>
              <th><p>Creation Date</p></th>
              <td><p>{committeeDetails.committeeCreationDate}</p></td>
            </tr>
            <tr>
              <th><p>Desolving Date</p></th>
              <td><p>{committeeDetails.committeeDesolveDate}</p></td>
            </tr>
            <tr>
              <th><p>Description</p></th>
              <td><p>{committeeDetails.Description}</p></td>
            </tr>
            <tr>
              <th><p>Head</p></th>
              <td><p>{headDetails.Name}</p></td>
            </tr>
            <tr>
              <th><p>Members</p></th>
              {/* <td><p>{memberDetails[0].idUser}</p><p>{memberDetails[1].idUser}</p></td> */}
              <td><table className="table table-hover table-bordered table-striped table-responsive" >
                  <thead>
                  <tr>
                      <th>MemberName</th>
                      <th>Designation</th>
                      <th>Email</th>
                  </tr>
                  </thead>
                  <tbody>
                      {memberDetails.map(function (item, key){
                          return(<tr>
                            <td>{memberDetails[key].Name}</td>
                            <td>{memberDetails[key].Designation}</td>
                            <td>{memberDetails[key].Email}</td>
                        </tr>)
                      })}
                  </tbody>
                  </table></td>
            </tr>
          
             
                  <tr>
                  {/* <td>{this.state.userdetails}</td>
                  <td>{this.state.userdetails}</td>
    <td>{this.state.userdetails}</td> */}
                  </tr>
           
            
        </table>
                </div>
              
                <div className="modal-footer">
                  <button onClick={close} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
        </div>
          </div> 
          </>,
          document.getElementById('portal')
    )
} 