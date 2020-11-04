import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='nav-logo'/>
      <Link to='/login' className='btn-login'>
        Login
      </Link>
    </header>
  );
};

export default Header;