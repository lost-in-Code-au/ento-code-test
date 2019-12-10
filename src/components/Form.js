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
      time: ["",""]
    };
  }
    
  onEmployeeChange = (event) => {
    this.setState({ selectedEmployee: event.target.value });
  }

  onDateChange = (date) => {
    console.log('onDateChange', date)
    this.setState({ date });
  }

  onTimeChange = (time) => {
    console.log('onTimeRangePickers', time)
    this.setState({ time: time })
  }
  
  onSubmit = (event) => {
    event.preventDefault()

    console.log(this.props)
    console.log("State:",this.state)
    const { selectedEmployee, date, time} = this.state
    if(selectedEmployee && date && time) {
      const employee = this.state.employees.find(x => x.id == this.state.selectedEmployee)
      const newItem = {
      id: employee.id, name: employee.name, 
      rolls: ["Barista","Lockup"], 
      shift: [{date: this.state.date, time: this.state }], crit: '1 crit', alert: false }
      console.log('newItem', newItem)
      this.props.updateItems(newItem)
    } else {
      alert("please fill out all of the form")
    }
  }

  render() {
    return (
      <form className="Form">
        <h1>Form</h1>
        <div className="inputs">
          <div>
            <label>Employee: </label>
            <select
              className="employee-picker"
              value={this.state.selectedEmployee ? this.state.selectedEmployee : <option className="">select a employee</option>}
              onChange={(e)=> this.onEmployeeChange(e)}
            >
              {this.state.employees.map((item) => {
                return <option key={ item.id } value={ item.id }>{ item.name ? item.name : item.id }</option>;
              })}
            </select>
          </div>
          <div>
            <label>Date: </label>
            <DatePicker
              className="date-picker"
              clearIcon={false}
              onChange={(e)=> this.onDateChange(e)}
              value={this.state.date}
            />
          </div>
          <div>
            <label>Shift times: </label>
            <TimeRangePicker
              className="time-range"
              value={this.state.time}
              disableClock={true}
              onChange={(e)=> this.onTimeChange(e)}
            />
          </div>
          <button onClick={(e)=> this.onSubmit(e)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;