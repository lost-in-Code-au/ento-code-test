import React from 'react';
import ReactModal from 'react-modal';

class ItemMsg extends React.Component  {

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    // Again would like to rewrite in react@16 hooks way
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render() {
    const item = this.props.item
    if (!item.crit && !item.alert) {
      return
    } else if (item.crit && item.alert) {
      return  (
        <div className="crit-alert-msg">
          <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
          <button onClick={()=> this.handleCloseModal()}>Close Modal</button>
          <div>Critical: {item.crit}</div>
          <div>Alerts: {item.alert}</div>
          </ReactModal>
          <span onClick={()=> this.handleOpenModal()} className="crit">1 Crit</span><span onClick={()=> this.handleOpenModal()} className="alert">1 Alert</span>
        </div>
      )
    } else {
      return (
        <div className="crit-alert-msg">
          <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          >
            <button onClick={()=> this.handleCloseModal()}>Close Modal</button>
            <div>{item.crit ? `Critical: ${item.crit}` : `Alert: ${item.alert}`}</div>
          </ReactModal>
          <span onClick={()=> this.handleOpenModal()} className={item.crit ? "crit only" : "alert only"}>{item.crit ? "1 crit" : "1 alert"}</span>
        </div>
      )
    }
    
  }  
}
    
export default ItemMsg;