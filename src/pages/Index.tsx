
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

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
      
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-mussko-50 via-mussko-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjZmZmIiB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3MDAiLz48Y2lyY2xlIHN0cm9rZT0iIzFiMWFmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxMCIgY3g9IjcwMCIgY3k9IjUwMCIgcj0iMjAwIi8+PGNpcmNsZSBzdHJva2U9IiMxYjFhZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiIHN0cm9rZS13aWR0aD0iMjAiIGN4PSI3MDAiIGN5PSI1MDAiIHI9IjMwMCIvPjxjaXJjbGUgc3Ryb2tlPSIjMWIxYWZmIiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2Utd2lkdGg9IjIwIiBjeD0iNzAwIiBjeT0iNTAwIiByPSI0MDAiLz48cGF0aCBkPSJNMTQ0MCAyNTB2NDUwSDBWMjUwUTYwMC41IDUwIDcyMCA1MHE1NTMgMCA3MjAgMjAweiIgZmlsbD0iIzFiMWFmZiIgZmlsbC1vcGFjaXR5PSIuMDIiLz48L2c+PC9zdmc+')] opacity-40 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ animationFillMode: 'both' }}>
              We Build <span className="text-gradient">Innovative</span> SaaS Products
            </h1>
            <p className="text-xl text-mussko-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Simplifying complex business processes with elegant software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <a 
                href="#products" 
                className="py-3 px-8 rounded-lg bg-mussko-600 text-white font-medium hover:bg-mussko-700 transition-colors button-shine"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="py-3 px-8 rounded-lg border border-mussko-300 text-mussko-700 font-medium hover:bg-mussko-50 transition-colors"
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
            <p className="text-lg text-mussko-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
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
              <p className="text-lg text-mussko-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Have questions about our products or interested in learning more? We'd love to hear from you!
              </p>
              <div className="bg-white rounded-xl p-6 border border-mussko-100 shadow-sm mb-6 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <h3 className="text-lg font-semibold mb-2">Why Choose MussKo?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-mussko-100 text-mussko-700 mr-3">✓</span>
                    <span>Innovative SaaS solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-mussko-100 text-mussko-700 mr-3">✓</span>
                    <span>Simplify complex business processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-mussko-100 text-mussko-700 mr-3">✓</span>
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
