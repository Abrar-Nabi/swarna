import AboutUs from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TitleSection from "../components/TitleSection";
import TreandingDestinations from "../components/TrendingDestinations"
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <TitleSection/>
      <TreandingDestinations/>
      <AboutUs/>
      <Footer/>



    </>
  );
};

export default Home;
