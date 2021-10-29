import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class SelectMultipleMembers extends Component {

  constructor(props){
    super(props)
    this.state = {
    selectMultipleOptions : [],
    value:[]
    }
}

 async getOptions(){
    const res = await axios.get('http://localhost:3306/ADMINcreateCommittee')
    const data = res.data

    const options = data.map(d => ({
    "value" : d.idUser,
    "label" : d.Name
    }))

    this.setState({selectMultipleOptions: options})

  }

  handleChange(e){
   this.setState({value: e})
  }

  componentDidMount(){
    this.getOptions()
  }

  render() {
    // console.log(this.state.value)
    return (
      <div>
        <Select options={this.state.selectMultipleOptions} onChange={this.handleChange.bind(this)} isMulti />
      </div>
    )
  }
}

