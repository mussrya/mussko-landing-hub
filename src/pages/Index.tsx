
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Rocket, Code, HeadsetIcon } from 'lucide-react';

const Index: React.FC = () => {
  const products = [
    {
      title: "ScheduleLeave",
      description: "Intuitive staff holiday planner software which eliminates the need for complicated spreadsheets, paper forms, and email approvals. Track absences and leave in real-time, making leave management straightforward and efficient.",
      url: "https://scheduleleave.com/",
      imageSrc: "https://scheduleleave.com/wp-content/uploads/2019/07/pic-2.jpg"
    },
    {
      title: "GenAltText",
      description: "Create Alt Text Automatically Using AI In WordPress, Saving Time & Effort To Focus On Higher Value Work.",
      url: "https://genalttext.app/",
      imageSrc: "https://genalttext.app/wp-content/uploads/2024/10/web-image-scaled.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Vibrant Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mussko-600 via-mussko-500 to-purple-500 z-0"></div>
        
        {/* Animated geometric shapes with enhanced animations */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Large rectangle with enhanced slow floating animation */}
          <div className="absolute -right-20 top-1/4 w-96 h-64 bg-white/20 rounded-2xl rotate-12 backdrop-blur-sm animate-floating-slow shadow-lg"></div>
          
          {/* Small square with enhanced rotating animation */}
          <div className="absolute left-1/4 bottom-1/4 w-40 h-40 bg-mussko-300/30 rounded-xl -rotate-12 backdrop-blur-sm animate-floating-rotate shadow-lg"></div>
          
          {/* Medium rectangle with enhanced bobbing animation */}
          <div className="absolute left-10 top-20 w-72 h-40 bg-purple-300/20 rounded-2xl rotate-6 backdrop-blur-sm animate-floating-medium shadow-lg"></div>
          
          {/* Circle with enhanced pulse animation */}
          <div className="absolute right-1/4 bottom-10 w-56 h-56 bg-blue-300/20 rounded-full backdrop-blur-sm animate-pulse-slow shadow-lg"></div>
          
          {/* Additional shapes for more movement */}
          <div className="absolute left-2/3 top-1/3 w-24 h-24 bg-yellow-300/20 rounded-lg backdrop-blur-sm animate-floating-fast shadow-lg"></div>
          <div className="absolute right-1/3 top-1/6 w-28 h-28 bg-pink-300/20 rounded-full backdrop-blur-sm animate-pulse shadow-lg"></div>
          
          {/* New diagonal-moving shape */}
          <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-green-300/20 rounded-lg backdrop-blur-sm animate-move-diagonal shadow-lg"></div>
          
          {/* New circular-moving shape */}
          <div className="absolute right-1/5 top-2/3 w-36 h-36 bg-indigo-300/20 rounded-3xl backdrop-blur-sm animate-move-circular shadow-lg"></div>
          
          {/* Small dots with faster movements */}
          <div className="absolute left-10 bottom-20 w-8 h-8 bg-white/40 rounded-full animate-floating-fast shadow-md"></div>
          <div className="absolute right-20 top-40 w-6 h-6 bg-white/40 rounded-full animate-floating-medium shadow-md"></div>
          <div className="absolute left-1/2 top-1/6 w-10 h-10 bg-white/40 rounded-full animate-floating-fast shadow-md"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up" style={{ animationFillMode: 'both' }}>
              We Build <span className="text-gradient">Innovative</span> SaaS Products
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Simplifying complex business processes with elegant software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <a 
                href="#products" 
                className="py-3 px-8 rounded-lg bg-white text-mussko-700 font-medium hover:bg-opacity-90 transition-colors button-shine"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="py-3 px-8 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-mussko-100 text-mussko-700 mb-3 animate-fade-in" style={{ animationFillMode: 'both' }}>
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
              Powerful SaaS Products
            </h2>
            <p className="text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Discover our suite of innovative software solutions designed to enhance productivity and simplify workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                url={product.url}
                imageSrc={product.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-mussko-100 text-mussko-700 mb-3 animate-fade-in" style={{ animationFillMode: 'both' }}>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
                Contact Us
              </h2>
              <p className="text-lg mb-6 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Have questions about our products or interested in learning more? We'd love to hear from you!
              </p>
              <div className="bg-white rounded-xl p-6 border border-mussko-100 shadow-sm mb-6 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <h3 className="text-lg font-semibold mb-2">Why Choose MussKo?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-mussko-100 text-mussko-700 mr-3">
                      <Rocket size={18} />
                    </span>
                    <span>Innovative SaaS solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-mussko-100 text-mussko-700 mr-3">
                      <Code size={18} />
                    </span>
                    <span>Simplify complex business processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-mussko-100 text-mussko-700 mr-3">
                      <HeadsetIcon size={18} />
                    </span>
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
