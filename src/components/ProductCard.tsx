
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, url, imageSrc }) => {
  return (
    <div 
      className="product-card flex flex-col h-full animate-fade-in"
      style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="image-container aspect-video">
        <img 
          src={imageSrc} 
          alt={`Screenshot of ${title} - MussKo's SaaS product`} 
          className="w-full h-full object-cover"
          loading="lazy"
          width="800"
          height="450"
          itemProp="image"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-mussko-100 text-mussko-700 mb-3">
            SaaS Product
          </div>
          <h3 className="text-xl font-semibold mb-2" itemProp="name">{title}</h3>
        </div>
        <p className="mb-6 flex-grow" itemProp="description">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center font-medium text-mussko-600 hover:text-mussko-800 transition-colors button-shine"
          aria-label={`Visit ${title} website`}
        >
          Visit Website
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
