import React from 'react';
import Form from './Form'
import OverView from './OverView'



  // I would like to have had Redux handling this data but for now mockdata on the parent component 
  // will be fine.
const MockData = [
  { id: 1, name: "James", rolls: ["Chef","Lockup"],
    shift: {date: "", startTime:"", endTime:""},
    crit: false, alert: false
  },
  { id: 2, name: "Rob", rolls: ["Barista","Lockup"],
    shift: {date: "", startTime:"", endTime:""},
    crit: false, alert: false
  },
  { id: 3, name: "Rachel", rolls: ["Waitress","Kichten"],
    shift: {date: "", startTime:"", endTime:""},
    crit: false, alert: false
  },
  { id: 4, name: "Kath", rolls: ["Waitress","Lockup"],
    shift: {date: "", startTime:"", endTime:""},
    crit: false, alert: false
  }
]
const MockItems = [
    { id: 5, name: "Reece", rolls: ["chef"], shift: {date: "", startTime:"9:00", endTime:"13:00"}, crit: 'Something Critical is happening here', alert: 'There is a alert of some type here!' },
    { id: 8, name: "Jake", rolls: ["Barista","Lockup"], shift: {date: "", startTime:"8:00", endTime:"16:00"}, crit: "it's bad man! :)", alert: false },
    { id: 12, name: "John", rolls: ["Waiting-staff","Lockup"], shift: {date: "", startTime:"9:00", endTime:"16:00"}, crit: false, alert: "Someone let the dogs out!" }
  ]

class Container extends React.Component {

  constructor(props) {
    super(props);

    // This would exist in Redux store
    this.state = {
      employees: MockData,
      items: MockItems
    };
  }

  updateItems = (newItem) => {
    // Mock redux actions
    const items = [...this.state.items]
    items.push(newItem)
    this.setState({...this.state, items: items})
  }
  
  deleteItem = (index) => {
    // Mock redux actions
    const items = [...this.state.items]
    items.splice(index, 1);
    this.setState({...this.state, items: items});
  }

  render() {
    return (
      <div className="Scheduler">
        <Form employees={this.state.employees} updateItems={this.updateItems.bind(this)} />
        <OverView items={this.state.items} deleteItem={this.deleteItem.bind(this)} />
      </div>
    );
  }
}

export default Container;