import React , { Component } from 'react';
import '../assets/css/media/hotRecommend.css'
import Music from '../data/music'

const labelText = Music.Label
const AlbumImageArray = Music.hotRecommend

class HotRecommend extends Component {
    render() {
        return (
            <div className="media-hot-recommend">
                <div className="hot-container">
                    <p className="hot-title">热门推荐</p>
                    <ul className="ablum-flex">
                    {
                        labelText.map((item, index) => {
                            return  <li key={ index }>{item.text}</li>
                        })
                    }
                    </ul>
                </div>
                <div className="ablum-box">
                    {
                        AlbumImageArray.map((item, index) => {
                            return  <div className="album-cell" key={index}>
                                        <img src={item.ablum_img} alt="1" />
                                        <p className="ablum_text">{item.ablum_name}</p>
                                        <p className="ablum_author">by {item.ablum_author}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HotRecommend;