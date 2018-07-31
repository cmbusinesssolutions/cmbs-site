import React, { Component } from 'react'
import { ReCaptcha } from 'react-recaptcha-google'
//

import firebaseDB from '../firebaseConfig';
// import Recaptcha from '../components/Recaptcha'
// const endpoint = "https://elbwov6546.execute-api.us-east-2.amazonaws.com/prod/recaptcha-ms-aws"
const endpoint = "https://fm087u0lii.execute-api.us-east-2.amazonaws.com/prod/recaptcha-request-api"
let captchaToken

const transmitFormData = (body) => {
  fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(body)
  })
    .catch(err => console.log(`Form data transmission error: ${err}`))
}

class Contact extends Component {
  constructor() {
    super()
    this.state = { messages: [] }
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  componentDidMount() {
    if (this.captcha) {
      console.log("started, just a second...")
      this.captcha.reset();
      this.captcha.execute();
    }
  }

  onLoadRecaptcha() {
    if (this.captcha) {
      this.captcha.reset();
      this.captcha.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
    captchaToken = recaptchaToken
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
    const captcha = captchaToken
    console.log(`Captcha token is: ${captchaToken}`)

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
      "message": message,
      "g-recaptcha-response": captcha
    }
    console.log(`Body content is: ${body}`)
      
    // Transmit form data
    transmitFormData(body)
    // }
    /* Send the message to Firebase */
    firebaseDB.database().ref('messages').push(body)
    // Form submission acknowledgement and reset
    document.getElementById('contact-us').reset()
    document.querySelector('.form-submission-msg').style.display = 'block'
    document.querySelector('.contact-form').style.display = 'none'
    //Auto close contact form window
    setTimeout(() => {
      document.querySelector('.form-submission-msg').style.display = 'none'
      document.querySelector('.contact-form').style.display = 'grid'
    }, 5000)
  }

  render() {
    return (
      <div id="contact" className="contact-form-container">
        <div className="contact-form-heading">
          <h2>Contact Us</h2>
          <p>Reach out to us if you need help with your technology and data initiatives.</p>
        </div>
        <div className="form-submission-msg">
          <div className="form-submission-text">
            <p>You message has been sent. We will contact you shortly.</p>
            <p>Thank you!</p>
          </div>
          
        </div>
        <form 
          onSubmit={this.submitForm.bind(this)}
          id="contact-us"
          className="contact-form" 
          name="contact-us">
          <p>
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" required />
          </p>
          <p>
            <label htmlFor="email">Email Address*</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p className="full">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </p>
{/*       
          <div className="full g-recaptcha" data-sitekey="6LddKloUAAAAAPW9DJ_i3azVWbhyj63K_eScTIbv"
              style="transform:scale(0.7);-webkit-transform:scale(0.7);transform-origin:0 0;-webkit-transform-origin:0 0;"></div> */}
          
          <p>
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </p>
          <div className="g-recaptcha">
            <ReCaptcha
              ref={(el) => { this.captcha = el; }}
              size="invisible"
              badge="inline"
              render="explicit"
              sitekey="6LfP2VoUAAAAAAsuI0k1S-sIMkGHQQfxpcYP2Wgw"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />
          </div>

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