import React, { Component } from 'react';
//

class Contact extends Component {

  render() {
    return (
      <div id="contact" className="contact-form-container">
        <div className="contact-form-heading">
          <h2>Contact Us</h2>
          <p>Reach out to us if you need help with your technology and data initiatives.</p>
        </div>
        <form className="contact-form" name="contact-me">
          <p>
            <label for="name">Name*</label>
            <input type="text" name="name" id="name" required />
          </p>
          <p>
            <label for="email">Email Address*</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p className="full">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </p>
{/*       
          <div className="full g-recaptcha" data-sitekey="6LddKloUAAAAAPW9DJ_i3azVWbhyj63K_eScTIbv"
              style="transform:scale(0.7);-webkit-transform:scale(0.7);transform-origin:0 0;-webkit-transform-origin:0 0;"></div> */}
          <p>
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </p>
        </form>
        <div className="contact-info">
          <h4 className="contact-info-heading">Email</h4>
          <p><a href="mailto:contact@wilfredmorgan.com">contact@wilfredmorgan.com</a></p>
          <h4 className="contact-info-heading">Locations</h4>
          <p>Orlando, Florida<br />
            <a href="tel:1-407-986-0945">+1 407 986 0945</a>
          </p>
          <p>Manila, Philippines<br />
            <a href="tel:+639951755362">+63 9951755362</a>
          </p>
        </div>        
      </div>
    )
  }
}
export default Contact