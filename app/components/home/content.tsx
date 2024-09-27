"use client";

import React from 'react';
import styled from 'styled-components';
import Button from '../ui/buttonm/buttom';

const BannerWrapper = styled.div`
  position: relative; 
  z-index: 2; 
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 100px 20px;
  color: white;
  margin-top: 10rem;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #00d8ff;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 64px;
  font-weight: 900;
  color: #ff007c; 
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SecondaryTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #cccccc; /* Color gris claro */
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  margin-bottom: 50px;
`;

const EventBanner: React.FC = () => {
  return (
    <BannerWrapper>
      <Subtitle>Tonight</Subtitle>
      <MainTitle>Progressive</MainTitle>
      <SecondaryTitle>Trance Night</SecondaryTitle>
      <Description>
        Morbi sit amet eros massa. Vestibulum dignissim varius dictum. Nunc vehicula sed est vitae elementum. Quisque vitae metus sit amet orci porttitor pellentesque.
        <Button/>
      </Description>
    </BannerWrapper>
  );
};

export default EventBanner;
