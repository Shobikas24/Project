// TestimonialCarousel.js
import React, { useState, useEffect } from 'react';
import './Css/A.css';
import bird from './images/bird.PNG';
import dog from './images/dog.png';
import girl from './images/girl.png';
import Background4 from './images/background4.jpg';

const testimonials = [
  {
    id: 1,
    imagesrc:bird,
    title: '$39',
    subtitle:'start',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.',
    button:'Buy Now',
  },
  {
    id: 2,
    imagesrc:dog,
    title: '$59',
    subtitle:'Basic',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.',
    button:'Buy Now',
  },
  {
    id: 3,
    imagesrc:girl,
    title: '$89',
    subtitle:'Pro',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.',
    button:'Buy Now',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Section4 w-100 h-100 bg-no-repeat d-flex align-items-center justify-content-center"      style={{ backgroundImage: `url(${Background4})` }}
    >
    <div className="testimonial-carousel " style={{borderStyle:"dotted"}}>
      <div className="row">
        <h1></h1>
      </div>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="col" style={{borderStyle:"double"}}>
            <h3>Ou</h3>
            <div className={`card ${index === currentIndex ? 'active' : ''}`}>
              <img src={testimonial.imagesrc} alt="img" className="img-thumbnail w-50"/>
              <h2>{testimonial.title}</h2>
              <h3>{testimonial.subtitle}</h3>
              <p>{testimonial.content}</p>
              <button>{testimonial.button}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicator">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
