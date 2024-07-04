import React from 'react';
import { Image } from 'react-bootstrap';

const ExampleCarouselImage = ({ imageName, text }) => {
  return (
    <Image
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/images/${imageName}`}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
