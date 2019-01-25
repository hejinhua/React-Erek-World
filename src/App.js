import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import Index from './views/Index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = configStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
            <Switch>
              <Route path='/' component={Index} exact />
              {/* <Route path='/Authorize' component={Authorize} exact /> */}
              {/* <Route path='/login' component={Login} exact /> */}
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
