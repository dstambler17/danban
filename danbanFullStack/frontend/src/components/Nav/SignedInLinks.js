import React from 'react'
//import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div className="navbar-item">
            <div className="buttons">
                <a className="button is-light"><strong>Log out</strong></a>
            </div>
        </div>
    )
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}*/

//export default connect(null, mapDispatchToProps)(SignedInLinks)
export default SignedInLinks
