import React from 'react';
import '../assets/css/basic/tagbtn.css'

class TagButton extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            defaultClass : 'TagButton',
            RandomClass : 'TagColor-'
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                {this.props.buttonList.map((item,index) => {
                    return <button type="button" key={index} className={`${this.state.defaultClass} ${this.state.RandomClass}${index}`} >
                                {item.text}
                            </button>
                })}
            </div>
        )
    }
}

export default TagButton;