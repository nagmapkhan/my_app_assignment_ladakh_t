
import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Arjun Raghav', review: 'A wonderful stay with excellent service.' },
  { name: 'Anand Solanki', review: 'The views and connectivity were top-notch.' },
  
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Guests Say</h2>
    <div className="testimonial-list">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.review}</p>
          <h4>- {testimonial.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
