import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Search } from 'lucide-react';

// Define TypeScript interfaces
interface Course {
  title: string;
  duration: string;
  level: string;
  students: string;
  image: string;
}

interface CourseDataType {
  [category: string]: Course[];
}

// Course categories and their respective courses
const courseData: CourseDataType = {
  "AI & Machine Learning": [
    {
      "title": "Introduction to Machine Learning with R",
      "duration": "6 weeks",
      "level": "Beginner",
      "students": "32",
      "image": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
      "title": "Image Recognition Basics for Beginners",
      "duration": "4 weeks",
      "level": "Beginner",
      "students": "28",
      "image": "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
    },
    {
      "title": "Introduction to Supervised & Unsupervised Learning",
      "duration": "5 weeks",
      "level": "Intermediate",
      "students": "24",
      "image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    },
    {
      "title": "Introduction to Deep Learning with Keras",
      "duration": "7 weeks",
      "level": "Intermediate",
      "students": "19",
      "image": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      "title": "Natural Language Processing (NLP)",
      "duration": "8 weeks",
      "level": "Advanced",
      "students": "23",
      "image": "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg"
    },
    {
      "title": "Introduction to Data Mining Course",
      "duration": "5 weeks",
      "level": "Intermediate",
      "students": "31",
      "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
    },
    {
      "title": "Machine Learning for Beginners",
      "duration": "4 weeks",
      "level": "Beginner",
      "students": "46",
      "image": "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
    },
    {
      "title": "Artificial Intelligence Beginners Guide",
      "duration": "3 weeks",
      "level": "Beginner",
      "students": "52",
      "image": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      "title": "Beginners Guide for Deep Learning",
      "duration": "6 weeks",
      "level": "Beginner",
      "students": "38",
      "image": "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
    },
    {
      "title": "Neural Network 101: Image Recognition using Keras",
      "duration": "7 weeks",
      "level": "Intermediate",
      "students": "27",
      "image": "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg"
    },
    {
      "title": "Become a Machine Learning Expert",
      "duration": "12 weeks",
      "level": "Advanced",
      "students": "14",
      "image": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      "title": "Create Image Captioning Models",
      "duration": "8 weeks",
      "level": "Advanced",
      "students": "16",
      "image": "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
    },
    {
      "title": "Innovating with Google Cloud Artificial Intelligence",
      "duration": "6 weeks",
      "level": "Intermediate",
      "students": "22",
      "image": "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg"
    },
    {
      "title": "Introduction to GAN",
      "duration": "9 weeks",
      "level": "Advanced",
      "students": "12",
      "image": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
    },
    {
      "title": "Gemini in Google Drive",
      "duration": "3 weeks",
      "level": "Beginner",
      "students": "41",
      "image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
    }
  ],
  "Cyber Security": [
    {
      "title": "Introduction to Cyber Security",
      "duration": "5 weeks",
      "level": "Beginner",
      "students": "48",
      "image": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    },
    {
      "title": "Introduction to Cloud Security",
      "duration": "6 weeks",
      "level": "Intermediate",
      "students": "29",
      "image": "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg"
    },
    {
      "title": "Introduction to Cybercrime",
      "duration": "4 weeks",
      "level": "Beginner",
      "students": "37",
      "image": "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg"
    },
    {
      "title": "Introduction to CISSP Security Assessment & Testing",
      "duration": "8 weeks",
      "level": "Advanced",
      "students": "18",
      "image": "https://images.pexels.com/photos/5380754/pexels-photo-5380754.jpeg"
    },
    {
      "title": "Introduction to Cryptography for Beginners",
      "duration": "5 weeks",
      "level": "Beginner",
      "students": "33",
      "image": "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg"
    },
    {
      "title": "Basics of Ethical Hacking",
      "duration": "7 weeks",
      "level": "Intermediate",
      "students": "42",
      "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/ethical-hackers-for-businesses-article.jpg"
    },
    {
      "title": "Introduction to ChatGPT for Cybersecurity",
      "duration": "3 weeks",
      "level": "Beginner",
      "students": "51",
      "image": "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg"
    },
    {
      "title": "Introduction to Kali Linux Basics",
      "duration": "6 weeks",
      "level": "Intermediate",
      "students": "34",
      "image": "https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg"
    }
  ],
  "Data Science & Business Analytics": [
    {
      "title": "Introduction to Data Science",
      "duration": "5 weeks",
      "level": "Beginner",
      "students": "56",
      "image": "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    },
    {
      "title": "Python for Data Science",
      "duration": "6 weeks",
      "level": "Beginner",
      "students": "47",
      "image": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    },
    {
      "title": "Data Visualization with Tableau",
      "duration": "4 weeks",
      "level": "Intermediate",
      "students": "38",
      "image": "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg"
    },
    {
      "title": "Machine Learning for Data Science",
      "duration": "8 weeks",
      "level": "Intermediate",
      "students": "31",
      "image": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
    },
    {
      "title": "Big Data Analytics",
      "duration": "7 weeks",
      "level": "Advanced",
      "students": "24",
      "image": "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg"
    },
    {
      "title": "Business Analytics with Excel",
      "duration": "3 weeks",
      "level": "Beginner",
      "students": "59",
      "image": "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg"
    },
    {
      "title": "Data Science with R",
      "duration": "6 weeks",
      "level": "Intermediate",
      "students": "29",
      "image": "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg"
    },
    {
      "title": "Advanced Data Science",
      "duration": "10 weeks",
      "level": "Advanced",
      "students": "17",
      "image": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    },
    {
      "title": "Data Science for Business",
      "duration": "5 weeks",
      "level": "Intermediate",
      "students": "35",
      "image": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      "title": "Data Science Capstone Project",
      "duration": "8 weeks",
      "level": "Advanced",
      "students": "22",
      "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ],
  "Software Development": [
    {
      "title": "Introduction to Software Development",
      "duration": "4 weeks",
      "level": "Beginner",
      "students": "61",
      "image": "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg"
    },
    {
      "title": "Java Programming",
      "duration": "6 weeks",
      "level": "Beginner",
      "students": "53",
      "image": "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
    },
    {
      "title": "Python Programming",
      "duration": "5 weeks",
      "level": "Beginner",
      "students": "58",
      "image": "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg"
    },
    {
      "title": "C++ Programming",
      "duration": "7 weeks",
      "level": "Intermediate",
      "students": "36",
      "image": "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
    },
    {
      "title": "Web Development with HTML, CSS, and JavaScript",
      "duration": "8 weeks",
      "level": "Beginner",
      "students": "49",
      "image": "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
    },
    {
      "title": "Mobile App Development with Flutter",
      "duration": "9 weeks",
      "level": "Intermediate",
      "students": "31",
      "image": "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
    },
    {
      "title": "Full Stack Development with MERN",
      "duration": "12 weeks",
      "level": "Advanced",
      "students": "27",
      "image": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
    },
    {
      "title": "DevOps Fundamentals",
      "duration": "6 weeks",
      "level": "Intermediate",
      "students": "34",
      "image": "https://images.pexels.com/photos/50711/board-electronics-computer-data-50711.jpeg"
    },
    {
      "title": "Agile Methodologies",
      "duration": "4 weeks",
      "level": "Intermediate",
      "students": "42",
      "image": "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
    },
    {
      "title": "Software Testing Fundamentals",
      "duration": "5 weeks",
      "level": "Beginner",
      "students": "39",
      "image": "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
    }
  ]
}

const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const categories: string[] = ["All", ...Object.keys(courseData)];

  // Flatten all courses into a single array for "All" category and search
  const allCourses: Course[] = Object.values(courseData).flat();

  // Filter courses based on active category and search query
  useEffect(() => {
    let coursesToDisplay: Course[] = [];
    
    if (activeCategory === "All") {
      coursesToDisplay = allCourses;
    } else {
      coursesToDisplay = courseData[activeCategory] || [];
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      coursesToDisplay = coursesToDisplay.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.level.toLowerCase().includes(query)
      );
    }

    setFilteredCourses(coursesToDisplay);
  }, [activeCategory, searchQuery]);

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

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display filtered courses */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={`${course.title}-${index}`}
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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-700">No courses found matching your search</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search terms or browse by category</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Courses;