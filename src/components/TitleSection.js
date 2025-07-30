import React from "react";
import PackageCard from "./PackageCard";
import "../styles/TitleSection.css"; 
import pk1 from "../assets/hero-bg1.JPG";
import pk2 from "../assets/pk8.JPG"
import pk3 from "../assets/pk4.JPG"

const packages = [
      {
    image: pk3,
    price: "20K",
    title: "Swarna Anubhav",
     Subtitle:  "Not just travel — live the spirit of Punjab.",
    location: "VIP seating at the Wagah Border Ceremony,  Heritage Walk and local sightseeing",
    duration: "2 Days / 2 Nights",

    reviews: "10",
  },
  {
    image: pk1,
    price: "",
    title: "Swarna Virasat",
    Subtitle:  "Coming soon",
    location: "",
    duration: "",
  
    reviews: "",
  },
  {
    image: pk2,
    price: "",
    title: "Swarna Maati",
     Subtitle:  "Coming Soon",
    location: "",
    duration: "",
  
    reviews: "",
  },

];

const TitleSection = () => {
  return (
    <div className="title-section-container">
      <div className="sec-title centered">
        <h2>Perfect Tours</h2>
        <div className="text">
        Swarna Trails – Offering perfectly curated tours for visitors to explore the rich heritage, culture, and charm of Amritsar like never before!”
        </div>
        <div className="big-title">Tours</div>
      </div>

      {/* Tour Packages Section */}
      <div className="package-container">
        {packages.map((pkg, index) => (
          <PackageCard 
            key={index}
            image={pkg.image}
            price={pkg.price}
            title={pkg.title}
            Subtitle={pkg.Subtitle}
            location={pkg.location}
            duration={pkg.duration}
            people={pkg.people}
            reviews={pkg.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default TitleSection;
