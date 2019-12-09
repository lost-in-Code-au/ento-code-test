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

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: MockData,
      items: [{ id: 5, name: "Reece", roll: ["chef"], shift: [{date: "", startTime:"", endTime:""}],
      crit: '1 crit', alert: '1 alert' }]
    };
  }

  render() {
    return (
      <div className="Scheduler">
        <Form employees={this.state.employees} />
        <OverView items={this.state.items} />
      </div>
    );
  }
}

export default Container;