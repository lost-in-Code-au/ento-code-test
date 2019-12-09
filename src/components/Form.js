import React from 'react';
import Select from 'react-select';

class Form extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      employees: ( this.props.employees ? 
        this.props.employees : 
        [{ id: "0", name: "No Employees available", rolls: "", shift: [ {date: "", startTime:"", endTime:""}]}] ),
      selectedEmployee: "Select",
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, selectedEmployee: e });
  };
  render() {

    console.log("State:",this.state)
    console.log("Props:",this.props)
    return (
      <form className="Form">
        <h1>Form</h1>
        <div className="inputs">
          <label>Employee</label>
          <Select
            value={this.state.selectedEmployee}
            onChange={this.handleChange}
            options={this.state.employees}
          />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;