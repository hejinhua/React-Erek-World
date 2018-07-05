import React, { Component } from 'react';
import '../assets/css/sentence/navbar.css'
import ArticleContent from './ArticleContent'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="sen-nav-bar">
                    <p className="Sent-title">{this.props.text}</p>
                    <ul className="sent-attention-flex">
                        {
                            this.props.List.map((item, index) => {
                                return  <li className="sent_li" key={ index }>{item.text}</li>
                            })
                        }
                    </ul>
                </div>
                <ArticleContent Label={this.props.Label} ArticleList={this.props.ArticleList}/>
            </div>
        )
    }
}

export default NavBar;