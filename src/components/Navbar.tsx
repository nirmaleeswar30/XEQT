import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine nav background based on page and scroll state
  const getNavBackground = () => {
    if (isHomePage) {
      // Home page: transparent when at top, white when scrolled
      return isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-800' 
        : 'bg-black/50 backdrop-blur-sm text-white';
    } else {
      // Other pages: always have a distinct background
      return isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-800'
        : 'bg-gray-100 shadow-sm text-gray-800';
    }
  };

  // Determine logo color based on navigation background
  const getLogoColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }
    return 'text-black';
  };

  // Determine text colors based on page and scroll state
  const getLinkColors = (isActive: boolean) => {
    if (isHomePage && !isScrolled) {
      // On home page before scrolling - light text on dark background
      return isActive 
        ? 'text-white font-bold' 
        : 'text-gray-200 hover:text-white';
    } else {
      // On other pages or after scrolling - darker text on light background
      return isActive 
        ? 'text-black font-bold' 
        : 'text-gray-600 hover:text-blue-600';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${getNavBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${getLogoColor()}`}> <img src="XEQT.jpg" alt="" className='w-32 mx-auto' /></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  getLinkColors(location.pathname === link.path)
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isHomePage && !isScrolled ? "text-white hover:text-gray-200" : "text-gray-600 hover:text-black"}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-gray-100'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;