import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";

import { useState } from "react";

import "./nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      < a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <TiHomeOutline /></a>
      < a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <MdInfoOutline /></a>
      < a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <RiUserStarLine /></a>
      < a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <BsBriefcase /></a>
      < a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMessage /></a>
    </nav>
  )
};
export default Nav;
