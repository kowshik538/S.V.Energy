import React, { useState } from 'react';

const projectCategories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
  {
    id: 1,
    title: 'Residential Solar Installation',
    category: 'Residential',
    description: '8kW system installed for a family home in Anantapur',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1280',
    completionDate: 'January 2024',
    powerOutput: '8kW',
    annualSavings: '₹96,000'
  },
  {
    id: 2,
    title: 'Commercial Office Complex',
    category: 'Commercial',
    description: '75kW system for a multi-story office building in Bangalore',
    image: 'https://images.pexels.com/photos/6961215/pexels-photo-6961215.jpeg?auto=compress&cs=tinysrgb&w=600',
    completionDate: 'December 2023',
    powerOutput: '75kW',
    annualSavings: '₹9,00,000'
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    description: '200kW system for a manufacturing facility in Chennai',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1280',
    completionDate: 'November 2023',
    powerOutput: '200kW',
    annualSavings: '₹24,00,000'
  },
  {
    id: 4,
    title: 'Residential Community',
    category: 'Residential',
    description: '50kW system for a gated community in Hyderabad',
    image: 'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=1280',
    completionDate: 'October 2023',
    powerOutput: '50kW',
    annualSavings: '₹6,00,000'
  },
  {
    id: 5,
    title: 'Shopping Mall',
    category: 'Commercial',
    description: '150kW system for a retail complex in Vijayawada',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1280',
    completionDate: 'September 2023',
    powerOutput: '150kW',
    annualSavings: '₹18,00,000'
  },
  {
    id: 6,
    title: 'Manufacturing Plant',
    category: 'Industrial',
    description: '300kW system for an industrial facility in Visakhapatnam',
    image: 'https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?b=1&s=612x612&w=0&k=20&c=bUTBiXj3_o0xEwZDeYrJGuNlON6_6bwGYi1_Vjvz4fw=',
    completionDate: 'August 2023',
    powerOutput: '300kW',
    annualSavings: '₹36,00,000'
  }
];

const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {projectCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="card overflow-hidden group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-white text-center p-4">
                  <p className="font-bold mb-2">Completion: {project.completionDate}</p>
                  <p className="mb-2">Power Output: {project.powerOutput}</p>
                  <p>Annual Savings: {project.annualSavings}</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;