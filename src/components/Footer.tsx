import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold"><img src="XEQT.jpg" alt="" className='w-48' /></Link>
            <p className="mt-2 text-sm text-gray-400">© 2025 XEQT. All rights reserved.</p>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3 tracking-wider uppercase">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/it-infrastructure" className="text-gray-400 hover:text-white transition-colors">Infrastructure Setup</Link></li>
                <li><Link to="/services/cloud-hosting" className="text-gray-400 hover:text-white transition-colors">Cloud Hosting</Link></li>
                <li><Link to="/services/managed-support" className="text-gray-400 hover:text-white transition-colors">Managed Support</Link></li>
                <li><Link to="/services/web-hosting" className="text-gray-400 hover:text-white transition-colors">Web Hosting</Link></li>
                <li><Link to="/services/data-management" className="text-gray-400 hover:text-white transition-colors">Data Management</Link></li>
                <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3 tracking-wider uppercase">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold mb-3 tracking-wider uppercase">Connect</h3>
              <div className="flex space-x-5 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom links */}
        <div className="pt-8 mt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;