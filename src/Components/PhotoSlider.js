import React, { useRef, useState } from 'react';
import "../Components/PhotoSlider.css";
import ArenaGoggles from "../Assets/Photos/ArenaGoggleResized 2.png";
import Butterfly from "../Assets/Photos/ButterflyResized 2.png";
import ChampionshipPool from "../Assets/Photos/ChampoinshipPoolResized 2.png";
import FrontCrawl from "../Assets/Photos/FrontCrawl 4.png";
import JumpingInPool from "../Assets/Photos/JumpingInPoolResized 2.png";
import Swimmer from "../Assets/Photos/Swimmer 2.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PhotoSlider() {
  // Define the photos array inside the component
  const photos = [
    ArenaGoggles, Butterfly, ChampionshipPool, 
    FrontCrawl, JumpingInPool, Swimmer
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Added state to track active index
  const photosContainerRef = useRef(null);
   

  const updateActiveIndex = (newScrollLeft) => {
    const container = photosContainerRef.current; // Get the current container
    const scrollAmount = container ? container.clientWidth - 400 : 0; // Use container's width to calculate scrollAmount
    const newIndex = Math.round(newScrollLeft / scrollAmount);
    setActiveIndex(newIndex);
  };

const scrollPhotos = (direction) => {
  const container = photosContainerRef.current;

  if (container) {
    const currentScroll = container.scrollLeft; // Define currentScroll here
    const scrollAmount = container.clientWidth - 400; // Calculate scroll amount here, within the function
    
    const newScrollLeft = direction === 'left'
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;

    container.scrollLeft = newScrollLeft;
    updateActiveIndex(newScrollLeft);
  }
};

// Function to handle dot click
const handleDotClick = (index) => {
const container = photosContainerRef.current;
if (container) {
const scrollWidth = container.clientWidth - 400; // Same calculation here for consistency
const newScrollLeft = index * scrollWidth;
container.scrollLeft = newScrollLeft;
setActiveIndex(index); // Update the active index
}
};

  return (
    <div className="slider-container">
        <div className='arrow-photo-arrow'>
        <div className="slider-controls">
        <button className="slider-arrow left" onClick={() => scrollPhotos('left')}>
          <ArrowBackIosIcon style={{color: "white"}} />
        </button>
      </div>

      <div className='photos slider' ref={photosContainerRef}>
        {photos.map((photo, index) => (
          <div className='tile' key={index}>
            <img src={photo} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">

      <button className="slider-arrow right" onClick={() => scrollPhotos('right')}>
          <ArrowForwardIosIcon style={{color: "white"}}/>
        </button>
        </div>
      </div>

      <div className="slider-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)} // Updated to use the new handler
          />
        ))}
      </div>      
    </div>
  );
}
