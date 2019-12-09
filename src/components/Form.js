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
      time: ["9:00","16:00"]
    };
  }
    
  onEmployeeChange = (event) => {
    console.log('event', event)
    this.setState({ ...this.state, selectedEmployee: event.target });
  }

  onDateChange = (date) => {
    console.log('onDateChange', date)
    this.setState({ ...this.state, date });
  }

  onChange = (time) => {
      console.log('onTimeRangePickers', time)
    this.setState({ time:[ time.startTime, time.endTime ] })
  }
  
  onSubmit = (event) => {
    event.preventDefault()

    console.log(this.props)
    console.log("State:",this.state)
    const newItem = {id: 8, name: "jeff", rolls: ["Barista","Lockup"], shift: [{date: "", startTime:"", endTime:""}], crit: '1 crit', alert: false }
    console.log('newItem', newItem)
    this.props.updateItems(newItem)
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
              onChange={(e) => this.onEmployeeChange(e)}
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
          <button onClick={(e)=> this.onSubmit(e)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;