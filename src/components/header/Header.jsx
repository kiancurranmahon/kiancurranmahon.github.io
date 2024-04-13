import React from "react";
import ME from '../../assets/me.png';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
  <header>
      <div className="container header__container">
        <div className="header__top">
          <HeaderSocials />
          <div className="header__text">
            <h3>Hello I'm</h3>
            <h1>Kian Curran Mahon</h1>
            <h3 className="text-light">Computer Science and Software Engineering Major</h3>
          </div>
          
        </div>

        <CTA />
        <div className="me">
          <img src={ME} alt=""></img>
        </div>


      </div>
      
    </header>
  )
};
export default Header;


//<a href="#contact" className="scroll__down">Scroll Down</a>
  /* 

        */
        