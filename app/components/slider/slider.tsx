"use client";

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import EventBanner from '../home/content';

const BackgroundSliderContainer = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1; 
`;

const slideAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.active {
    opacity: 1;
    animation: ${slideAnimation} 15s ease-in-out infinite alternate;
  }
`;

const GreyOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.719); 
  z-index: 0; 
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.26) 1px,
    transparent 1px
  );
`;

const BackgroundSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'http://acidum.like-themes.com/wp-content/uploads/2017/09/slide2.jpg',
    'http://acidum.like-themes.com/wp-content/uploads/2017/09/slide3.jpg',
    'http://acidum.like-themes.com/wp-content/uploads/2017/09/slide1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <BackgroundSliderContainer>
      {images.map((img, index) => (
        <Slide
          key={index}
          className={index === currentImageIndex ? 'active' : ''}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <GreyOverlay />
      <GridOverlay />
      <EventBanner />
    </BackgroundSliderContainer>
  );
};

export default BackgroundSlider;