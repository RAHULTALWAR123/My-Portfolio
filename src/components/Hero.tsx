import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with the actual path to your resume PDF in the public folder
    const resumeUrl = '/Rahul-Talwar.pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rahul_Talwar_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-yellow-400">Rahul Talwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delayed">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delayed-2">
            I create beautiful, functional web experiences that solve real problems and delight users. 
            Passionate about clean code, modern design, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delayed-3">
            <button 
              onClick={scrollToProjects}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={downloadCV}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-105"
            >
              Download CV
            </button>
          </div>

          {/* <div className="flex justify-center space-x-6 animate-fade-in-delayed-4">
            {[
              { icon: Github, href: 'https://github.com/RAHULTALWAR123', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rahul-talwar-0b2b2b1b3/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rahul.talwar1234@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce cursor-pointer hover:text-yellow-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;