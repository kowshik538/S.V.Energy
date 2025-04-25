import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team for questions, quotes, or support
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              {/* Contact Info */}
              <div className="mb-12 space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Call our customer support</p>
                    <a href="tel:+918309849559" className="text-primary-600 font-medium hover:underline">
                      +91 (830) 984-9559
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">Send us an email</p>
                    <a href="mailto:s.v.energysystems5@gmail.com" className="text-primary-600 font-medium hover:underline">
                      s.v.energysystems5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600 mb-1">Visit our office</p>
                    <p className="text-gray-800">
                      D.No:12/136,Raju road,Anantapur,Andhrapradesh<br />515001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600 mb-1">We're available</p>
                    <p className="text-gray-800">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <MapSection />
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about solar energy and our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">How long does installation take?</h3>
              <p className="text-gray-600">
                Most residential installations are completed within 1-3 days once permits are approved. The entire process typically takes 2-3 months from contract to completion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">What maintenance is required?</h3>
              <p className="text-gray-600">
                Solar panels need minimal maintenance. Occasional cleaning and an annual inspection are typically all that's required to keep your system performing optimally.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">What happens if I produce more energy than I use?</h3>
              <p className="text-gray-600">
                Excess energy is typically sent back to the grid, and you may receive credits on your utility bill through net metering, depending on your utility company's policies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Do you offer financing options?</h3>
              <p className="text-gray-600">
                Yes, we offer several financing options, including solar loans, leases, and power purchase agreements (PPAs) to make solar accessible to more homeowners.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Have more questions? Contact our team or check our comprehensive FAQ page.
            </p>
            <a href="/faq" className="text-primary-600 font-medium hover:underline">
              View All FAQs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;