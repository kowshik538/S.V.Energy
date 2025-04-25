import React from 'react';
import { Home, Building2, PenTool as Tool, Lightbulb, BarChart4, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Home className="w-12 h-12 text-primary-600" />,
    title: 'Residential Solar',
    description: 'Custom solar energy solutions for homes, reducing electricity bills and increasing property value.',
    link: '/services#residential'
  },
  {
    icon: <Building2 className="w-12 h-12 text-primary-600" />,
    title: 'Commercial Solar',
    description: 'Large-scale solar installations for businesses, warehouses, and office buildings.',
    link: '/services#commercial'
  },
  {
    icon: <Tool className="w-12 h-12 text-primary-600" />,
    title: 'System Maintenance',
    description: 'Regular maintenance and repair services to ensure your solar system performs optimally.',
    link: '/services#maintenance'
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-primary-600" />,
    title: 'Energy Consultation',
    description: 'Expert advice on energy efficiency and solar solutions tailored to your needs.',
    link: '/services#consultation'
  },
  {
    icon: <BarChart4 className="w-12 h-12 text-primary-600" />,
    title: 'System Monitoring',
    description: 'Advanced monitoring tools to track your system\'s performance in real-time.',
    link: '/services#monitoring'
  },
  {
    icon: <Shield className="w-12 h-12 text-primary-600" />,
    title: 'Battery Storage',
    description: 'Energy storage solutions to use solar power even when the sun isn\'t shining.',
    link: '/services#battery'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solar energy solutions for residential and commercial properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-8 hover:translate-y-[-8px] group"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center"
              >
                Learn More
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;