import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './views/Index'
import Article from './components/Article'
import Music from './components/Music'
import Sentences from './components/Sentences'

const BasicRouter = () => (
  <BrowserRouter>
    <div>
      <Route path='/' component={Index} exact />
      <Route path='/music' component={Music} exact />
      <Route path='/article' component={Article} exact />
      <Route path='/sentences' component={Sentences} exact />
    </div>
  </BrowserRouter>
)

export default BasicRouter
