import { div } from 'framer-motion/client';
import React, { useState } from 'react';

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
      <div className="flex flex-col md:flex-row items-start justify-between p-8 max-w-7xl mx-auto py-36">
      {/* Left side - Semi-circular menu */}
      <div className="flex-shrink-0 md:mt-8">
        {renderCircularMenu()}
      </div>

      {/* Right side - Content area with improved spacing */}
      <div className="flex-1 md:ml-24 mt-8 md:mt-0 max-w-2xl">
        {/* Solution content box with shadow for better visual appearance */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image section */}
          <div className="h-64 bg-black relative">
            <img 
              src={activeSolution.image} 
              alt={`${activeSolution.title} illustration`} 
              className="w-full h-full object-cover"
            />
            
            {/* Title overlay at top */}
            <div className="absolute top-0 left-0 bg-black text-white px-6 py-2 rounded-br-lg">
              <h3 className="text-lg font-bold">{activeSolution.title}</h3>
            </div>
          </div>
          
          {/* Caption section with improved typography */}
          <div className="p-6">
            <p className="text-gray-800 font-semibold leading-relaxed">{activeSolution.caption}</p>
            
            {/* Learn more link with better styling */}
            {/* <div className="mt-4">
              <a 
                href={activeSolution.learnMoreLink} 
                className="inline-flex items-center text-orange-400 font-semibold hover:text-gray-800 transition-colors"
              >
                Learn More 
                <span className="ml-1">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SolutionsShowcase;