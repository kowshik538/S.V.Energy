import React from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import StatsSection from '../components/StatsSection';
import FAQSection from '../components/FAQSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;