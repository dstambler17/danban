import React from 'react'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/ideaActions'

const TaskDetails = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div id="my-modal" className={showHideClassName}>
    <div className="modal-content">
      <div className="modal-header">
        <span> <button className="negate-button close" onClick={props.closeModal}>&times;</button></span>
        <h2 className="is-size-3">{props.title}</h2>
      </div>
      <div className="modal-body">
        <p>This is one of the cool ideas that you put out there</p>
      </div>
    </div>
  </div>
  );
}

const mapStateToProps = (state) => {
    return{
        show: state.taskItem.show,
        title: state.taskItem.modalTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails)
