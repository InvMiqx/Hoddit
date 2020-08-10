import React from 'react';
import logo from '../images/logo2.png';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <a className="header-block">about</a>
      <a className="header-block">r/hoddit</a>
    </div>
  );
};

export default Header;
