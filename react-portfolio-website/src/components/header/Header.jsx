import React from "react";
import ME from '../../assets/me.png';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
  <header>
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kian</h1>
        <h5 className="text-light">Computer Science Major</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt=""></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
};
export default Header;
