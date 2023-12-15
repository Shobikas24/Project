import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  // Testimonial data (you can replace this with your actual data)
  const testimonials = [
    {
      id: 1,
      image: 'url_to_image_1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.',
    },
    {
      id: 2,
      image: 'url_to_image_2.jpg',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
          <p>{testimonial.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
