import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar container__navbar">
            <div className="container">
                <Link className="navbar-brand text-center" to="/">
                    <img src="./images/logo.svg" alt="Open English logo" />
                </Link>
            </div>
        </nav>
    )
}


export default Navbar;