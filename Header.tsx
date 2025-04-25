import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <Sun className="h-8 w-8 text-primary-600 mr-2" />
            <span className={`font-bold text-xl md:text-2xl ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`}>
              SV Energy Systems
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-gray-900 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-gray-900 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects"
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-gray-900 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/services"
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-gray-900 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-gray-900 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="/contact#quote" 
              className="btn btn-primary"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects"
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/services"
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <a 
                href="/contact#quote" 
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;