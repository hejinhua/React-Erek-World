import React , { Component } from 'react';
import '../assets/css/media/singerRecommend.css'
import Music from '../data/music'

const SingerArray = Music.Singer

class SingerRecommend extends Component {
    render() {
        return (
            <div className="media-singer-recommend">
                <div className="user-login-box">
                    <p>登录ONE WORD音乐，可以享受无限收藏的乐趣，并且无限同步到手机, 还犹豫什么</p>
                    <button type="button" className="media-btn-login">用户登录</button>
                </div>
                <p className="singer-titles">推荐歌手</p>
                <div className="singer-box">
                {
                    SingerArray.map((item, index) => {
                        return  <div className="singer-cell" key={index}>
                                    <img className="singer-avatar" src={item.sin_avatar} alt="avatar" />
                                    <div className="singer-textContent">
                                        <p className="singer-username">{item.sin_name}</p>
                                        <p className="singer-summary">{item.sin_summary}</p>
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default SingerRecommend;