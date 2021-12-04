import React from 'react'
import './navbar.scss'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <span id='logoText'>PRIYA FASHION</span>
                <ul id='navbarLinks'>
                    <NavLink className='navbarNavLink' exact to="/"><li>Home</li></NavLink>
                    <NavLink className='navbarNavLink' exact to="/about"><li>About</li></NavLink>
                    <NavLink className='navbarNavLink' exact to='/gallery'><li>Gallery</li></NavLink>
                </ul>
                <NavLink id='navbarContactLink' exact to='/contact'>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar
