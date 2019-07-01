import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../actions/authActions'

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //this.props.signUp(this.state)
  }
  render() {
    //const {auth, authError} = this.props
    //if (auth.uid) return <Redirect to='/'/>
    return (
        <div className="field container is-box">
        <form className="is-form" onSubmit={this.handleSubmit}>
          <h5 className="is-size-4 is-center">Sign Up</h5>
          
          <div className="field">
          <p className="control">
            <input type="email" id='email' className="input is-shorter" placeholder="Email" onChange={this.handleChange} />
            </p>
          </div>

          <div className="field">
            <p className="control">
            <input type="password" className="input is-shorter" placeholder="Password" id='password' onChange={this.handleChange} />
            </p>
          </div>

          <div className="field">
            <p className="control">
            <input type="text" className="input is-shorter" placeholder="First Name" id='firstName' onChange={this.handleChange} />
            </p>
          </div>

          <div className="field">
            <p className="control">
            <input type="text" className="input is-shorter" placeholder="Last Name" id='lastName' onChange={this.handleChange} />
            </p>
          </div>

          <div className="field">
          <p className="control">
            <button className="button is-success">Signup</button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}

/*const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
} **/

/*const mapDispatchToProps = (dispatch) => {
  return {
    signUp : (newUser) => dispatch(signUp(newUser))
  }
} */

//export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)
export default SignUpForm