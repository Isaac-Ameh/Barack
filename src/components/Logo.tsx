import React from 'react';

export const Logo: React.FC<{ className?: string, variant?: 'default' | 'white' }> = ({ className = '', variant = 'default' }) => {
  const isWhite = variant === 'white';
  
  return (
    <div className={`flex items-center gap-0.5 font-display tracking-tighter select-none ${className}`}>
      <span className={`font-bold text-xl md:text-2xl ${isWhite ? 'text-cream' : 'text-espresso'}`}>
        your
      </span>
      <span className={`font-medium text-xl md:text-2xl ${isWhite ? 'text-cream/90' : 'text-espresso/80'}`}>
        email
      </span>
      <div className="flex items-center ml-0.5">
        <span className={`font-bold text-xl md:text-2xl ${isWhite ? 'text-cream' : 'text-[#b48c6f]'}`}>
          br
        </span>
        <div className="relative flex items-center justify-center">
          <span className={`font-bold text-xl md:text-2xl ${isWhite ? 'text-cream' : 'text-[#b48c6f]'}`}>o</span>
          <svg 
            width="12" 
            height="10" 
            viewBox="0 0 20 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto opacity-70"
          >
            <path 
              d="M1 1.5L10 8.5L19 1.5" 
              stroke={isWhite ? "#F9F0EA" : "#b48c6f"} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <rect 
              x="1" 
              y="1" 
              width="18" 
              height="14" 
              rx="2" 
              stroke={isWhite ? "#F9F0EA" : "#b48c6f"} 
              strokeWidth="2.5" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
