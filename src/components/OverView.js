import React from 'react';

class OverView extends React.Component  {
  
  doesItemHaveMessage = (item) => {
    if(item.crit) {
      return <span>{item.crit}</span>
    } else {
      return <span>{t=item.alert}</span>
    };
  };

  renderItems = (items) => {
    items.map((item)=> {
      return (
        <div className="item">
          <p>{item.name}</p> <p>Roll: {item.roll}</p> { item.crit || item.alert ? this.doesItemHaveMessage(item) : null }
        </div>
      )
    });
  };
  
  render() {
    const { items } = this.props
    return (
      <div className="Over-view">
        <h3>Over-view</h3>
        <div>
            { (this.props.items ? this.renderItems(items) : <div>Nope!</div>)}
        </div>
      </div>
    );
  }  
}

export default OverView;