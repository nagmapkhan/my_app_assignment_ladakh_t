
import React from 'react';
import './Services.css';

const services = [
  { name: 'High-Speed Internet', description: 'Fiber connections to all scenic areas.' },
  { name: 'Transportation', description: 'Transport available to/from all spots.' },
  { name: 'Food Delivery', description: 'Healthy meals delivered daily.' },
  { name: 'Homely Stay', description: 'Spacious, comfortable interiors.' },
  // Add more services as needed
];

const Services = () => (
  <section className="services" id="services">
    <h2>Our Services</h2>
    <div className="services-list">
      {services.map((service, index) => (
        <div key={index} className="service">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
