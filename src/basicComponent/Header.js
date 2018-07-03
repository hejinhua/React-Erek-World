import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/css/basic/header.css';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.LocateHome = this.LocateHome.bind(this)
    }
    LocateHome (addressRoute) {
        this.props.history.push(addressRoute);
    }
    render() {
        return (
            <div className="Header-box" onClick={() => this.LocateHome('/home')}>
                <img src={logo} className="nav-logo" alt="logo" />
                <p className="MainTitle">ONE WORD</p>
            </div>
        );
    }
}

export default withRouter(Header);