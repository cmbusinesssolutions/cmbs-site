import React, { Component } from 'react'
import { Router, Link } from 'react-static'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCaretDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faCaretDown, faTimesCircle)

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.openSlideMenu = this.openSlideMenu.bind(this)
    this.closeSlideMenu = this.closeSlideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openSlideMenu = (e) => {
    e.preventDefault()
    document.getElementById('side-menu').style.width = '300px'
  }

  closeSlideMenu = (e) => {
    e.preventDefault()
    document.getElementById('side-menu').style.width = '0'
  }

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    });
  }

  closeMenu = (e) => {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div id="logo" className="brand"><Link exact to="/">CM Business Solutions</Link></div>
          <ul className="navbar-nav">
            <li><Link exact to="/" className="nav-link">Home</Link></li>
            <li className="dropdown">
              <a className="nav-link dropbtn">Services{' '}
                <FontAwesomeIcon icon={faCaretDown} size='lg' />
              </a>
              <div className="dropdown-content">
                <Link to="/software_dev">Software Development</Link>
                <Link to="/data_services">Data Engineering & Analytics</Link>
                <Link to="/cio">Virtual CIO</Link>
              </div>
            </li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link contact-btn">Contact</Link></li>
          </ul>
          <div onClick={this.openSlideMenu} id="menu-small">&#9776;</div>
        </nav>

        <div id="side-menu" className="side-nav">
          <div className="form-header">
            <p className="brand">
              <Link exact to="/">CM Business Solutions</Link>
            </p>
            <FontAwesomeIcon onClick={this.closeSlideMenu}  id="close-slide" icon={faTimesCircle} />
          </div>
          <hr />
          <ul>
            <li className="dropdown-menu-side">
              <a onClick={this.showMenu} className="dropbtn">Services{' '}
                <FontAwesomeIcon icon={faCaretDown} size='lg' />
              </a>
              {
                this.state.showMenu ? (
                  <ul 
                    className="dropdown-menu show-menu" 
                    ref={(element) => {
                      this.dropdownMenu = element;
                  }}>
                    <li className="side-nav-link nav-sub-link"><Link to="/software_dev">Software Development</Link></li>
                    <li className="side-nav-link nav-sub-link"><Link to="/data_services">Data Engineering & Analytics</Link></li>
                    <li className="side-nav-link nav-sub-link"><Link to="/cio">Virtual CIO</Link></li>
                  </ul>
                )
                : (
                  <ul className="dropdown-menu hide-menu">
                    <li className="side-nav-link nav-sub-link"><Link to="/software_dev">Software Development</Link></li>
                    <li className="side-nav-link nav-sub-link"><Link to="/data_services">Data Engineering & Analytics</Link></li>
                    <li className="side-nav-link nav-sub-link"><Link to="/cio">Virtual CIO</Link></li>
                  </ul>
                )
              }
            </li>
            <li className="side-nav-link"><Link to="/about" >About</Link></li>
            <li className="side-nav-link"><Link to="/contact" className="contact-btn">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav