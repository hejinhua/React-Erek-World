import React from 'react';
import '../assets/css/basic/art.css'
import ArticleList from '../data/article.js'

// const lastStyle = {
//     'border-bottom' : 'none'
// }
class Art extends React.Component{
    constructor(props, context){
        super(props, context)
    }
    
    render(){
        return (
            <div className="TotalArticle">
                {ArticleList.map((item, index)=>{
                    return  <div className="cell" key={index}>
                                <div className="cover">
                                    <img src={item.img} alt={index} />
                                </div>
                                <h3 className="title">{item.title}</h3>
                                <p className="content">{item.summary}</p>
                                <p className="author">
                                    <span>{item.author}</span>
                                    <span>{item.time}</span>
                                </p>
                            </div>
                })}
            </div>
        )
    }
}

export default Art;