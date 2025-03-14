import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

// Define types for our solution data
interface Solution {
  title: string;
  image: string;
  caption: string;
  learnMoreLink: string;
}

interface SolutionsData {
  talent: Solution;
  team: Solution;
  project: Solution;
  [key: string]: Solution; // Index signature to allow dynamic access
}

const SolutionsShowcase: React.FC = () => {
  const [activeOption, setActiveOption] = useState<'talent' | 'team' | 'project'>('team');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Solution options data
  const solutions: SolutionsData = {
    talent: {
      title: 'Talent Solutions',
      image: 'https://kforcewebeast.azureedge.net/media/406967/heroshapes_talentsolutions_3.png',
      caption: 'Save time finding the right resource for your team while we connect you with the best talent in the marketplace.',
      learnMoreLink: '#talent-solutions'
    },
    team: {
      title: 'Team Solutions',
      image: 'https://kforcewebeast.azureedge.net/media/406959/heroshapes_teamsolutions_3.png',
      caption: 'Take charge of your most valued initiatives while we provide a dedicated team offering technical expertise and services.',
      learnMoreLink: '#team-solutions'
    },
    project: {
      title: 'Project Solutions',
      image: 'https://kforcewebeast.azureedge.net/media/406957/heroshapes_managedsolutions_3.png',
      caption: 'Complete end-to-end project delivery with dedicated management and specialized resources.',
      learnMoreLink: '#project-solutions'
    }
  };

  // Calculate degrees for proper alignment of the active segment
  const getRotationDegree = (option: string): string => {
    switch(option) {
      case 'talent': return '-90deg';
      case 'team': return '0deg';
      case 'project': return '90deg';
      default: return '0deg';
    }
  };

  // Render the semi-circular menu with improved alignment
  const renderCircularMenu = (): JSX.Element => {
    if (isMobile) {
      // Mobile version: Simplified horizontal selection tabs
      return (
        <div className="w-full mb-8">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-navy-900">SPECTRUM OF SOLUTIONS</h2>
          </div>
          <div className="flex justify-between border-b border-gray-200">
            <button 
              className={`px-4 py-2 text-sm ${activeOption === 'talent' ? 'font-bold text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={() => setActiveOption('talent')}
            >
              Talent Solutions
            </button>
            <button 
              className={`px-4 py-2 text-sm ${activeOption === 'team' ? 'font-bold text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={() => setActiveOption('team')}
            >
              Team Solutions
            </button>
            <button 
              className={`px-4 py-2 text-sm ${activeOption === 'project' ? 'font-bold text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
              onClick={() => setActiveOption('project')}
            >
              Project Solutions
            </button>
          </div>
        </div>
      );
    }

    // Desktop version: Original semi-circle design
    return (
      <div className="relative h-80 w-80">
        {/* Semi-circle background */}
        <div className="absolute h-full w-full rounded-full border-8 border-yellow-300">
          {/* Blue active segment - with fixed alignment */}
          <div 
            className="absolute top-0 left-0 h-full w-full rounded-full border-8 border-transparent border-t-red-500 border-r-blue-500"
            style={{ 
              clipPath: 'polygon(50% 50%, 100% 50%, 100% 0, 50% 0)',
              transform: `rotate(${getRotationDegree(activeOption)})`,
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </div>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center w-48">
            <h2 className="text-xl font-bold text-navy-900 mb-1">SPECTRUM OF</h2>
            <h2 className="text-xl font-bold text-navy-900">SOLUTIONS</h2>
          </div>
        </div>

        {/* Talent Solutions option */}
        <div 
          className={`absolute cursor-pointer top-6 -left-10 transform -translate-x-16 transition-all ${activeOption === 'talent' ? 'font-bold text-orange-500' : 'text-gray-500'}`}
          onMouseEnter={() => setActiveOption('talent')}
        >
          Talent Solutions »
        </div>

        {/* Team Solutions option */}
        <div 
          className={`absolute cursor-pointer top-6 -right-12 transform translate-x-16 transition-all ${activeOption === 'team' ? 'font-bold text-orange-500' : 'text-gray-500'}`}
          onMouseEnter={() => setActiveOption('team')}
        >
          Team Solutions »
        </div>

        {/* Project Solutions option */}
        <div 
          className={`absolute cursor-pointer top-64 -right-16 transform translate-x-16 transition-all ${activeOption === 'project' ? 'font-bold text-orange-500' : 'text-gray-500'}`}
          onMouseEnter={() => setActiveOption('project')}
        >
          Project Solutions »
        </div>
      </div>
    );
  };

  const activeSolution = solutions[activeOption];

  return (
    <div className='bg-slate-100'>
      <div className={`flex flex-col md:flex-row items-start justify-between p-4 md:p-8 max-w-7xl mx-auto py-12 md:py-36`}>
        {/* Left side - Semi-circular menu or tabs for mobile */}
        <div className={`${isMobile ? 'w-full' : 'flex-shrink-0 md:mt-8'}`}>
          {renderCircularMenu()}
        </div>

        {/* Right side - Content area with improved spacing */}
        <div className={`flex-1 ${isMobile ? 'w-full' : 'md:ml-24'} mt-4 md:mt-0 max-w-2xl`}>
          {/* Solution content box with shadow for better visual appearance */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image section */}
            <div className="h-48 md:h-64 bg-black relative">
              <img 
                src={activeSolution.image} 
                alt={`${activeSolution.title} illustration`} 
                className="w-full h-full object-cover"
              />
              
              {/* Title overlay at top */}
              <div className="absolute top-0 left-0 bg-black text-white px-4 md:px-6 py-2 rounded-br-lg">
                <h3 className="text-base md:text-lg font-bold">{activeSolution.title}</h3>
              </div>
            </div>
            
            {/* Caption section with improved typography */}
            <div className="p-4 md:p-6">
              <p className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed">{activeSolution.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsShowcase;