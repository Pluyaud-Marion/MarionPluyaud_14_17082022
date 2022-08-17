import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className='Header'>
            <NavLink to="/" >
                <img src={logo} className="logo" alt="HRnet logo" />
            </NavLink>
            <div className='navigation'>
                <NavLink to={"/"} className={(nav) => (nav.isActive ? 'nav-active' : 'nav')}>Create Employee</NavLink>
                <NavLink to={"/employee"} className={(nav) => (nav.isActive ? 'nav-active' : 'nav')}>View Current Employees</NavLink>
            </div>

        </div>
    );
};

export default Header;