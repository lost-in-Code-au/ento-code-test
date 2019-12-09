import React from 'react';
import Form from './Form'
import OverView from './OverView'
import { render } from '@testing-library/react';

const MockData = [
  { id: 1, name: "James", rolls: ["Chef","Lockup"],
    shift: [ {date: "", startTime:"", endTime:""}],
    crit: false, alert: false
  },
  { id: 2, name: "Rob", rolls: ["Barista","Lockup"],
    shift: [ {date: "", startTime:"", endTime:""}],
    crit: false, alert: false
  },
  { id: 3, name: "Rachel", rolls: ["Waitress","Kichten"],
    shift: [ {date: "", startTime:"", endTime:""}],
    crit: false, alert: false
  },
  { id: 4, name: "Kath", rolls: ["Waitress","Lockup"],
    shift: [ {date: "", startTime:"", endTime:""}],
    crit: false, alert: false
  }
]
const MockItems = [
    { id: 5, name: "Reece", rolls: ["chef"], shift: [{date: "", startTime:"", endTime:""}], crit: '1 crit', alert: '1 alert' },
    {id: 8, name: "Jake", rolls: ["Barista","Lockup"], shift: [{date: "", startTime:"", endTime:""}], crit: '1 crit', alert: false },
    {id: 12, name: "John", rolls: ["Barista","Lockup"], shift: [{date: "", startTime:"", endTime:""}], crit: '1 crit', alert: false }
  ]

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: MockData,
      items: MockItems
    };
  }

  updateItems = (newItem) => {
    const items = [...this.state.items]
    items.push(newItem)
    this.setState({...this.state, items: items})
  }
  
  deleteItem = (index) => {
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