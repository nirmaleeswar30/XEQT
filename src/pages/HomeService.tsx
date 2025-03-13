import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Server, GraduationCap } from 'lucide-react';

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

// Updated services array
const services = [
  {
    title: 'IT Infrastructure',
    icon: Server,
    description: 'Robust IT infrastructure solutions for improved efficiency and reliability.',
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and migration services to power your digital transformation.',
      },
  {
    title: 'Data Management',
    icon: Database,
    description: 'End-to-end data solutions for better business intelligence and decision making.',
     },
  {
    title: 'Web Hosting',
    icon: Code,
    description: 'Comprehensive web hosting solutions designed to ensure your online presence is secure, fast, and reliable, tailored to meet your specific business needs.',
     },
  {
    title: 'Managed Support',
    icon: GraduationCap,
    description: 'Dedicated managed support services to ensure your systems run smoothly, with proactive monitoring, troubleshooting, and expert assistance available 24/7.',
      },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      },
];

// Updated Services Section Component
const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-6 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300 group"
                >
                  <Icon className="w-12 h-12 mb-4 group-hover:text-black transition-colors" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-black font-medium group-hover:underline transition-all">Learn more →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesSection;