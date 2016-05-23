import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import About from '../components/About'

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/about">About</Link>
          <Link to="/todos">Todos</Link>
        </div>
        <div>
          {this.props.children || <About />}
        </div>
      </div>
    )
  }
}

export default App
