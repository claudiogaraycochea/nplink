import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  console.log('scrolling: ', setScrolling);
  console.log('scrollTop: ', scrollTop);

  return (
    <header className={!(scrollTop>0) ? 'top': ''}>
      <div className='nav-logo'/>
      <Link to='/login' className='btn-login'>
        Login
      </Link>
    </header>
  );
};

export default Header;