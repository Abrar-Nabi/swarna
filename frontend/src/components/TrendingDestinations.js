import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/TrendingDestinations.css";

// Import destination images
import Destination1 from "../assets/Khalsa college.jpg";
import Destination2 from "../assets/Jallianwala Bagh.jpg";
import Destination3 from "../assets/Wagah Border.JPG";
import Destination4 from "../assets/Town Hall.jpg";
import Destination5 from "../assets/Bhagwan Valmiki Tirath Sthal.jpg";
import Destination6 from "../assets/Durgiana Temple.jpg";
import Destination7 from "../assets/Gobindgarh Fort.jpg";
import Destination8 from "../assets/Gurudwara Saragarhi Sahib.jpg";
// import Destination9 from "../assets/Golden Temple.png";

// Destination data array
const destinations = [
  { image: Destination1, name: "Khalsa College" },
  { image: Destination2, name: "Jallianwala Bagh" },
  { image: Destination3, name: "Wagah Border" },
  { image: Destination4, name: "Town Hall" },
  { image: Destination5, name: "Bhagwan Valmiki Tirath Sthal" },
  { image: Destination6, name: "Durgiana Temple" },
  { image: Destination7, name: "Gobindgarh Fort" },
  { image: Destination8, name: "Gurudwara Saragarhi Sahib" },
  // { image: Destination9, name: "Golden Temple" },
];

const TitleSection = () => {
  return (
    <div className="title-section-container">
      <div className="sec-title centered">
        <h2>Destinations</h2>
        <div className="text">
        From the iconic Golden Temple to bustling bazaars, Amritsar offers a wide range of destinations to explore the city’s rich heritage – and Swarna Trails curates the perfect tours for every visitor.
        </div>
        <div className="Tbig-title big-title">Trending</div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="three-item-carousel"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="destinations-block style-two">
              <div className="des-inner-box">
                <div className="image">
                  <img src={dest.image} alt={dest.name} />
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <h3>{dest.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleSection;
