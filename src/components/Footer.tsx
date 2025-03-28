
import React from 'react';
import { Sparkle } from 'lucide-react';
import { scrollToElement } from '@/utils/scrollUtils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToElement(id);
  };
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div itemScope itemType="https://schema.org/Organization">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-mussko-500 rounded-lg text-white">
                <Sparkle size={18} className="animate-pulse" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold" itemProp="name">MussKo</h3>
            </div>
            <p className="max-w-xs" itemProp="description">
              Specializing in building innovative SaaS products that simplify complex business processes.
            </p>
            <meta itemProp="url" content="https://mussko.com/" />
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://scheduleleave.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:text-gray-700 transition-colors"
                  aria-label="Visit ScheduleLeave website"
                >
                  ScheduleLeave
                </a>
              </li>
              <li>
                <a 
                  href="https://genalttext.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:text-gray-700 transition-colors"
                  aria-label="Visit GenAltText website"
                >
                  GenAltText
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-sm text-black hover:text-gray-700 transition-colors"
                  aria-label="Go to contact form"
                >
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-center">
            © {currentYear} MussKo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
