import React, {Component} from 'react'
import right from './right.png'
import left from './left.png'
import up from './up.png'
import down from './down.png'
import {connect} from 'react-redux'
import {shiftBox, deleteBox, showModal} from '../../actions/ideaActions'

class TaskItem extends Component {
    handleShift = (e) => {
        let direction = e.target.id
        console.log(direction)
        let id = this.props.id
        let title = this.props.idea
        let box = this.props.boxNum
        console.log(box)
        console.log("HERE")
        this.props.shiftBox(id, direction, title, box)
     }

     deleteItem = () => {
         let id = this.props.id
         this.props.deleteBox(id)
     }

     modalAppear = () => {
         this.props.showModal(this.props.idea)
     }

    render(){
        const idea = this.props.idea
        return (
            <div className="columns card">
                <div className="column">
                    <center><button className="negate-button" onClick ={this.handleShift}>
                        <img src={left} alt="shift item left" id='left' className ="is-arrow has-white-background not-mobile" />
                        <img src={up} alt="shift item left" id='up' className ="is-arrow has-white-background is-mobile" />
                    </button></center>
                </div>
                <div className="column is-three-fifths">
                    <span><p className="text-is-center is-size-6" onClick={this.modalAppear}>{idea}</p></span>
                    <span><img src="https://cdn1.iconfinder.com/data/icons/trash-bin-cartoon/512/g10296-512.png" alt="delete" id='del' className ="is-small" onClick={this.deleteItem}/></span>
                </div>
                <div className="column">
                <center><button className ="negate-button" onClick ={this.handleShift}>
                        <img src={right} alt="shift item right" id = 'right' className ="is-arrow not-mobile" />
                        <img src={down} alt="shift item left" id='down' className ="is-arrow has-white-background is-mobile" />
                    </button></center>
                </div>

            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        shiftBox : (id, direction, title, box) => dispatch(shiftBox(id, direction, title, box)),
        deleteBox: (id) => dispatch(deleteBox(id)),
        showModal: (title) => dispatch(showModal(title))
    }

}


export default connect(null, mapDispatchToProps)(TaskItem)
