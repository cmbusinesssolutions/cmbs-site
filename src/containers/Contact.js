import React, { Component } from 'react';
//

import firebaseDB from '../firebaseConfig';

class Contact extends Component {
  constructor() {
    super()
    this.state = { messages: [] }
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = firebaseDB.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    // Get input values
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    // const captcha = getInputVal('g-recaptcha-response')

    // if (
    //   captcha === undefined ||
    //   captcha === '' ||
    //   captcha === null
    // ) {
    //   alert('Please select CAPTCHA verification')
    // } else {
      const body = {
        "name": name,
        "email": email,
        "subject": 'From CMBS.COM',
        "message": message
    //     "g-recaptcha-response": captcha
      }
    //   // reCAPTCHA verification
    //   recaptchaRequest(body)
    // }
    /* Send the message to Firebase */
    firebaseDB.database().ref('messages').push(body);
  }

  render() {
    return (
      <div id="contact" className="contact-form-container">
        <div className="contact-form-heading">
          <h2>Contact Us</h2>
          <p>Reach out to us if you need help with your technology and data initiatives.</p>
        </div>
        <form 
          onSubmit={this.submitForm.bind(this)}
          className="contact-form" 
          name="contact-me">
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