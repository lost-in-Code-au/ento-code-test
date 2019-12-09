import React from 'react';

class OverView extends React.Component  {

  doesItemHaveMessage = (item) => {
    if (!item.crit && !item.alert) {
      return
    } else if (item.crit && item.alert) {
      return  <div className="crit-alert-msg"><span className="crit">{item.crit}</span><span className="alert">{item.alert}</span></div>
    } else {
      return <div className="crit-alert-msg"><span className={item.crit ? "crit only" : "alert only"}>{item.crit ? item.crit : item.alert}</span></div>
    }
  };

  deleteItem = (index) => {
    this.props.deleteItem(index)
  } 

  renderItems = (items) => {
    console.log("items:", items)
    return items.map((item, index)=> {
      return (
        <div id={index} className="item">
          <span className="delete-button" onClick={()=> this.deleteItem(index)}>X</span>
          <p>{item.name}</p><p> Roll: {item.roll}</p>
          <div className="">
          { item.crit || item.alert ? this.doesItemHaveMessage(item) : null }
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