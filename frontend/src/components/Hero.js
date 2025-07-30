import React, { useEffect, useState } from "react";
import "../styles/Hero.css"; // Ensure you have this CSS file

import heroBg1 from "../assets/hero-bg1.JPG";
import heroBg2 from "../assets/hero-bg2.JPG";
import heroBg3 from "../assets/Jallianwala Bagh.jpg";

const images = [heroBg1, heroBg2, heroBg3];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {images.map((image, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="content-box">
        <h1>
          Visit <span>Amritsar</span>
        </h1>
      
      </div>
    </section>
  );
};

export default HeroSection;
