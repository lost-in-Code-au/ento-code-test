import React from 'react';

class OverView extends React.Component  {
  
  renderItems = () => {
    return this.props.items.map((item)=> {
      return (
        <div>Hi {item.name}, who works as a {item.roll}</div>
      )
    })
      
  }
  
  render() {
    return (
      <div className="Over-view">
        <h3>Over-view</h3>
        <div>
            { (this.props.items ? this.renderItems() : <div>Nope!</div>)}
        </div>
      </div>
    );
  }  
}

export default OverView;