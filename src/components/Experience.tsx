import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Defence Research and Development Organisation (DRDO)',
      position: 'Software Developer',
      duration: '3 months',
      location: 'New Delhi, India',
      type: 'Internship',
      description: 'I designed and developed a Role-Based Trainee Management System for DRDO, providing separate access for HODs and Mentors to ensure secure and structured user interactions. The system streamlines student data management through both manual entry and CSV upload, enabling HODs to efficiently assign mentors and track trainee progress. For mentors, it incorporates task management features such as task assignment, trainee status monitoring, and certificate issuance, thereby enhancing oversight, automation, and the overall efficiency of the intern lifecycle.',
      
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js','Tailwind CSS','Framer-motion']
    },
    {
      company: 'Xiorent Technologies',
      position: 'Full Stack Developer',
      duration: 'Present',
      location: 'Remote (Kolkata)',
      type: 'Full Time',
      description: 'Worked on multiple projects in parallel, contributing to frontend development (UI design, feature implementation,AI Integration, and third-party API integrations) and backend engineering (API creation, business logic, and database design) . Delivered scalable, efficient, and user-friendly solutions by integrating AI features, external APIs, and custom backend services,ensuring seamless collaboration between systems and enhancing overall project functionality.',
      
      technologies: ['JavaScript','Nextjs','TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js','Tailwind CSS','Framer-motion']
    },
    {
      company: 'BrandStory',
      position: 'Full Stack Developer',
      duration: 'Present',
      location: 'Remote (Banglore)',
      type: 'Internship',
      description: 'Worked on frontend development using React and TypeScript/JavaScript to build responsive UIs and optimize userexperience. Contributed to backend APIs with Node.js managing SQL/NoSQL databases and ensuring smooth integrationwith REST and third-party APIs.. Assisted in testing, debugging, and QA processes while collaborating through Git/GitHub. Gained exposure to clouddeployments (AWS, Vercel) and CI/CD pipelines, supporting efficient development and release workflows.',
      
      technologies: ['JavaScript','Nextjs','AWS Exposure', 'React', 'Node.js', 'MongoDB', 'Express.js','Tailwind CSS','Framer-motion']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="text-yellow-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              My journey in software development, contributing to impactful projects and growing as a developer
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="text-yellow-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      </div>
                      <h4 className="text-xl text-yellow-400 font-semibold mb-3">{exp.position}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-gray-700 rounded-full text-yellow-400 font-medium">
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  

                  <div>
                    <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;