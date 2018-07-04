import React from 'react';
import Header from '../basicComponent/Header'
import Slider from '../mediaComponent/songSlider'

class Music extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Slider />
            </div>
        );
    }
}

export default Music;