import React , { Component } from 'react';
import '../assets/css/Article.css'

import Header from '../basicComponent/Header'
import SliderImage from '../basicComponent/Slider'
import TagButton from '../basicComponent/TagButton'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonList : [
                {
                    text : '六月精选',
                },
                {
                    text : '优选连载',
                },
                {
                    text : '30日热门',
                },
                {
                    text : '精选评论',
                },
                {
                    text : 'Yun Resume 简历',
                },
                {
                    text : 'ONE WORD 版权',
                },
                {
                    text : 'ONE WORD 大学堂',
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="MainContainer">
                    <div className="Container-left">
                        <SliderImage text={this.state.text}></SliderImage>
                    </div>
                    <div className="Container-right">
                        <div className="tag-cell">
                            <TagButton buttonList={this.state.buttonList}></TagButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;