import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Graduation Ceremony',
    tech: 'Canon D50',
    description: 'Story of a University graduate',
    images: ['1.jpg', '2.jpg', '3.jpg'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    id: 2,
    title: 'Pre Wedding',
    tech: 'Sony E50',
    description: 'When a ceremony brings back old memories',
    images: ['2.jpg', '3.jpg'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    id: 3,
    title: 'Family Re-union',
    tech: 'Sony E50',
    description: 'All inside a same frame after a decade',
    images: ['3.jpg', '1.jpg'],
    links: {
      live: '#',
      code: '#',
    },
  },
];

const ImageSlider = ({ images }) => {
    const [index, setIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    const touchStartX = React.useRef(null);
  
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };
  
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (deltaX > 50) prevSlide();
      if (deltaX < -50) nextSlide();
      touchStartX.current = null;
    };
  
    return (
      <div
        className="absolute inset-0 overflow-hidden z-10"
        onTouchStart={isMobile ? handleTouchStart : null}
        onTouchEnd={isMobile ? handleTouchEnd : null}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-700 ${
              i === index ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          />
        ))}
  
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
  
        {/* Desktop nav arrows */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            <button
              onClick={prevSlide}
              className="text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition shadow-md"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition shadow-md"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    );
  };

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden py-24"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center mb-16"
        >
          Featured Work
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <ImageSlider images={project.images} />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex justify-between items-start mb-4"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-indigo-200 font-medium mb-3">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.live}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  </div>
                </motion.div>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
