
import React from 'react';
import { Sparkle } from 'lucide-react';

const Favicon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="4" fill="#1b1aff" />
      <g transform="translate(6, 6) scale(0.8)">
        <Sparkle size={24} color="white" />
      </g>
    </svg>
  );
};

export default Favicon;
