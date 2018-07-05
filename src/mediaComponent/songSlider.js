import React from 'react';
import '../assets/css/media/songSlider.css'
import SongImage from '../data/slider'

const ImageArray = SongImage.media
class SliderImage extends React.Component {
    componentWillMount() {
    }
    componentDidMount() {
        this.handleShowSlides(this.state.selectIndex)
        this.SliderTime = setInterval(()=>{
            this.handleShowSlides(this.state.selectIndex)
            this.setState({
                selectIndex : this.state.selectIndex + 1
            })
        }, 1500)
    }
    componentWillUnmount() {
        clearInterval(this.SliderTime)
    }
    constructor(props) {
        super(props)
        this.state = {
            selectIndex : 1
        }
        this.handleShowSlides = this.handleShowSlides.bind(this)
        this.handlePre = this.handlePre.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }
    handleShowSlides (n) {
        let slides = document.getElementsByClassName('media-slide-image')
        let dots = document.getElementsByClassName('dot')
        if(n > slides.length) {
            n = 1 
            this.setState({
                selectIndex : 1
            })
        }  
        if(n < 1) {
            this.setState({
                selectIndex : slides.length
            })
        }
        if(n === 0){
            n = 1
        }
        for(let i = 0 ; i < slides.length; i++){
            slides[i].style.display = 'none'
        }
        for(let j = 0; j < dots.length; j++){
            dots[j].className = dots[j].className.replace(' active', '')
        }
        slides[n-1].style.display = 'block'
        dots[n-1].className += ' active'
    }
    handlePre () {
        this.setState({
            selectIndex : this.state.selectIndex-1
        })
        this.handleShowSlides(this.state.selectIndex)
    }
    handleNext () {
        this.setState({
            selectIndex : this.state.selectIndex+1
        })
        
        this.handleShowSlides(this.state.selectIndex)
    }
    handleCurrent (index) {
        this.setState((pre)=>{
            return {selectIndex : index }
        })
        this.handleShowSlides(this.state.selectIndex)
    }
    handleArrowIconOver = () => {
        let arrows = document.getElementsByClassName('arrow')
        for(let i = 0; i < arrows.length; i++){
            arrows[i].style.visibility = 'visible'
        }
    }
    handleArrowIconOut = () => {
        let arrows = document.getElementsByClassName('arrow')
        for(let i = 0; i < arrows.length; i++){
            arrows[i].style.visibility = 'hidden'
        }
    }
    render () {
        return (
            <div className="media-slides"  onMouseOver={this.handleArrowIconOver} onMouseOut={this.handleArrowIconOut}>
                <p className="media-title">精彩推荐</p>
                <div className="media-container">
                    <div className="arrow icon-left" onClick={this.handlePre}>
                        <img src={require('../assets/img/arrow_left.png')} className="MediaArrowImage" alt="arrow-left"/>
                    </div>
                    {
                        ImageArray.map((item, index) => {
                            return  <div className="media-slide-image fade" key={index}>
                                        <img src={item.m_image1} alt={index} />
                                        <img src={item.m_image2} alt={index} />
                                    </div>
                        })
                    }
                    <div className="arrow icon-right" onClick={this.handleNext}>
                        <img src={require('../assets/img/arrow_right.png')} className="MediaArrowImage" alt="arrow-right"/>
                    </div>
                </div>
                <div className="media-dot">
                    {
                        ImageArray.map((item, index) => {
                            return  <span key={index} className="dot" onClick={this.handleCurrent.bind(this, index+1)} ></span> 
                        })
                    }
                </div>
            </div>
        )  
    }
}

export default SliderImage;