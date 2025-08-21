import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'talwarrahul295@gmail.com',
      href: 'mailto:talwarrahul295@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8447807040',
      href: '#'
    },
   
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/RAHULTALWAR123',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rahul-talwar-5b84ba24b/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:talwarrahul295@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm always open to new opportunities and interesting conversations. Let's connect!
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex justify-center items-center  gap-8 mb-12">
              {contactInfo.map(({ icon: Icon, title, content, href }) => (
                <a
                  key={title}
                  href={href}
                  className="flex w-60 flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-200">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{title}</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">{content}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-6">Follow me on</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-200 hover:scale-110 transform p-3 bg-gray-800/50 rounded-full hover:bg-yellow-400/10"
                    aria-label={label}
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rahul Talwar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;