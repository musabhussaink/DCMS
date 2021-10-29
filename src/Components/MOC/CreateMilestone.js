import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class CreateMilestone extends Component {
    constructor (props) {
        super(props)
        this.state = {
            //ID:'',
            Name: '',
            CreateDate: '',
            CompletionDate: '',
            TotalTask: '',
            Status: '',
            Committee:''
            
        };
    }
    // handleIDChange = (event) => {
    //     this.setState({
    //         ID: event.target.value
    //     })

    // }
    handleNameChange = (event) => {
        this.setState({
            Name: event.target.value
        });

    }
    handleCreateDateChange = (event) => {
        this.setState({
            CreateDate: event.target.value
        });
    }
    handleCompletionDateChange = (event) => {
        this.setState({
            CompletionDate: event.target.value
        });
    }
    handleTotalTaskChange = (event) => {
        this.setState({
            TotalTask: event.target.value
        });
    }
    handleStatusChange = (event) => {
        this.setState({
            Status: event.target.value
        });
    }

    handleCommitteeChange = (event) => {
        this.setState({
            Committee: event.target.value
        });
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

    Addmilestone = async () => {

        try {
           // var ids = this.state.ID;
            var names = this.state.Name;
            var createDates = this.state.CreateDate;
            var completionDates = this.state.CompletionDate;
            var totalTasks = this.state.TotalTask;
            var statuses = this.state.Status;
            var Committees= this.state.Committee;

            var res = await axios({
                method: 'post',
                url: 'http://localhost:3306/SetMilestoneMOC',
                data: {
                   // id:ids,
                    name: names,
                    createDate: createDates,
                    completionDate:completionDates,
                    totalTask :totalTasks,
                    status :statuses,
                    committee:Committees
                }
            })
            var result = res.data;
            console.log(result);
            if (result.success) {
                alert("Milestone Added");
                // this.resetForm();
            }

            else if (result && result.success === false) {
                alert(result.err);
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
                            <h2>Set Milestone</h2>
                           
                            <div className="form-horizontal">
                                <hr />


                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Name">Name</label>
                                    <div className="col-md-10">
                                        <input value={this.state.Name} onChange={this.handleNameChange} className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="CreateDate">CreateDate</label>
                                    <div className="col-md-10">
                                        <input value={this.state.CreateDate} onChange={this.handleCreateDateChange} className="form-control text-box single-line" data-val="true" data-val-required="The Reg# field is required." id="start" name="startdate" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="RegNo" data-valmsg-replace="true" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="No">CompletionDate</label>
                                    <div className="col-md-10">
                                        <input value={this.state.CompletionDate} onChange={this.handleCompletionDateChange} className="form-control text-box single-line" data-val="true" data-val-regex="Entered phone format is not valid." id="end" name="enddate" type="date" defaultValue />
                                        <span className="field-validation-valid" data-valmsg-for="No" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                
                                
                                
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Status">Total Task</label>
                                    <div className="col-md-10">
                                        <input value={this.state.TotalTask} onChange={this.handleTotalTaskChange} className="form-control text-box single-line" data-val="true" name="TotalTask" type="text" />
                                        <span className="field-validation-valid" data-valmsg-for="" data-valmsg-replace="true" />
                                    </div>
                                </div>    
                               
                               
                               
                                <div className="form-group">
                                    <label className="control-label col-md-2" htmlFor="Status">Status</label>
                                    <div className="col-md-10">
                                        <input value={this.state.Status} onChange={this.handleStatusChange} className="form-control text-box single-line" data-val="true" name="Status" type="text" />
                                        <span className="field-validation-valid" data-valmsg-for="" data-valmsg-replace="true" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" onClick={() => this.Addmilestone()} defaultValue="Add" className="btn btn-primary"></input> 
                                         <Link to="/MOC/ViewMilestone"> </Link> 
                                    </div>
                                </div>




                            </div>
                            {/* </form> */}
                            {/* </form> */}

                            <div>
                                <Link to="/MOC/ViewMilestone">Back to List</Link>
                            </div>

                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>




            // <div>
            //     <div id="page-wrapper" style={{}}>
            //         <div className="row">
            //             <div className="col-lg-12">
            //                 <h3>Add Milestone</h3>
            //                 <form action="/MOC/CreateCourse" encType="multipart/form-data" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="bpUdLmTWPRJn4lM9tEDR5BHKcgKacwOMZ289ij61XUkakpUuqQhAaAq7LaAtYyoMqebf5ZhvW_JdjDyYrwZWq29apopxi93SKbMGWMoaEaC6ZtkFKCavZ9xNviJtz0s60" />    <div className="form-horizontal">
            //                     <hr />
                                
            //                     <div className="form-group">
            //                         <label className="control-label col-md-2" htmlFor="Name">Milestone</label>
            //                         <div className="col-md-10">
            //                             <input className="form-control text-box single-line" data-val="true" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue />
            //                             <span className="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true" />
            //                         </div>
            //                     </div>
            //                     <div className="form-group">
            //                         <label className="control-label col-md-2" htmlFor="Name">Due Date</label>
            //                         <div className="col-md-10">
            //                             <input className="form-control text-box single-line" data-val="Date" data-val-required="The Name field is required." id="Name" name="Name" type="text" defaultValue />
            //                             <span className="field-validation-valid" data-valmsg-for="Name" />
            //                         </div>
            //                     </div>
                                
                               
            //                     <div className="form-group">
            //                         <div className="col-md-offset-2 col-md-10">
            //                             <input type="submit" defaultValue="Create" className="btn btn-default" />
            //                         </div>
            //                     </div>
            //                 </div>
            //                 </form>
            //                 <div>
            //                     <Link to="/MOC/ViewMilestone">Back to List</Link>
            //                 </div>
            //                 <div id="spinner" className="spinner" style={{ display: 'none' }}>
            //                     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
            //                         <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
            //                         <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
            //                     </div>
            //                 </div>
            //             </div>
            //             {/* /.col-lg-12 */}
            //         </div>
            //         {/* /.row */}
            //     </div>
            //     <hr />
            // </div>

        )
    }
}
