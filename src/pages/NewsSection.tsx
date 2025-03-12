import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  description?: string;
  content?: string;
  enclosure?: {
    link: string;
    type?: string;
  };
}

interface RssResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    description: string;
  };
  items: NewsItem[];
}

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async (): Promise<void> => {
      try {
        // Using a CORS proxy to fetch the RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            'https://www.wired.com/feed/rss'
          )}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        
        const data: RssResponse = await response.json();
        
        if (data.status === 'ok') {
          setNews(data.items.slice(0, 3)); // Get first 3 news items
        } else {
          throw new Error('Invalid RSS feed');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
        
        // Fallback to dummy data in case of error
        setNews([
          {
            title: 'Latest Technology Trends in AI',
            pubDate: new Date().toISOString(),
            link: '#',
            description: 'Stay updated with the latest developments in artificial intelligence and machine learning.',
            enclosure: {
              link: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
            }
          },
          {
            title: 'The Future of Cloud Computing',
            pubDate: new Date().toISOString(),
            link: '#',
            description: 'Cloud technologies are evolving rapidly. Learn about the newest innovations in the space.',
            enclosure: {
              link: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
            }
          },
          {
            title: 'Cybersecurity Best Practices for 2025',
            pubDate: new Date().toISOString(),
            link: '#',
            description: 'Protect your business with these essential cybersecurity strategies for the coming year.',
            enclosure: {
              link: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
            }
          }
        ]);
      }
    };

    fetchNews();
  }, []);

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Helper function to extract the first few sentences of description
  const getExcerpt = (html: string | undefined, sentenceCount: number = 2): string => {
    if (!html) return '';
    
    // Remove HTML tags
    const text = html.replace(/<\/?[^>]+(>|$)/g, "");
    
    // Split by periods and get first few sentences
    const sentences = text.split(/[.!?]+/);
    return sentences.slice(0, sentenceCount).join('. ') + '...';
  };

  return (
    <section className="py-20 bg-gray-50">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 mb-4">
              <p>{error}</p>
              <p>Showing fallback news items instead</p>
            </div>
          ) : null}
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={item.enclosure?.link || `https://images.unsplash.com/photo-${index === 0 ? '1451187580459-43490279c0fa' : index === 1 ? '1522071820081-009f0129c71c' : '1517245386807-bb43f82c33c4'}?auto=format&fit=crop&q=80`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{formatDate(item.pubDate)}</div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {getExcerpt(item.description || item.content)}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-medium hover:underline flex items-center"
                  >
                    Read Full Article <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="https://www.wired.com/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default NewsSection;