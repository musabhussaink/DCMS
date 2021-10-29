import React, { Component } from 'react'

import axios from 'axios'

import { Bar, Pie, polarArea } from 'react-chartjs-2'

export default class MembersTasksReport extends Component {

    constructor (props) {

        super(props)

        this.state = {

        committeeName: [],

        Total_Meetings_Made: [],

        }

    }

    async componentDidMount() {

        try {
            var res = await axios({
                method: 'get',
                url: `http://localhost:3306/viewCommitteeMeetingsReportAdmin`,
                params: {
                }
            })
            var result = res.data;
            if (result.success) {
                this.setState({committeeName: result.committeeName, Total_Meetings_Made:result.Total_Meetings_Made})
            }
            else if (result && result.success === false) {
                alert(result.err);
            }
            console.log(this.state.committeeName, this.state.Total_Meetings_Made)
        }
        catch (e) {
            console.log(e);
        }
    }

render() { 

    return (  
        <div>
            <div  id="page-wrapper" >
                <div className="row">
                <hr></hr><h1 style={{marginLeft:"150px" }}>CS Department Committees Meeting Report</h1><hr>
                </hr>
                <div>
  <Bar
    data={{
      labels: this.state.committeeName,
      datasets: [
        {
          label: 'Number of Meetings Held by Each Committee',
          data: this.state.Total_Meetings_Made,
          backgroundColor: 
          'rgba(255, 99, 132, 0.2)'
          ,
          borderColor: 
            'rgba(255, 99, 132, 1)'
          ,
          borderWidth: 1,
        },
        // {
        //   label: 'Quantity',
        //   data: [4, 5, 6, 8, 9, 5],
        //   backgroundColor: 'orange',
        //   borderColor: 'red',
        // },
        // {
        //   label: 'Quantity',
        //   data: [4, 5, 6, 8, 9, 5],
        //   backgroundColor: 'orange',
        //   borderColor: 'red',
        // },
      ],
      
    }}
    height={400}
    width={600}
    options={{
    maintainAspectRatio: false,
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
    legend: {
        labels: {
        fontSize: 25,
        },
    },
    }}
  />
</div>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
    );
}
}

