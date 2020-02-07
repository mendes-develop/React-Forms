import React, { Component } from 'react'
import From from './Form'

export default class ParentComponent extends Component {
    state = {
        firstName: "John",
        lastName: "Henry",
        submittedData: []
      }


    //   handleFirstNameChange = event => {
    //     this.setState({
    //       firstName: event.target.value
    //     })
    //   }
    
    //   handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    //   }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

      handleSubmit = event => {
        event.preventDefault()
        let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray}, () => this.setState({firstName: "", lastName: ""}) )
      }
    
      listOfSubmissions = () => {
        return this.state.submittedData.map((data, index) => {
          return <div key={index}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
        })
      }



    render() {
        return (
            <From 
                data={this.state} 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                listOfSubmissions={this.listOfSubmissions}
            />
        )
    }
}
