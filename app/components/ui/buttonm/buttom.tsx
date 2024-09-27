import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #ff007c; 
  color: white; 
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #d60066; 
  }
`;

const Button: React.FC = () => (
  <StyledButton>
    Haz clic aquí
  </StyledButton>
);

export default Button;
