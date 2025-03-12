import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Server, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and migration services to power your digital transformation.',
    features: ['Cloud Migration', 'AWS/Azure/GCP Solutions', 'Cloud Security', 'Cost Optimization'],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
    features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Incident Response'],
  },
  {
    title: 'Custom Development',
    icon: Code,
    description: 'Tailored software solutions designed to meet your specific business needs.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy System Modernization'],
  },
  {
    title: 'Data Management',
    icon: Database,
    description: 'End-to-end data solutions for better business intelligence and decision making.',
    features: ['Data Analytics', 'Database Design', 'Data Migration', 'Business Intelligence'],
  },
  {
    title: 'IT Infrastructure',
    icon: Server,
    description: 'Robust IT infrastructure solutions for improved efficiency and reliability.',
    features: ['Network Design', 'System Integration', 'Infrastructure Monitoring', 'Disaster Recovery'],
  },
  {
    title: 'IT Training',
    icon: GraduationCap,
    description: 'Comprehensive training programs to upskill your team with the latest technologies.',
    features: ['Custom Training Programs', 'Certification Prep', 'Workshops', 'Team Development'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block h-full p-8 bg-white border border-gray-200 rounded-lg hover:border-black transition-colors duration-300"
              >
                <service.icon className="w-12 h-12 mb-6 text-black" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;