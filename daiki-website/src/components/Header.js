import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';

const Header = () => (
  <header className="bg-white py-3" >
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <img src={logo} alt="Company Logo" className="logo" />
      <Navbar />
    </div>
  </header>
);

export default Header;

