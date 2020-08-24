import React, { Component } from 'react';
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <MainHeader/>
                    <div class="about-section">
                            <h1>Departmental Committee Management</h1>
                            <quote>We are building this software to provide an automation system to the committees of the CS Department of COMSATS. 
                                It is very difficult for the members and the heads of the committee to communicate with each other through a focal person.
                                 CS department of COMSATS University has faculty committees for different tasks and goals. 
                                 For example, there is the Industry Liaison Committee, Departmental academic committee, Thesis evaluation committee and Final year project committee. All of these committees have different purposes and goals that they have to achieve. These committees call meetings and different milestones are set in regard to the subject of the meeting. The progress of a committee, minutes of the meetings, its reports, and record of the committee members, all this managed and recorded. As the activities till now are carrying out manually so it becomes very difficult to keep track of the past records and announce the meeting of the committees at one platform where everyone can easily be updated. It is also difficult to manage the task assigned to the members, the tasks that are completed and the tasks that are pending.
                                 There is also no information on a member about his/her past activities and performances.
                                 </quote>
                    </div>
                    <br></br>      
                    <br></br>      


                    <br></br>  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>     

            </div>
        );
    }
}
 
export default AboutUs;