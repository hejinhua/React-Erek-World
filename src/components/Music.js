import React from 'react'
import Header from '../basicComponent/Header'
import Slider from '../mediaComponent/SongSlider'
import HotRecommend from '../mediaComponent/HotRecommend'
import SingerRecommend from '../mediaComponent/SingerRecommend'

import '../assets/css/Music.css'

class Music extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <div className='meida-song-container'>
          <div className='media-ablum'>
            <HotRecommend />
          </div>
          <div className='media-recommend'>
            <SingerRecommend />
          </div>
        </div>
      </div>
    )
  }
}

export default Music
