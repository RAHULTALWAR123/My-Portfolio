import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Simu Life',
      description: 'A dynamic social platform featuring real-time chat, swipe-based matching, and monetized AI companions powered by Groq/OpenAI with Stripe integration for credit subscriptions and exclusive content access.',
      shortDescription: 'Social platform with AI companions and real-time chat',
      image: '/Screenshot (134).png',
      technologies: ['MERN Stack', 'Framer', 'Groq AI', 'Stripe', 'Socket.IO'],
      githubUrl: 'https://github.com/RAHULTALWAR123/SimuLife-',
      liveUrl: 'https://simulife.onrender.com/',
      featured: true
    },
    {
      title: 'Code HUB',
      description: 'Full-stack online compiler supporting multiple languages with containerized backends, user authentication via Clerk, and subscription management with LemonSqueezy for premium features and code sharing capabilities.',
      shortDescription: 'Online code compiler with multi-language support',
      image: '/Screenshot (133).png',
      technologies: ['Next.js', 'TypeScript', 'Convex', 'Framer'],
      githubUrl: 'https://github.com/RAHULTALWAR123/CodeHUB',
      liveUrl: 'https://code-hub-ihk3.vercel.app/',
      featured: true
    },
    {
      title: 'SplitzX',
      description: 'Expense management application for individuals and groups with advanced splitting options, real-time dashboard for tracking expenses and settlements, and complete settlement logic for shared financial activities.',
      shortDescription: 'Expense splitting and management app',
      image: '/Screenshot (131).png',
      technologies: ['Next.js', 'TypeScript', 'Convex', 'Framer'],
      githubUrl: 'https://github.com/RAHULTALWAR123/SplitzX',
      liveUrl: 'https://splitz-x.vercel.app/',
      featured: true
    },
    {
      title: 'IPL Auction',
      description: 'Real-time auction system for IPL teams with bidding, player retention, and RTM cards. Features multi-cycle auction logic with constraints and an AI-powered bidding assistant for optimal team composition.',
      shortDescription: 'Real-time IPL team auction system',
      image: '/Screenshot (110).png',
      technologies: ['MERN Stack', 'Groq AI', 'Socket.IO', 'Framer'],
      githubUrl: 'https://github.com/RAHULTALWAR123/auction',
      liveUrl: '#',
      featured: false
    }
  ];

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A showcase of my recent work and the technologies I love working with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.shortDescription}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-yellow-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium p-2 hover:bg-gray-700/30 rounded-lg"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium p-2 hover:bg-gray-700/30 rounded-lg"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => openModal(index)}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 group/btn"
                    >
                      Details
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/RAHULTALWAR123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-400/20"
            >
              View All Projects
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Project Detail Modal */}
          {selectedProject !== null && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {projects[selectedProject].title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>

                  <div className="flex gap-4 pt-4 border-t border-gray-800">
                    <a
                      href={projects[selectedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    {projects[selectedProject].liveUrl !== '#' && (
                      <a
                        href={projects[selectedProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;