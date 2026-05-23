"use client"
import React, { useState } from 'react'
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav,setshowNav] =useState(false);
  const openhandler = () => {
    setshowNav(true);
  };
  const closehandler = () => {
    setshowNav(false);
  };

  return (
    <div>
      <Nav openNav={openhandler} />
      <MobileNav showNav={showNav} closeNav={closehandler} />
    </div>
  )
}

export default ResponsiveNav;
