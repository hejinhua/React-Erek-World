import React from 'react';
import '../assets/css/basic/slides.css'

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
        let slides = document.getElementsByClassName('slide-image')
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
        slides[n-1].style.display = 'block'
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
    render () {
        return (
            <div className="container-slides">
                <div className="mySlides">
                    <div className="arrow" onClick={this.handlePre}>
                        <img src={require('../assets/img/arrow_left.png')} className="ArrowImage" alt="arrow-left"/>
                    </div>
                    <div className="slide-image fade">
                        <img src="http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-4.png" alt="img1"/>
                    </div>
                    <div className="slide-image fade">
                        <img src="http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-2.png" alt="img2"/>
                    </div>
                    <div className="slide-image fade">
                        <img src="http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-3.png" alt="img3"/>
                    </div>
                    <div className="slide-image fade">
                        <img src="http://heitang.chuangzaoshi.com/wp-content/uploads/2017/05/C-1.png" alt="img4"/>
                    </div>
                    <div className="arrow" onClick={this.handleNext}>
                        <img src={require('../assets/img/arrow_right.png')} className="ArrowImage" alt="arrow-right"/>
                    </div>
                </div>
            </div>
        )  
    }
}

export default SliderImage;