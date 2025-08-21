import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Thanks for visiting! I'm always excited to work on new projects and connect with fellow creators. 
              Let's build something amazing together.
            </p>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © {currentYear} Alex Johnson. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  Made with <Heart size={16} className="text-red-500" /> and lots of coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;