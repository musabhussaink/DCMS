import React, { Component } from 'react'

export default class AddMeeting extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Add Meeting</h3>
                            <form action="/MOC/AddMeeting" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="dp1rMPG_WaeLFhrTLjyIfpfPkGylll_M7Ue86VX6uzrE59MWaEK90uXm0qaPrRFJMA5s6PHmKEKO9X_OBgUY-d915FItoadbcv1UxC3lq2ldaoMPdFsP0Udit0s2uppZ0" />    <div className="form-horizontal">
                                <hr />
                                <div className="form-group">
                                    <label className="control-label col-md-2">Select Meeting</label>
                                    <div className="col-md-3">
                                        <select className="form-control" id="Meeting" name="Meeting"><option value="FA">FA</option>
                                            <option value="SP">SP</option>
                                        </select>
                                        <span className="field-validation-valid" data-valmsg-for="MeetingName" data-valmsg-replace="true" />
                                    </div>
                                    <label className="control-label col-md-2">Select Year</label>
                                    <div className="col-md-3">
                                        <select className="form-control" id="Year" name="Year"><option value={14}>14</option>
                                            <option value={15}>15</option>
                                            <option value={16}>16</option>
                                            <option value={17}>17</option>
                                            <option value={18}>18</option>
                                            <option value={19}>19</option>
                                            <option value={20}>20</option>
                                            <option value={21}>21</option>
                                            <option value={22}>22</option>
                                            <option value={23}>23</option>
                                            <option value={24}>24</option>
                                            <option value={25}>25</option>
                                            <option value={26}>26</option>
                                            <option value={27}>27</option>
                                            <option value={28}>28</option>
                                            <option value={29}>29</option>
                                            <option value={30}>30</option>
                                            <option value={31}>31</option>
                                            <option value={32}>32</option>
                                            <option value={33}>33</option>
                                            <option value={34}>34</option>
                                            <option value={35}>35</option>
                                            <option value={36}>36</option>
                                            <option value={37}>37</option>
                                            <option value={38}>38</option>
                                            <option value={39}>39</option>
                                            <option value={40}>40</option>
                                        </select>
                                        <span className="field-validation-valid" data-valmsg-for="Year" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-2 col-md-10">
                                        <input type="submit" defaultValue="Create" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div>
                                <a href="/MOC/Meeting">View all Meeting</a>
                            </div>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
                            </div>
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>

            </div>

        )
    }
}
