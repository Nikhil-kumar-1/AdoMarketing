import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Dr Jitendra Mohan Jha",
      description: "Complete digital marketing solution for a leading heart specialist.",
      image: "dr.webp",
      category: "Web App",
      tags: ["UI/UX", "React", "Tailwind CSS"],
      link: "https://drjitendramohanjha.com"
    },
    {
      id: 2,
      title: "City Mechanics",
      description: "Lead generation campaign for luxury car dealership",
      image: "cityM.webp",
      category: "Website",
      tags: ["Website", "SEO", "Digital Marketing"],
      link: "https://citymechanics.in"
    },
    {
      id: 3,
      title: "True Dreams Classes",
      description: "Online tutoring platform for students of all ages",
      image: "truedreams.webp",
      category: "Website",
      tags: ["Education", "Online Learning", "LMS"],
      link: "https://truedreamsclasses.com"
    },
    {
      id: 4,
      title: "Golden Storm",
      description: "Digital strategy for a leading event management company",
      image: "golden.webp",
      category: "Marketing",
      tags: ["Digital Marketing", "SEO", "PPC"],
      link: "https://goldenstorm.in"
    },
  ];

  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we transform ideas into digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ProjectModal 
            project={projects.find(p => p.id === selectedId)} 
            onClose={() => setSelectedId(null)}
            onNext={() => {
              const currentIndex = projects.findIndex(p => p.id === selectedId);
              const nextIndex = (currentIndex + 1) % projects.length;
              setSelectedId(projects[nextIndex].id);
            }}
            onPrev={() => {
              const currentIndex = projects.findIndex(p => p.id === selectedId);
              const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
              setSelectedId(projects[prevIndex].id);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-800"
    >
      <div className="aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{project.category}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${project.id}`}
        className="relative bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2"
        >
          <FiX size={20} />
        </button>

        <div className="h-48 sm:h-64 bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="mb-6">
            <span className="text-emerald-400 text-sm font-medium">{project.category}</span>
            <h2 className="text-2xl font-bold text-white mt-1">{project.title}</h2>
          </div>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-white font-medium mb-2">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          

          <div className="flex justify-between pt-4 border-t border-gray-700">
            <button 
              onClick={onPrev}
              className="text-gray-400 hover:text-white flex items-center text-sm"
            >
              <FiChevronLeft className="mr-1" />
              Previous
            </button>
            <button 
              onClick={onNext}
              className="text-gray-400 hover:text-white flex items-center text-sm"
            >
              Next
              <FiChevronRight className="ml-1" />
            </button>
            <Link to={project.link}>
             <button className=" bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center cursor-pointer">
              <FiExternalLink className="mr-2" />
              Visit Project
            </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;