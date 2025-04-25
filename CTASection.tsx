import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  backgroundColor?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  backgroundColor = 'bg-primary-600',
  title = 'Ready to Switch to Solar?',
  description = 'Get a free consultation and estimate for your home or business.',
  buttonText = 'Get a Free Quote',
  buttonLink = '/contact#quote'
}) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8 text-white/90">{description}</p>
          <Link
            to={buttonLink}
            className="btn bg-white text-primary-600 hover:bg-gray-100 group"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;