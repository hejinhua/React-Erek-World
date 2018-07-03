import React, { Component } from 'react';
import '../assets/css/basic/subtitle.css'
import AuthorList from './Author'

const refIcon = require('../assets/img/reflesh.png')

class SubTitle extends Component {
    constructor(props){
        super(props)
        this.state = {
            CONST_STATE : 'NORMAL'
        }
        this.ChangeAuthor = this.ChangeAuthor.bind(this)
    }
    ChangeAuthor () {
        this.setState({
            CONST_STATE : 'CHANGE'
        })
    }
    render() {
        return (
            <div>
                <div className="label">
                    <p className="text">{this.props.title}</p>
                    <div onClick={this.ChangeAuthor}>
                        <p className="randChange">换一批</p>
                        <img src={refIcon} className="reflesh" alt="icon"/>
                    </div>
                </div>
                <AuthorList state={this.state.CONST_STATE}></AuthorList>
            </div>
        )
    }

}   

export default SubTitle;