import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ONE WORD</h1>
                    <div className="HomeContainer">
                        <p className="Subtitle">A Daily Article & Music & Sentence From ONE</p>    
                    </div>
                    <div className="U_Box">
                        <ul className="flex-box">
                            <li className="flex-cell"><Link to="home">Home</Link></li>
                            <li className="flex-cell"><Link to="article">Article</Link></li>
                            <li className="flex-cell"><Link to="music">Music</Link></li>
                            <li className="flex-cell"><Link to="sentences">Sentence</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;