import React from 'react';
import logo from '../images/logo2.png';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <a href="" className="header-block">about</a>
      <a href="https://www.reddit.com/r/hoddit/" className="header-block">r/hoddit</a>
    </div>
  );
};

export default Header;
