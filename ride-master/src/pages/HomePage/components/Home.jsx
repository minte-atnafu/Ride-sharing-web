
import './home.css'
import React from 'react';
import Hero from './HeroComponent/Hero';
import Benefit from './BenefitComponent/Benefit';
import Testimonial from './TestimonialComponent/Testimonial';
import Footer from './FooterComponent/Footer';
import HomeTopbar from './TopbarComponent/HomeTopbar';

function Home() {
  return (
    <div className='homeContainer'>
      <HomeTopbar />
      <Hero />
      <Benefit />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
