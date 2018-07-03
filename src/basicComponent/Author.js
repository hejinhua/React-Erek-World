import React from 'react';
import AuthorList from '../data/author.js';
import '../assets/css/basic/author.css';

class Author extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount() {
    }
    render() {
        return (
            <div className="AuthorList">
                {
                    AuthorList.map((auth, index) => {
                        return  <div className="auth-cell" key={index}>
                                    <img className="avatar" src={auth.avatar} alt="avatar" />
                                    <div className="textContent">
                                        <p className="auth-username">{auth.auth_name}</p>
                                        <p className="auth-summary">写了{auth.write_word}字, {auth.love_art}人喜欢</p>
                                    </div>
                                    <button type="button" className="attention">关注</button>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default Author;