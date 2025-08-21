import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'Creating user experiences that are both beautiful and functional'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every project'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely loving what I do and continuously learning'
    }
  ];

  return (
    <section id="about" aria-label="About Me section" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, my name is Rahul Talwar. I am currently pursuing my studies at 
                Maharaja Agrasen Institute of Technology, where I am building a strong 
                foundation in Information Technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I have a keen interest in full stack and front-end web development, 
                especially working with the MERN stack, and I’m passionate about exploring 
                the role of AI in modern applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond academics, I enjoy problem-solving, working on real-world projects, 
                and experimenting with new technologies. My goal is to create impactful 
                applications that combine creativity and technology to solve meaningful problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 
                             hover:border-yellow-400/30 transition-transform duration-300 transform hover:scale-105"
                >
                  <div className="text-yellow-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;