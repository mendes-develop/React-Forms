import React from 'react';

class Form extends React.Component {
  

  render() {

    const { data, handleSubmit, handleChange, listOfSubmissions} = this.props
    // console.log(this.props)
    return (
      <div>

        <form onSubmit={event => handleSubmit(event)} >
          <input 
            type="text" 
            name="firstName" 
            onChange={event => handleChange(event)} 
            value={data.firstName} />
          <input 
            type="text" 
            name="lastName" 
            onChange={event => handleChange(event)} 
            value={data.lastName} />
          <input type="submit"/>
          </form>
          {listOfSubmissions()}
      </div>
    )
  }
}

export default Form;