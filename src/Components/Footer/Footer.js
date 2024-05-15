// Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ activePage }) => {
  return (
    <footer className={`footer ${activePage.replace('/', '')}`}>
      <p>Footer content goes here</p>
    </footer>
  );
}

export default Footer;