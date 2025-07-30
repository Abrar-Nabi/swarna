import React from "react";
import { PiShieldThin, PiAirplaneTakeoffThin } from "react-icons/pi"; // Import thin icons
import "../styles/AboutUs.css";
import backgroundImage from "../assets/backgroundimage.jpg"; // Update with actual path

const AboutUs = () => {
  return (
    <section className="agency-section-two">
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column">
            <div className="inner-column">
              {/* Section Title */}
              <div className="absec-title">
                <div className="title">Best agency</div>
                <h2>
                  Why choose our <span className="theme_color">travel <br /> agency</span>
                </h2>
              </div>
              <div className="text">
                <p>Swarna Trails is not just a travel agency  it's your gateway to authentic, soul-stirring experiences across Punjab. We curate culturally rich, locally rooted, and thoughtfully 
                personalized journeys that go beyond sightseeing to help you truly live the spirit of the land</p>
                <p>From heritage walks and village stays to handcrafted signature experiences like Swarna Anubhav, our trails offer exclusive access to the stories, flavors, and traditions that define Punjab. In addition to immersive travel, we also specialize in curating cultural events and producing high-quality media content — from documentaries 
                to destination reels — that celebrate Punjab’s vibrant identity.</p>
                <p>With a focus on creativity, safety, and sustainability, Swarna Trails promises journeys and stories that are golden in every sense — meaningful, memorable, and made with love.</p>
              </div>
              <div className="holiday">Make your holiday Special</div>
            </div>
          </div>

          {/* Blocks Column */}
          <div className="blocks-column">
            <div className="inner-column"  style={{ backgroundImage: `url(${backgroundImage})` }}>
              {/* Agency Block - Trust & Safety */}
              <div className="agency-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <PiShieldThin className="abicon"  />
                  </div>
                  <h4>Trust &amp; Safety</h4>
                  <div className="agency-text">
                    Every vehicle in our fleet is sourced from certified dealers and undergoes thorough inspections and quality checks to ensure 
                    your journey is safe, smooth, and worry-free.
                  </div>
                </div>
              </div>

              {/* Agency Block - Packages */}
              <div className="agency-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <PiAirplaneTakeoffThin className="abicon"  />
                  </div>
                  <h4>Packages 10,000+ </h4>
                  <div className="agency-text">
                    With over 10,000 uniquely tailored packages delivered, we specialize in crafting travel 
                    experiences that match your style, needs, and dreams — from weekend getaways to grand celebrations.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
