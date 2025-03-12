import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: 'React Basics',
    duration: '4 weeks',
    level: 'Beginner',
    students: '1.2k+',
    image: 'https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png',
  },
  {
    title: 'Advanced TypeScript',
    duration: '6 weeks',
    level: 'Advanced',
    students: '800+',
    image: 'https://th.bing.com/th/id/OIP.M54ZStoA0GU2ZaksRHcBTAHaEz?w=282&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Node.js Essentials',
    duration: '5 weeks',
    level: 'Intermediate',
    students: '1.5k+',
    image: 'https://th.bing.com/th/id/OIP.eld6_TNR8oUOuXCAojj1CQHaDt?w=319&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Express.js Crash Course',
    duration: '3 weeks',
    level: 'Intermediate',
    students: '900+',
    image: 'https://th.bing.com/th/id/OIP.1oZo0qgO2ybBNcjCWcx06QHaDP?w=333&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'PostgreSQL Mastery',
    duration: '6 weeks',
    level: 'Advanced',
    students: '700+',
    image: 'https://th.bing.com/th/id/OIP.H2CVvZqgQCNegcnrCgak3QHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Next.js for Beginners',
    duration: '4 weeks',
    level: 'Beginner',
    students: '1k+',
    image: 'https://th.bing.com/th/id/OIP.htQ__m0E2P0XuxSSQelBcQHaDZ?w=346&h=160&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Full-Stack Development',
    duration: '12 weeks',
    level: 'Advanced',
    students: '500+',
    image: 'https://th.bing.com/th/id/OIP.UhnZs_RgbtVTR56Rsrm40gHaEE?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'JavaScript Fundamentals',
    duration: '4 weeks',
    level: 'Beginner',
    students: '2k+',
    image: 'https://th.bing.com/th/id/OIP.6HEzBcKbUa9co8P89GGxiwHaEo?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'CSS and Tailwind Essentials',
    duration: '3 weeks',
    level: 'Beginner',
    students: '1.3k+',
    image: 'https://th.bing.com/th/id/OIP.oPL8C-i04sqAUoOS_da9aAHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Database Management with MySQL',
    duration: '5 weeks',
    level: 'Intermediate',
    students: '900+',
    image: 'https://th.bing.com/th/id/OIP.JVt34lGxmm0GAGNNL_mwBgHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Python for Web Development',
    duration: '6 weeks',
    level: 'Intermediate',
    students: '1.1k+',
    image: 'https://th.bing.com/th/id/OIP.oi9-IqOtJcjAji89CuH0oAHaEO?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    title: 'Machine Learning Basics',
    duration: '8 weeks',
    level: 'Intermediate',
    students: '600+',
    image: 'https://th.bing.com/th/id/OIP.YYKrrfXmPfeY-JCKvmyFWwHaEG?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the latest technologies with our comprehensive training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/contact"
                className="block h-full bg-white border border-gray-200 rounded-lg hover:border-black transition-colors duration-300 overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={`${course.title} course`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-5 h-5 mr-2" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{course.students} Students</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className="text-black font-medium hover:underline">
                      Enroll Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;