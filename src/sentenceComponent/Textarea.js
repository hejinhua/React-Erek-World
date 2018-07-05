import React , { Component } from 'react';
import '../assets/css/sentence/textarea.css'
import AuthorList from '../basicComponent/Author'
import BookList from '../basicComponent/Book'
import Title from '../basicComponent/Title'

const BtnStyle = {
    border : '1px solid #007fff',
    color: '#007fff'
}
class Textarea extends Component {
    constructor (props){
        super (props)
    }
    render () {
        return (
            <div className="box-sent-right">
                <div className="sent-textarea">
                    <p>登录ONE WORD，可以享受无限收藏的乐趣, 快来发布你最新的技术文章吧 </p>
                    <button type="button" className="sent-btn-login">用户登录</button>
                </div>
                <div className="rig-sen-box">
                    <Title title="推荐作者"></Title>
                    <AuthorList A_List={this.props.AuthorList} StyleCss={BtnStyle} BtnText="关注"/>
                </div>
                <div className="rig-sen-box">
                    <Title title="ONE WORD 小册"></Title>
                    <BookList B_List={this.props.BookList} StyleCss={BtnStyle} BtnText="试读"/>
                </div>
            </div>
        )
    }
}

export default Textarea;