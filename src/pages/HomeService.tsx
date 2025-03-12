import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Server, Laptop } from 'lucide-react';

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

// Service details imported from serviceDetails object
const serviceDetails = {
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Transform your business with scalable and secure cloud infrastructure solutions.',
    icon: Cloud
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions.',
    icon: Shield
  },
  'custom-development': {
    title: 'Custom Development',
    description: 'Build tailored software solutions to meet your unique business needs.',
    icon: Code
  },
  'data-management': {
    title: 'Data Management',
    description: 'Optimize your data infrastructure for better business intelligence.',
    icon: Database
  },
  'it-infrastructure': {
    title: 'IT Infrastructure',
    description: 'Build a robust and scalable IT infrastructure for your organization.',
    icon: Server
  },
  'it-training': {
    title: 'IT Training',
    description: 'Empower your team with comprehensive IT training programs.',
    icon: Laptop
  },
};

// Updated Services Section Component
const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key, service]) => {
              const Icon = service.icon;
              return (
                <Link
                  key={key}
                  to={`/services/${key}`}
                  className="p-6 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300 group"
                >
                  <Icon className="w-12 h-12 mb-4 group-hover:text-black transition-colors" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-black font-medium group-hover:underline transition-all">Learn more →</p>
                </Link>
              )
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesSection;