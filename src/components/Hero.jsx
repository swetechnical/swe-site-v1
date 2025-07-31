// components/Hero.js
'use client';

import React from 'react';
import Link from 'next/link';

// Accept title, description, and imageSrc as props
const Hero = ({ title, description, imageSrc }) => {
  return (
    <section
      className="hero-section-new d-flex align-items-center justify-content-center text-white text-center position-relative"
      // Dynamically set background-image using imageSrc prop
      style={{
        backgroundImage: `url(${imageSrc})`, // This makes the image dynamic
        backgroundSize: 'cover',             // Ensures the image covers the entire area
        backgroundPosition: 'center',        // Centers the image
        minHeight: '70vh',                   // Ensures a minimum height for the hero section
      }}
    >
      {/* This overlay should still work on top of the dynamic background */}
      {/* Note: If w-90 h-90 doesn't cover the entire section, you might
                 want to adjust it in your CSS or here to w-100 h-100. */}
      <div className="hero-overlay-new position-absolute top-0 start-0 w-90 h-90"></div>
      <div className="hero-content-new position-relative z-1 p-3">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">{title}</h1>
          <p className="lead mb-4">{description}</p>
          {/* Add a "Join Us" button if desired, or remove if not universally needed for Hero */}
       
        </div>
      </div>
    </section>
  );
};

export default Hero;