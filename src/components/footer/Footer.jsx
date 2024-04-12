import React from "react";
import "./footer.css";
import { TiHomeOutline } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDribbble } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Kian Curran Mahon</a>

      <ul className="permaLinks">
        <li> <a href="#" className="permalink">Home</a></li>
        <li> <a href="#about" className="permalink">About me</a></li>
        <li> <a href="#experience" className="permalink">Experience</a></li>
        <li> <a href="#portfolio" className="permalink">Portfolio</a></li>
        <li> <a href="#contact" className="permalink">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com" target="_blank"><FaGithub/></a>
          <a href="https://dribble.com" target="_blank"><SiDribbble/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kian Curran Mahon 2024. All rights reserved</small>
      </div>
  </footer>
  )
};
export default Footer;
