import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="logo">Ratial</h1>
            </div>
            <div className="navbar-right">
                <ul className="nav-menu" style={{"alignItems":"center"}}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">How it Works</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><Link to={"/login"}><button className="loginBtn" >Login</button></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
