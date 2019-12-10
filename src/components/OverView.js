import React from 'react';
import ItemMsg from './ItemMsg';

class OverView extends React.Component  {

  // Mock Redux action
  deleteItem = (index) => {
    this.props.deleteItem(index)
  } 

  renderItems = (items) => {
    console.log("items:", items)
    return items.map((item, index)=> {
      return (
        <div id={index} className="item">
          <span className="delete-button" onClick={()=> this.deleteItem(index)}>X</span>
          <div className="inner-text">
            <p><span>{item.shift.startTime}</span>-<span>{item.shift.endTime}</span></p>
            <p> Rolls: {item.rolls.map((roll)=> <span>{roll} </span>)}</p>
            <p>{item.name}</p>
          </div>
          <div className="onhover-animation">
            { item.crit || item.alert ? <ItemMsg item={item} /> : null }
          </div>
        </div>
      )
    });
  };
  
  render() {
    const items = this.props.items
    return (
      <div className="Over-view">
        <h3>Over-view</h3>
        <div className="items-container">
          { (items ? this.renderItems(items) : <div>Nope!</div>)}
        </div>
      </div>
    );
  }  
}

export default OverView;