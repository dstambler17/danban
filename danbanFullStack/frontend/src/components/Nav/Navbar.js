import React from 'react'
import {Link} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const burger = () =>{
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
          
              // Add a click event on each of them
              $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
          
                  // Get the target from the "data-target" attribute
                  const target = el.dataset.target;
                  const $target = document.getElementById(target);
          
                  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                  el.classList.toggle('is-active');
                  $target.classList.toggle('is-active');
          
                });
              });
            }
          
          });
    }
    //const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item is-size-2">Danban</Link>
                <button className="navbar-burger burger is-blue" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    {burger()}
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </div>
        </nav>
    )
}

/** const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
} */

export default(Navbar)
//export default connect(mapStateToProps)(Navbar)
