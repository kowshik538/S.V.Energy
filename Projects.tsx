import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';
import CTASection from '../components/CTASection';

const Projects: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful solar installations
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ProjectsGrid />
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to completed installation, we ensure a smooth and efficient process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 ml-[-1px] top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We discuss your energy needs, assess your property, and evaluate your current energy consumption.
                  </p>
                </div>
                <div className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center z-10 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Consultation" 
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="System Design" 
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                  </div>
                </div>
                <div className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center z-10 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:order-2">
                  <h3 className="text-xl font-bold mb-2">System Design</h3>
                  <p className="text-gray-600">
                    Our engineers design a custom solar system tailored to your property and energy requirements.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Permitting & Approvals</h3>
                  <p className="text-gray-600">
                    We handle all necessary permits and approvals with local authorities and utility companies.
                  </p>
                </div>
                <div className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center z-10 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Permitting" 
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Installation" 
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                  </div>
                </div>
                <div className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center z-10 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:order-2">
                  <h3 className="text-xl font-bold mb-2">Installation</h3>
                  <p className="text-gray-600">
                    Our experienced technicians install your solar system with minimal disruption to your daily routine.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Activation</h3>
                  <p className="text-gray-600">
                    After a final inspection, we connect your system to the grid and activate it to start generating clean energy.
                  </p>
                </div>
                <div className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center z-10 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="https://images.pexels.com/photos/9875399/pexels-photo-9875399.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Activation" 
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        backgroundColor="bg-primary-600"
        title="Start Your Solar Journey Today"
        description="Join our growing list of satisfied customers who are enjoying the benefits of clean, renewable energy."
      />
    </>
  );
};

export default Projects;