// App.js (Main Component)
import React from 'react';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import ServicesSection from '../component/ServicesSection';
import MissionSection from '../component/MissionSection';
import NewsletterSection from '../component/NewsletterSection';
import ContactSection from '../component/ContactSection';
import Footer from '../component/Footer';
import AwardsSection from '../component/AwardSection';

function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <AwardsSection/>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;