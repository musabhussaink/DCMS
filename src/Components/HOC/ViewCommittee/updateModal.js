import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'

export const Modalupdate = ({ show, close, committeeDetails, memberDetails}) => {
  const [CommitteeName, setName]= useState(committeeDetails.CommitteeName);
    const [CommitteeGoal, setGoal]= useState(committeeDetails.goal);
    const [CommitteeDesolvingDate, setDesolvingDate]= useState(committeeDetails.committeeDesolveDate);
    const [CommitteeDescription, setDescription]= useState(committeeDetails.Description);
    const [CommitteeMembers, setMembers]= useState(memberDetails.map(d => ({
        "value" : d.idUser,
        "label" : d.Name
    }))        );    
    const [selectedOption, setOption] = useState([]);

    useEffect(() => {
        (async () => {    
            const res = await axios.get('http://localhost:3306/createCommitteeHOD');
            const data = res.data;
            const options = data.map(d => ({
                "value" : d.idUser,
                "label" : d.Name
            }));        
            setOption(options);
        })();
        }, []);
    
    const CreateCommittee = async () => {

        try {
            var res = await axios({
                method: 'put',
                url: 'http://localhost:3306/CommitteesHoc/updateCommittee',
                data: {
                    CommitteeId: committeeDetails.idCommittee,
                    CommitteeName: CommitteeName,
                    CommitteeGoal: CommitteeGoal,
                    CommitteeDesolvingDate: CommitteeDesolvingDate,
                    CommitteeDescription: CommitteeDescription,
                    Members: CommitteeMembers
                }
            })
            var result = res.data;
            console.log(result.success);
            if (result) {
                Swal.fire('Updated!','this record has been Updated', 'success');
                window.location.reload();
            }
    
            else if (result && result.success === false) {
                Swal.fire('failed','something wrong', 'warning')
                console.log(result.err);
            }
        }
        catch (e) {
            console.log(e);
        }
    } 
    if(!show) return null;
    return ReactDom.createPortal(
      <>
    <div style={{zIndex:1000, position:'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,.7)'}}/>
        <div style={{ opacity: show ? '1': '0', zIndex: 1000, position:'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#FFF', padding: '20px'}}> 
            <div className="modal-dialog">{console.log(show)}
              <div className="modal-content">
              
                <div className="modal-header">
    <h4 className="modal-title align-center">Committee : </h4>

                  {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                </div>
                
                <div className="modal-body text-center">

                <div className="row">
                <div className="col-lg-12">
                    <label className="control-label col-md-2">
                        Committee Name
                    </label>
                    <div className="col-md-10">
                        <input defaultValue={CommitteeName} type="input" className="form-control text-box single-line" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <label className="control-label col-md-2">
                        Committee Goal
                    </label>
                    <div className="col-md-10">
                        <input defaultValue={CommitteeGoal} type="input" className="form-control text-box single-line" onChange={(e) => setGoal(e.target.value)}></input>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <label className="control-label col-md-2">
                        Committee Desolve Date
                    </label>
                    <div className="col-md-10">
                        <input defaultValue={CommitteeDesolvingDate} type="date" className="form-control text-box single-line" onChange={(e) => setDesolvingDate(e.target.value)}></input>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <label className="control-label col-md-2">
                        Committee Description
                    </label>
                    <div className="col-md-10">
                        <input defaultValue={CommitteeDescription} type="input" className="form-control text-box single-line" onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12"> 
                    <label className="control-label col-md-2">
                        Add Members
                    </label>
                    <div className="col-md-10">
                        <Select defaultValue={CommitteeMembers} options={selectedOption} onChange={(e) => setMembers(e)} isMulti />
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <input type="submit" defaultValue="Create" onClick={() => CreateCommittee()} className="btn btn-primary" />
                </div>

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