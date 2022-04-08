// Import Core React Modules
import React from 'react'

// Import deconstructed icon components from React-Icons
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div id="results-panel">
      <h2>Contact Footy Bytes</h2>
      <div className="contact-body">
        <p>Thanks for visiting Footy Bites!</p>
        <p>Keep in touch with us via our socials:</p>
        <div className="socials">
          <p>
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><span className="social-logo"><FaFacebookSquare /></span> Facebook</a>
          </p>
          <p>
            <a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><span className="social-logo"><FaTwitterSquare /></span> Twitter</a>
          </p>
          <p>
            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><span className="social-logo"><FaInstagramSquare /></span> Instagram</a>
          </p>
        </div>
        <p>Or drop us a line via email:</p>
        <div className="socials">
          <p>
            <a href="mailto:contact@footybytes.com" rel="noreferrer" target="_blank"><span className="social-logo"><RiMailSendLine /></span> contact@footybytes.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;