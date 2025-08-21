import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu,
  GitBranch
} from 'lucide-react';

// React Icons imports
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiCplusplus, SiTypescript, SiMysql, SiCodingninjas } from 'react-icons/si';
import { SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiSocketdotio } from 'react-icons/si';
import { SiPostman, SiVercel, SiGit, SiGithub, } from 'react-icons/si';
import { TbBlocks } from 'react-icons/tb';
import { RiSupabaseFill } from 'react-icons/ri';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'JavaScript ES6+', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Convex', icon: RiSupabaseFill, color: '#339933' }, // Using React icon as placeholder
        { name: 'Auth/JWT', icon: SiJsonwebtokens, color: '#000000' },
        { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' }
      ]
    },
    {
      title: 'Skills',
      icon: Cpu,
      skills: [
        { name: 'Data Structures', icon: SiCodingninjas, color: '#F05032' }, // Using C++ icon as placeholder
        { name: 'Algorithms', icon: TbBlocks, color: '#00599C' }, // Using C++ icon as placeholder
        { name: 'REST APIs', icon: SiExpress, color: '#000000' }, // Using Express icon as placeholder
        { name: 'Responsive Design', icon: SiCss3, color: '#1572B6' }, // Using CSS3 icon as placeholder
        { name: 'State Management', icon: SiReact, color: '#61DAFB' } // Using React icon as placeholder
      ]
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-yellow-400">Tech Stack</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map(({ title, icon: CategoryIcon, skills }) => (
              <div
                key={title}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-yellow-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  <CategoryIcon size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {skills.map(({ name, icon: TechIcon, color }) => (
                    <div 
                      key={name} 
                      className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg hover:bg-yellow-400/10 transition-colors group/item"
                      title={name}
                    >
                      <div className="mb-2 group-hover/item:scale-110 transition-transform" style={{ color }}>
                        <TechIcon size={24} />
                      </div>
                      <span className="text-xs text-gray-300 text-center group-hover/item:text-white transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              ...and always learning new technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;