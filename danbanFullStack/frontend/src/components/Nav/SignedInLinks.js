import React from 'react'
//import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../actions/authActions'

const SignedInLinks = (props) => {
    console.log(props.username)
    const handleLogout = () => {
      props.signOut()
    }
    return (
        <div className="navbar-item">
            <h4>Welcome {props.username['username']} </h4>
            <div className="buttons">
                <a className="button is-light" onClick={handleLogout}><strong>Log out</strong></a>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
