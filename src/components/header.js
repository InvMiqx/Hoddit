import React from 'react';
import logo from '../images/logo4.png';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <a href="https://www.reddit.com/r/hoddit/" className="header-block">r/hoddit ⮞</a>
    </div>
  );
};

export default Header;
