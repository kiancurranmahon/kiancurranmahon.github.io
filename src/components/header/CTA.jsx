import React from 'react';
import { SiLeetcode } from "react-icons/si";
import CV from '../../assets/cv.pdf';


const CTA = () => {
  return (
    <>
      <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

      <div className='widgets'>
              <article className='widget_content'>
                <div>
                  <div className='inline_Horizontal'>
                    <SiLeetcode className='widget_icon'/>
                    <h4>LeetCode Stats</h4>
                  </div>
                        <small className="text-light">instert</small>
                </div>
              </article>
      </div>
      

      </>
  )
}

export default CTA
