import React from 'react';
import bannerImage from "../images/Banner.jpg";
import '../css/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-banner">
      <img src={bannerImage} alt="Contact Us Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Contact Us</h1>
      </div>
    </div>
    <div className="contact-details">
      <div className="address-card">
        <h3>Our Office</h3>
        <p>Daiki Lanka (Pvt) Ltd. (Daiki Group Japan)</p>
        <p>24/9, 1st Lane,</p>
        <p>Gothami Road,</p>
        <p>Borella,</p>
        <p>Colombo 08, Sri Lanka</p>
        <p>Phone: 011 266 9050 / 076 655 1128 / 077 771 7215 / 076 858 3316</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.853024451336!2d127.02860031515254!3d37.49809507981248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14e8e84e2b1%3A0xe0c5f2b5f4cbd8b3!2sGangnam%20Station!5e0!3m2!1sen!2skr!4v1638316093366!5m2!1sen!2skr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Daiki Lanka Location"
        ></iframe>
      </div>
    </div>
    <div className="contact-form-container">
      <h2>Get in touch with us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name <span className="required">*</span></label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name <span className="required">*</span></label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment <span className="required">*</span></label>
          <textarea className="form-control" id="comment" rows="5" placeholder="Enter your comment" required></textarea>
        </div>
        <button type="submit" className="btn btn-custom">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact;
