import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import About from '../components/About';
import FeaturedRooms from '../components/FeaturedRooms';
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import bcg from '../images/heroBcg.jpeg';
import heroVideo from '../images/hero-video.mp4';

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <video autoPlay muted loop className="video-container" poster={bcg}>
          <source src={heroVideo} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <Banner
          title="Welcome to Ocean Breeze"
          subtitle="The team of Ocean Breeze resort welcomes you. Start relaxing your soul and enjoy your stay"
        >
          <Link to="/rooms" className="btn-primary">
            Explore rooms
          </Link>
        </Banner>
      </Hero>
      <About />
      <Services />
      <Offers />
      <FeaturedRooms />
      <Footer />
    </>
  );
}
