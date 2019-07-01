import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../actions/authActions'
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //this.props.signIn(this.state)
  }
  render() {
    //const {authError, auth} = this.props
    //if (auth.uid) return <Redirect to='/'/>
    return (
      <div className="field container is-box">
        <form className="is-form" onSubmit={this.handleSubmit}>
          <h5 className="is-size-4 is-center">Log In</h5>
          
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
            <button className="button is-success">Login</button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}

/*const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)*/
export default LoginForm