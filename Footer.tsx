import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-primary-500 mr-2" />
              <span className="font-bold text-xl">SV Energy Systems</span>
            </div>
            <p className="text-gray-400 mb-4">
              Helping you save money with free electricity from solar energy since 2017.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/contact#quote" className="text-gray-400 hover:text-primary-500 transition-colors">Get a Quote</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Residential Solar</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Commercial Solar</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Solar System Maintenance</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Energy Consultation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">System Monitoring</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">D.No:12/136, Raju road, Anantapur, Andhrapradesh</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="tel:+918309849558" className="text-gray-400 hover:text-primary-500 transition-colors">+91 (830) 984-9559</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="mailto:s.v.energysystems5@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">s.v.energysystems5@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SV Energy Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;