import React, { Component } from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { loadReCaptcha } from 'react-recaptcha-google'
//
import Routes from 'react-static-routes'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './main.css'

class App extends Component {
  
  componentDidMount() {
    loadReCaptcha()
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default hot(module)(App)
