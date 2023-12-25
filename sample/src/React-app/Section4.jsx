import React, { useState, useEffect } from "react";
import "./Css/Section4.css";
import bird from "./images/bird.PNG";
import dog from "./images/dog.png";
import nature from "./images/nature.jpg";
import Background4 from "./images/background4.jpg";

const testimonials = [
  {
    id: 1,
    imagesrc: bird,
    title: "$39",
    subtitle: "start",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.",
    button: "Buy Now",
  },
  {
    id: 2,
    imagesrc: dog,
    title: "$59",
    subtitle: "Basic",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.",
    button: "Buy Now",
  },
  {
    id: 3,
    imagesrc: nature,
    title: "$89",
    subtitle: "Pro",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu risus sapien pellentesque.",
    button: "Buy Now",
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
    <div
      className="Section4 w-100 h-100 bg-no-repeat d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${Background4})` }}
    >
      <div className="testimonial-carousel " >
        <div className="row">
        <h3 className="text1">OUR PRICING</h3>
              <h2 className="text2"><strong>Lorem ipsum dolor sit amet consectetur.</strong></h2>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="col" style={{borderStyle:"dotted"}}
              xs={12} md={6} lg={4}
            >
             
              <div className={`card ${index === currentIndex ? "active" : ""}`}>
                <img
                  src={testimonial.imagesrc}
                  alt="img" id="Section4-img"
                  className="img-thumbnail w-100 "
                  style={{ height: "200px",borderRadius:"30px" }} 
                />
                
                <h1 className="Section4card-title"><strong>{testimonial.title}</strong></h1>
                <h5 className="Section4card-subtitle"><strong>{testimonial.subtitle}</strong></h5>
                <p>{testimonial.content}</p>
                <div className="Section4button-container">
                <button className="Section4-button">{testimonial.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-indicator">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
