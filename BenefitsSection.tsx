import React from 'react';
import { Sun, DollarSign, Battery, Leaf, BarChart, Award } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-12 h-12 text-primary-600" />,
    title: 'Save Money',
    description: 'Reduce or eliminate your electricity bills and protect against rising utility costs.'
  },
  {
    icon: <Sun className="w-12 h-12 text-primary-600" />,
    title: 'Clean Energy',
    description: 'Generate your own clean, renewable energy directly from the sun.'
  },
  {
    icon: <Leaf className="w-12 h-12 text-primary-600" />,
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint and help combat climate change.'
  },
  {
    icon: <Battery className="w-12 h-12 text-primary-600" />,
    title: 'Energy Independence',
    description: 'Gain independence from the grid and unpredictable energy prices.'
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary-600" />,
    title: 'Increase Property Value',
    description: 'Homes with solar energy systems sell for more than homes without them.'
  },
  {
    icon: <Award className="w-12 h-12 text-primary-600" />,
    title: 'Tax Incentives',
    description: 'Take advantage of federal tax credits and local incentives to reduce installation costs.'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Benefits of Solar Energy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Switching to solar power offers numerous advantages for both residential and commercial properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card p-8 text-center hover:translate-y-[-8px]"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;