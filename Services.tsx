import React from 'react';
import { Home, Building2, PenTool as Tool, Lightbulb, BarChart4, Shield, CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive solar energy solutions for homes and businesses
            </p>
          </div>
        </div>
      </div>
      
      {/* Residential Solar */}
      <section id="residential" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Home className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Residential Solar Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Transform your home into a clean energy powerhouse with our custom residential solar installations. Our systems are designed to maximize energy production while complementing your home's architecture.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Customized System Design</h3>
                    <p className="text-gray-600">Tailored to your home's specific energy needs and architectural style.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Premium Equipment</h3>
                    <p className="text-gray-600">High-efficiency panels and inverters from industry-leading manufacturers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Professional Installation</h3>
                    <p className="text-gray-600">Experienced technicians ensure proper installation and optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Comprehensive Warranty</h3>
                    <p className="text-gray-600">Peace of mind with industry-leading warranties on equipment and workmanship.</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/contact#quote" 
                className="btn btn-primary"
              >
                Get a Free Quote
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Residential Solar Installation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Solar */}
      <section id="commercial" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="Commercial Solar Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial Solar Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Reduce operating costs and demonstrate your commitment to sustainability with our commercial solar installations. Our systems are designed to deliver maximum ROI while minimizing disruption to your business.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Turnkey Solutions</h3>
                    <p className="text-gray-600">From initial assessment to final connection, we handle every aspect of your project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Scalable Systems</h3>
                    <p className="text-gray-600">Start with what you need now and easily expand your system as your business grows.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Advanced Monitoring</h3>
                    <p className="text-gray-600">Real-time performance monitoring to ensure optimal system operation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Flexible Financing</h3>
                    <p className="text-gray-600">Various financing options to suit your business needs and budget.</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/contact#quote" 
                className="btn btn-secondary"
              >
                Request a Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond installation, we offer a comprehensive range of solar energy services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maintenance */}
            <div id="maintenance" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9875422/pexels-photo-9875422.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="System Maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary-600 mb-4">
                  <Tool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">System Maintenance</h3>
                <p className="text-gray-600 mb-6">
                  Regular maintenance and cleaning services to ensure your system operates at peak efficiency. Our comprehensive maintenance plans include:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular performance checks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Panel cleaning and inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Inverter and electrical system testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support for any issues</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Energy Consultation */}
            <div id="consultation" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="Energy Consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary-600 mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Energy Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Expert advice on optimizing your energy usage and maximizing the benefits of your solar system. Our consultation services include:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy usage analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Efficiency recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>System expansion planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial incentive guidance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Battery Storage */}
            <div id="battery" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5572260/pexels-photo-5572260.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="Battery Storage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary-600 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Battery Storage</h3>
                <p className="text-gray-600 mb-6">
                  Add battery storage to your solar system for energy independence and backup power during outages. Our battery solutions offer:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Backup power during outages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy storage for evening use</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Peak demand charge reduction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integration with existing solar systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* System Monitoring */}
            <div id="monitoring" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="System Monitoring" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary-600 mb-4">
                  <BarChart4 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">System Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Advanced monitoring solutions to track your system's performance and energy production in real-time. Our monitoring services include:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time performance data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile app for system tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automatic alert notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Historical performance analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        backgroundColor="bg-secondary-600"
        title="Ready to Harness the Power of the Sun?"
        description="Contact us today to learn more about our solar energy services and request a free quote."
      />
    </>
  );
};

export default Services;