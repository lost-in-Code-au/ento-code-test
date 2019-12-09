import React from 'react';
import Select from 'react-select';

class Form extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      employees: ( this.props.employees ? this.props.employees : { id: "0", name: "No Employees available", rolls: "", shift: [ {date: "", startTime:"", endTime:""}]} ),
      selectedOption: null,
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, selectedOption: e });
  };
  render() {
    return (
      <form className="Form">
        <h1>Form</h1>
        <div className="inputs">
          <label>Employee</label>
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.state.employees}
          />

          <input />
          <input />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;