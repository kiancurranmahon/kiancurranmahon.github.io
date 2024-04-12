import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
const Experience = () => {
  return (
     <section id='experience'>
      <h5>What are my skills?</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__webdev">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
             </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Software Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Processing</h4>
                <small className="text-light">Intermediate</small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

        </div>

        </div>
        </div>
    </section>
  )
};
export default Experience;
