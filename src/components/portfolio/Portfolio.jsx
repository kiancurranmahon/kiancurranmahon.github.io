import React, { useState } from "react";
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
    title: "Model F1 Car",
    shortdesc: "A model F1 car built for my leaving cert engineering project. The shell is 3D printed and the car is powered by a microbit controller",
    longdesc:[
      "A model F1 car built for my leaving cert engineering project.",
      "It features a 3D printed shell in PLA filament. This was designed in Solidworks. ",
      "The floor is constructed using transparent acrylic and the wheels are made from cardboard.",
      "The internal controller is a BBC Microbit Controller. It runs preset sequences when the buttons beside the halo are pressed."
    ],
    carousel: [IMG1, IMG2, IMG3], // image   carousel
    usePopup: true,
    useDemo: false,
    more: ' ',
  },
  {
    id: 2,
    image: IMG2,
    title: "React chat app",
    shortdesc: "Simple chat webapp that uses React.js and Firebase. It allows multiple users to chat in one chat room. Users sign-in with Google. ",
    usePopup: false,
    useDemo: true,
    github: 'https://github.com/kiancurranmahon/react-super-chat',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: IMG3,
    title: "Image Recognition Model",
    shortdesc: "Python image recognition model which takes in a user supplied image and gives an estimate of whats in the image. ",
    usePopup: false,
    useDemo: false,
    github: 'https://github.com/kiancurranmahon/react-super-chat',
    //demo: 'https://google.com'
  },
  
];

// Popup to show more of project if there is no github.
const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel

  const openPopup = (item) => {
    setActiveItem(item);
    setCurrentImageIndex(0); // Reset to the first image
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setActiveItem(null);
  };

  const nextImage = () => {
    if (activeItem && activeItem.carousel) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeItem.carousel.length);
    }
  };

  const prevImage = () => {
    if (activeItem && activeItem.carousel) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + activeItem.carousel.length) % activeItem.carousel.length
      );
    }
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <h2>{item.title}</h2>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.shortdesc}</p>
            <div className="portfolio__item-cta">
              {item.usePopup ? (
                // Show "More" button for popup
               <>
                  <button className="btn" onClick={() => openPopup(item)}>View</button>
              </>
                
              ) : item.useDemo ?  (
                // Show "GitHub" and "Demo" buttons for external links
                <>
                  <a href={item.github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  <a href={item.demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live</a>
                  </>
                  
              ) : (
                // Show "GitHub" only 
                <>
                  <a href={item.github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  </>
                  
              )}
            </div>
          </article>
        ))}
      </div>

      {showPopup && activeItem && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h1>{activeItem.title}</h1>

            <div className="carousel">
                <button className="carousel-button prev" onClick={prevImage}>&lt;</button>
                <img src={activeItem.carousel[currentImageIndex]} alt={activeItem.title} />
                <button className="carousel-button next" onClick={nextImage}>&gt;</button>
            </div>

           {activeItem.longdesc.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
            
            <button className="btn btn-secondary" onClick={closePopup} >Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
