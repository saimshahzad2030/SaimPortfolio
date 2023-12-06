// Layout.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Layout.module.css'
import {IoIosArrowUp } from 'react-icons/io';
// import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  
  const [showButton, setShowButton] = useState(false);

    const handleMoveToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    };
  const handleScroll = () => {
    const offset = window.scrollY;
    setShowButton(offset > 100);
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={style.navbarDiv}>
      <Navbar scrolled={scrolled} />
      </div>
      {children}
      <div className={style.gotoTopDiv}>
        {
            showButton && (
        <button onClick={handleMoveToTop}>
          <IoIosArrowUp size={30}/>
        </button>
      )
        }
      </div>
    </div>
  );
};

export default Layout;
