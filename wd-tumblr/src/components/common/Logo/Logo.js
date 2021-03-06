import React from 'react';
import './Logo.scss';
import logo from '../../../assets/images/tumblrLogo.png';

const Logo = ({ img, alt }) => (
  <div>
    <h1 className="logo">
      <a className="logoLink">
        <img src={logo} alt={alt} />
      </a>
    </h1>
  </div>
);

export default Logo;
