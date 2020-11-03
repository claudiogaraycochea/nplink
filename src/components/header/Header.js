import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/dashboard/'><div className='nav-logo'/></Link>
      <Link to='/login' className='btn-login'>
        Login
      </Link>
    </header>
  );
};

export default Header;