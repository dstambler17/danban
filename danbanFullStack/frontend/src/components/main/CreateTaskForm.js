import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../actions/ideaActions'

class CreateTaskForm extends Component {
    state = {
        input: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
          })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.input.length === 0) {
            alert("WTF!")
        } else {
            console.log(this.state)
            let input = this.state.input
            this.props.addItem(input)
            this.setState({
                input : ''
            })
        }
    }
    render() {
    
        return(
            <div className="field container is-center-form">
                <form onSubmit={this.handleSubmit}>
                    <p className="control">
                        <input type="text" autoComplete="off" id ="input" className="input is-tall is-light-color" onChange={this.handleInput} value={this.state.input} placeholder="Add New Items"/>
                    </p>

                </form>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addItem : (project) => dispatch(addItem(project))
    }

}
export default connect(null, mapDispatchToProps)(CreateTaskForm)