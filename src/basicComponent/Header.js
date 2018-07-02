import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/css/basic/header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header-box">
                <img src={logo} className="nav-logo" alt="logo" />
                <p className="MainTitle">ONE WORD</p>
            </div>
        );
    }
}

export default Header;