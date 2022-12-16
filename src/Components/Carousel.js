import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="/assets/carousel-etro.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="/assets/carousel-prada.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel