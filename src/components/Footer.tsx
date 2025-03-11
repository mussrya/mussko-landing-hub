
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-mussko-800 mb-4">MussKo</h3>
            <p className="text-mussko-600 max-w-xs">
              Specializing in building innovative SaaS products that simplify complex business processes.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-mussko-800 mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://scheduleleave.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-mussko-600 hover:text-mussko-800 transition-colors"
                >
                  ScheduleLeave
                </a>
              </li>
              <li>
                <a 
                  href="https://genalttext.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-mussko-600 hover:text-mussko-800 transition-colors"
                >
                  GenAltText
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-mussko-800 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-mussko-600 hover:text-mussko-800 transition-colors"
                >
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-mussko-500 text-center">
            © {currentYear} MussKo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
