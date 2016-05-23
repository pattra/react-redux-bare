import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import '../sass/app.scss'

import App from './containers/App'
import About from './components/About'
import TodoContainer from './containers/TodoContainer'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="todos" component={TodoContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
