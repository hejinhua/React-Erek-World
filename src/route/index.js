import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Article from '../components/Article';
import Music from '../components/Music';
import Sentence from '../components/Sentence';

const BasicRouter = () => (
    <BrowserRouter>
        <div>
            <Redirect to="/home" />
            <Route path="/home" component={Home}/>
            <Route path="/music" component={Music}/>
            <Route path="/article" component={Article}/>
            <Route path="/sentence" component={Sentence}/>
        </div>
    </BrowserRouter>
)

export default BasicRouter;
