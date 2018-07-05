import React, { Component } from 'react';
import '../assets/css/basic/subtitle.css'
const refIcon = require('../assets/img/reflesh.png')

class Title extends Component {
    constructor(props){
        super(props)
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
            </div>
        )
    }

}   

export default Title;