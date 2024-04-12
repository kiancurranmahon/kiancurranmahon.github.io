import React from "react";
import { FaAward } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { TiFolderOpen } from "react-icons/ti";

import ME from '../../assets/me-about.jpg';
import "./about.css";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Me Image'/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>100% happy</small>
            </article>

            <article className="about__card">
              <PiUsersBold   className="about__icon" />
              <h5>Clients</h5>
              <small>very heppy </small>
            </article>

            <article className="about__card">
              <TiFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>very few </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolor quaerat sit aliquid facere cum earum perferendis perspiciatis laborum consequatur ducimus, obcaecati sint porro veniam iste ipsum optio, provident fugit!
          </p>
         <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
};

export default About;
