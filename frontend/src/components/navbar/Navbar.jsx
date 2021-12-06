import React from 'react'
import './navbar.scss'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <span id='logoText'>PRIYA FASHION</span>
                <ul id='navbarLinks'>
                    <NavLink className='navbarNavLink' exact to="/"><li>HOME</li></NavLink>
                    <NavLink className='navbarNavLink' exact to="/about"><li>EXPLORE</li></NavLink>
                    <NavLink className='navbarNavLink' exact to='/gallery'><li>COLLECTION</li></NavLink>
                </ul>
                <NavLink id='navbarContactLink' exact to='/contact'>CONTACT US</NavLink>
            </div>
        </>
    )
}

export default Navbar
