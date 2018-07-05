import React, { Component } from 'react';
import '../assets/css/sentence/articleSent.css'

const SpecialStyle = {
    color: '#b71ed7',
}
const HotStyle = {
    color: '#e1151e',
}
class ArticleContent extends Component{
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    render() {
        
        return (
            <div className="sen-art-content">
                <div className="sen-art-box">
                    <ul className="sent-attention-flex tips-title">
                        {
                            this.props.Label.map((item, index) => {
                                return  <li key={ index } className={`sen_li active`+index}>{item.text}</li>
                            })
                        }
                    </ul>
                    {
                        this.props.ArticleList.map((item, index) => {
                            return  <div className="sent-content-box" key={index}>
                                        <p className="label-content">
                                            <span style={HotStyle}>{item.hot_label} · </span>
                                            <span style={SpecialStyle}>{item.special_label} </span>· {item.author} · {item.time} · {item.navbar}
                                        </p>
                                        <p className="title-content">{item.title}</p>
                                        
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ArticleContent;