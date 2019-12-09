import React from 'react';

class OverView extends React.Component  {
  
  doesItemHaveMessage = (item) => {
    console.log(item)
  
    if (item.crit && item.alert) {
      return  <div className="crit-alert-msg"><span>{item.crit}</span><span>{item.alert}</span></div>
    } 
    
  };

  renderItems = (items) => {
    items.map((item)=> {
      console.log("boom",item)
      return (
        <div className="item">
          <p>{item.name}</p> <p>Roll: {item.roll}</p> { item.crit || item.alert ? this.doesItemHaveMessage(item) : null }
        </div>
      )
    });
  };
  
  render() {
    const items = this.props.items
    return (
      <div className="Over-view">
        <h3>Over-view</h3>
        <div>
            { (items ? this.renderItems(items) : <div>Nope!</div>)}
        </div>
      </div>
    );
  }  
}

export default OverView;