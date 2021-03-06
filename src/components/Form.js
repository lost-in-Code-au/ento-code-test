import React from 'react';

//Handling inputs
import DatePicker from 'react-date-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
//User flow responses
import ReactModal from 'react-modal';

class Form extends React.Component  {

  constructor(props) {
    super(props);

    //Building state to put new shift together
    this.state = {
      date: new Date(),
      employees: ( this.props.employees ? this.props.employees : false),
      selectedEmployee: null,
      time: [false,false],
      showModal: false
    };

    // would like to rewite in react@16 hooks way
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    
  onEmployeeChange = (event) => {
    this.setState({ selectedEmployee: event.target.value });
  }

  onDateChange = (date) => {
    this.setState({ date });
  }

  onTimeChange = (time) => {
    this.setState({ time: time })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    const { selectedEmployee, date, time} = this.state
    console.log('time', time)
    console.log('date', date)
    console.log('selectedEmployee', selectedEmployee)
    
    if(selectedEmployee && date && time) {
      const employee = this.state.employees.find(x => x.id == this.state.selectedEmployee)
      const newItem = {
      id: employee.id, name: employee.name, 
      rolls: ["Barista","Lockup"], 
      shift: {date: this.state.date, time: this.state },
      crit: '1 crit', alert: false }
        // At the end of this object is where I would add the check function to see if there are 
        // any issuse in making the shift. Then hit a redux action from props to push new object 
        // into items array(i.e. shifts over view)

      this.props.updateItems(newItem)
    } else {
      this.handleOpenModal()
        // Modal can do with been shunk
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
        <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
          <button onClick={()=> this.handleCloseModal()}>Close Modal</button>
          <div>please fill out all of the form</div>
        </ReactModal>
      </form>
    );
  }
}

export default Form;