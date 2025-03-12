import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Brain, Target, Users, Code, Newspaper, TargetIcon, LightbulbIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from './HomeService';
import SolutionSection from './SolutionSection';

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white relative">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <img src="XEQT.jpg" alt="" className='w-1/2 mx-auto' />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            IT Consulting Services and Training
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-12">
              At XEQT, we are more than just an IT consultancy – we are your strategic partner
              in digital transformation. Our team of seasoned professionals brings together decades
              of combined experience in delivering innovative, scalable solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black text-white p-8 rounded-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <LightbulbIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-4">To deliver exceptional IT solutions that transform businesses through innovation
                and excellence. We strive to understand each client's unique challenges and create
                tailored solutions that drive efficiency, growth, and competitive advantage.</p>
                {/* <p>Our collaborative approach ensures that we not only meet but exceed expectations,
                establishing long-term partnerships built on trust and measurable results.</p> */}
              </div>
              
              <div className="bg-black text-white p-8 rounded-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <TargetIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="mb-4">To be the catalyst for digital innovation, empowering businesses to thrive
                in an increasingly connected world. We envision a future where technology seamlessly 
                enhances human potential and organizational capabilities.</p>
                {/* <p>By staying at the forefront of emerging technologies and industry best practices,
                we aim to set new standards of excellence and drive meaningful change across various
                sectors and industries.</p> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kforce-like Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Merging your vision and our expertise, we help you achieve powerful results</h2>
              <p className="text-gray-700 mb-4">At XEQT, we strive <span className="italic font-medium">To Have a Meaningful Impact on All the Lives We Serve®</span> and have helped our clients, candidates and consultants find meaningful work and innovative business solutions for 60 years.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-2">98% of Clients</h3>
                  <p className="text-sm">say XEQT provides talent and data that enables them to complete their strategic priorities in a NPS Survey →</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-2">#1 Most Recognized Brand</h3>
                  <p className="text-sm">by tech consultants in a Staffing Industry Analysts ISA survey →</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-2 mt-4">Top 5%</h3>
                  <p className="text-sm">XEQT's rank by Forbes for Best Professional Recruiting Firms →</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="">
                <img src="/Teamworking.jpg" alt="Team collaborating on a whiteboard" className="w-full h-auto rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <ServicesSection />

      {/* Kforce Knowledge Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g fill="teal" fillOpacity="0.3">
                    {[...Array(6)].map((_, row) => (
                      [...Array(6)].map((_, col) => (
                        <circle key={`${row}-${col}`} cx={10 + col * 15} cy={10 + row * 15} r={2} />
                      ))
                    ))}
                  </g>
                </svg>
              </div>
              <img src="/business-meeting-office.jpg" alt="Aerial view of business meeting" className="rounded-lg shadow-lg border-4 border-white" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g fill="teal" fillOpacity="0.3">
                    {[...Array(6)].map((_, row) => (
                      [...Array(6)].map((_, col) => (
                        <circle key={`${row}-${col}`} cx={10 + col * 15} cy={10 + row * 15} r={2} />
                      ))
                    ))}
                  </g>
                </svg>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">XEQT stands for XEQT<span className="italic">knowledge</span>®</h2>
              <p className="text-gray-700 mb-6">We know we achieve <strong>Great Results Through Strategic Partnership and Knowledge Sharing®</strong>, which is why we view each interaction with our clients, candidates, consultants and communities as an opportunity to build lasting personal relationships and business partnerships.</p>
              <p className="text-gray-700 mb-8">We invite you to learn more about our process, our people and how we reimagine how business gets done.</p>
              <button className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors">About XEQT</button>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Solutions */}
      
      <SolutionSection />
      

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1451187580459-43490279c0fa' : item === 2 ? '1522071820081-009f0129c71c' : '1517245386807-bb43f82c33c4'}?auto=format&fit=crop&q=80`}
                    alt="News"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Latest Technology Trends {item}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Stay updated with the latest developments in technology and IT consulting.
                    </p>
                    <Link
                      to="/news"
                      className="text-black font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;