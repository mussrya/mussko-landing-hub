
import React, { useEffect, useState } from 'react';
import { Sparkle } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToElement(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-mussko-500 rounded-lg text-white">
            <Sparkle size={18} className="animate-pulse" />
          </div>
          <span className={`text-xl font-bold ${scrolled ? 'text-mussko-800' : 'text-white'}`}>MussKo</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className={`text-sm font-medium ${scrolled ? 'text-mussko-700 hover:text-mussko-900' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Products
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`text-sm font-medium ${scrolled ? 'text-mussko-700 hover:text-mussko-900' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Contact
          </a>
        </nav>
        
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors button-shine ${
            scrolled 
              ? 'bg-mussko-600 text-white hover:bg-mussko-700' 
              : 'bg-white text-mussko-700 hover:bg-white/90'
          }`}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
