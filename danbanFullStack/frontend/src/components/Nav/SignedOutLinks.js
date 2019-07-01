import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div className="navbar-item">
            <div className="buttons">
                <NavLink to='login' className="button is-light"><strong>Login</strong></NavLink>
                <NavLink to='/signup' className="button is-light"><strong>Signup</strong></NavLink>
            </div>
        </div>
    )
}

export default SignedOutLinks
