import React from "react";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Item 1",
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image: IMG2,
    title: "Item 2",
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: IMG3,
    title: "Item 3",
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image: IMG4,
    title: "Item 4",
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: IMG5,
    title: "Item 5",
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: IMG6,
    title: "Item 6",
    github: 'https://github.com',
    demo: 'https://google.com'
  }
]

const portfolio = () => {
  return (
     <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live</a>
                </div>
              </article>
            )
          })
        }
        </div>

    </section>
  )
};
export default portfolio;
