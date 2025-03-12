import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const serviceDetails = {
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Transform your business with scalable and secure cloud infrastructure solutions.',
    benefits: [
      'Reduced operational costs',
      'Improved scalability',
      'Enhanced security',
      'Better disaster recovery',
    ],
    features: [
      'Cloud migration services',
      'Multi-cloud strategy',
      'Cloud security implementation',
      'Performance optimization',
      'Cost management',
      'DevOps integration',
    ],
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions.',
    benefits: [
      'Enhanced data protection',
      'Regulatory compliance',
      'Threat prevention',
      'Business continuity',
    ],
    features: [
      'Security assessments',
      'Penetration testing',
      'Incident response',
      'Security training',
      'Compliance management',
      '24/7 monitoring',
    ],
  },
  'custom-development': {
    title: 'Custom Development',
    description: 'Build tailored software solutions to meet your unique business needs.',
    benefits: [
      'Competitive advantage',
      'Process automation',
      'Improved efficiency',
      'Scalable solutions',
    ],
    features: [
      'Web applications',
      'Mobile development',
      'API integration',
      'Legacy system modernization',
      'Quality assurance',
      'Ongoing support',
    ],
  },
  'data-management': {
    title: 'Data Management',
    description: 'Optimize your data infrastructure for better business intelligence.',
    benefits: [
      'Better decision making',
      'Improved data quality',
      'Enhanced analytics',
      'Regulatory compliance',
    ],
    features: [
      'Data architecture',
      'Database optimization',
      'Data migration',
      'Analytics implementation',
      'Data governance',
      'Backup solutions',
    ],
  },
  'it-infrastructure': {
    title: 'IT Infrastructure',
    description: 'Build a robust and scalable IT infrastructure for your organization.',
    benefits: [
      'Improved reliability',
      'Enhanced performance',
      'Better security',
      'Cost optimization',
    ],
    features: [
      'Network design',
      'System integration',
      'Infrastructure monitoring',
      'Disaster recovery',
      'Hardware solutions',
      'Maintenance services',
    ],
  },
  'it-training': {
    title: 'IT Training',
    description: 'Empower your team with comprehensive IT training programs.',
    benefits: [
      'Skilled workforce',
      'Improved productivity',
      'Better retention',
      'Innovation culture',
    ],
    features: [
      'Custom training programs',
      'Certification preparation',
      'Hands-on workshops',
      'Online learning',
      'Team assessments',
      'Ongoing support',
    ],
  },
};

const ServiceDetail = () => {
  const { service } = useParams<{ service: string }>();
  const details = service ? serviceDetails[service as keyof typeof serviceDetails] : null;

  if (!details) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="text-black hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <Link
          to="/services"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">{details.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{details.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="space-y-3 mb-8">
              {details.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="grid gap-4">
              {details.features.map((feature) => (
                <div
                  key={feature}
                  className="p-4 bg-white rounded-lg border border-gray-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;