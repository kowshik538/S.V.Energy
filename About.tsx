import React from 'react';
import { Award, Target, Users, Heart } from 'lucide-react';
import CTASection from '../components/CTASection';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SV Energy Systems</h1>
            <p className="text-xl text-gray-600">
              Leading the way in sustainable energy solutions since 2010
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                SV Energy Systems was founded in 2017 with a clear mission: to make clean, renewable energy accessible to everyone. What began as a small team of passionate engineers has grown into a leading solar energy provider with hundreds of successful installations across the country.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that transitioning to solar energy is not just good for the environment, but also a smart financial decision for homeowners and businesses alike. Our team is dedicated to providing the highest quality solar solutions with exceptional customer service.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we've helped thousands of clients reduce their carbon footprint and save millions of dollars on energy costs. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the solar industry.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/9875395/pexels-photo-9875395.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="SV Energy Systems team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700">
                To accelerate the transition to clean energy by providing affordable, high-quality solar solutions while delivering exceptional customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-700">
                A world where renewable energy is the standard, empowering communities to achieve energy independence and environmental sustainability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-gray-700">
                Integrity, excellence, innovation, sustainability, and customer-centricity guide our approach to business and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        backgroundColor="bg-secondary-600"
        title="Ready to Join the Solar Revolution?"
        description="Our expert team is ready to help you make the switch to clean, renewable energy."
      />
    </>
  );
};

export default About;