import React from 'react';
import "../css/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-quote">
        <p className='wording'>“We learn from failure, not from success!”</p>
        <p>~Bram Stoker</p>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: ranil-nimalasena@dai-ki.co.jp</p>
        <p>Phone: +94 11 266 9050 / +94 76 655 1128 / +94 77 771 7215 / +94 76 858 3316</p>
        <p>Address: Daiki Lanka (Pvt) Ltd. (Daiki Group Japan)
          24/9, 1st Lane, Gothami Road,
          Borella, Colombo 08,
          Sri Lanka</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024  Daiki Lanka (Pvt) Ltd. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
