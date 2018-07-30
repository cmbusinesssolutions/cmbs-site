import React, { Component } from 'react'
import { Router, Link } from 'react-static'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCaretDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faCaretDown, faTimesCircle)

const contactUs = () => {
  window.location = "/contact"
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section section-footer-content">
        <div className="cta-group">
          <div className="cta-text">
            <p>How can we help?</p>
          </div>
          <button onClick={contactUs} id="footer-cta-btn" className="cta-btn contact-btn">CONTACT US</button>
        </div>
        <div className="sitemap">
          <div className="sitemap-section">
            <h3 className="sitemap-heading">Services</h3>
            <hr className="sitemap-hr" />
            <ul className="list-unstyled">
              <li><Link to="/software_dev">Software Development</Link></li>
              <li><Link to="/data_services">Data Engineering & Analytics</Link></li>
              <li><Link to="/cio">Virtual CIO</Link></li>
            </ul>
          </div>
          <div className="sitemap-section">
            <h3 className="sitemap-heading">Company</h3>
            <hr className="sitemap-hr" />
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="sitemap-section">
            <h3 className="sitemap-heading">Connect</h3>
            <hr className="sitemap-hr" />
            <ul className="list-unstyled">
              <li><Link to="/contact" className="contact-btn">Contact Us</Link></li>
              <li>
                <div className="social-media-icons">
                  <Link to="#" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </Link>
                  <Link to="#" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </Link>
                  <Link to="/contact" className="contact-btn">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="section section-footer-copyright">
        <div id="copyright-info">
          <p>©2018 CM Business Solutions</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer