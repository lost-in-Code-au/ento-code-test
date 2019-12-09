import React from 'react';
import DatePicker from 'react-date-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

class Form extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      employees: ( this.props.employees ? 
        this.props.employees : 
        [{ id: "0", name: "No Employees available", rolls: "", 
          shift: [ {date: "", startTime:"", endTime:""}]}] ),
      selectedEmployee: null,
      time: ["9:00","16:00"],
      // endTime: null
    };
  }
  
  onDateChange = (date) => {
    console.log('onDateChange', date)
    this.setState({ ...this.state, date });
  }
  
  onEmployeeChange = (selectedEmployee) => {
    console.log('selectedEmployee', selectedEmployee)
    this.setState({ ...this.state, selectedEmployee: selectedEmployee });
  }

  // onTimeRangePickers = (e) => {
  //   console.log('onTimeRangePickers', e)
  //   // debugger
  //   const timeKey = e.startTime ? "startTime" : "endTime";
  //   this.setState({ ...this.state, [timeKey]: e[timeKey] });
  // }

  onChange = time => {
      console.log('onTimeRangePickers', time)
    this.setState({ time:[ time.startTime, time.endTime ] })
  }
  
  

  render() {
    console.log("State:",this.state)
    // console.log("Props:",this.props)
    return (
      <form className="Form">
        <h1>Form</h1>
        <div className="inputs">
          <div>
            <label>Employee: </label>
            <select
              className="employee-picker"
              value={this.state.selectedEmployee ? this.state.selectedEmployee : <option className="">select a employee</option>}
              onChange={this.onEmployeeChange}
            >
              {this.state.employees.map((item) => {
                console.log(item.name)
                return <option className="" key={ item.id } value={ item.name }>{ item.name ? item.name : item.id }</option>;
              })}
            </select>
          </div>
          <div>
            <label>Date: </label>
            <DatePicker
              className="date-picker"
              clearIcon={false}
              onChange={this.onDateChange}
              value={this.state.date}
            />
          </div>
          <div>
            <label>Shift times: </label>
            <TimeRangePicker
              className="time-range"
              value={this.state.time}
              clearIcon={false}
              disableClock={true}
              onChange={this.onChange}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;