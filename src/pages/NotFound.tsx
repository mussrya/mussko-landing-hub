
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="glass-card rounded-xl p-12 text-center max-w-md w-full animate-fade-in">
        <h1 className="text-6xl font-bold text-mussko-500 mb-4">404</h1>
        <p className="text-xl text-mussko-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="py-3 px-6 rounded-lg bg-mussko-600 text-white font-medium hover:bg-mussko-700 transition-colors inline-block button-shine"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
