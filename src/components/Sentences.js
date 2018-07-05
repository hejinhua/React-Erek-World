import React , { Component } from 'react';
import Header from '../basicComponent/Header'
import NavBar from '../sentenceComponent/NavBar'
import '../assets/css/Sentence.css'
import BarList from '../data/sentence.js'
import TextArea from '../sentenceComponent/Textarea' 

const NavBarList = BarList.NavBar
const LabelList = BarList.Label
const ArticleList = BarList.ArticleList
const AuthorList = BarList.AuthorList
const BookList = BarList.OneWordBook

class Sentence extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="MainSentence">
                    <div className="Sentence-left">
                        <NavBar text="标签" List={NavBarList} Label={LabelList} ArticleList={ArticleList}/>
                    </div>
                    <div className="Sentence-right">
                        <div className="textarea">
                            <TextArea AuthorList={AuthorList} BookList={BookList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sentence;