import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/css/basic/header.css';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    LocateHome = (addressRoute) => {
        this.props.history.push(addressRoute);
    }
    render() {
        return (
            <div className="Header-box">
                <div onClick={() => this.LocateHome('/home')}>
                    <img src={logo} className="nav-logo" alt="logo" />
                    <p className="MainTitle">ONE WORD</p>
                </div>
                <ul className="nav-top">
                    <li onClick={() => this.LocateHome('/article')}>Article</li>
                    <li onClick={() => this.LocateHome('/music')}>Music</li>
                    <li onClick={() => this.LocateHome('/sentences')}>Sentence</li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);