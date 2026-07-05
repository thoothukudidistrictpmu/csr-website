import React from 'react';

export const RightMaritimeDecoration: React.FC = () => {
  return (
    <div className="absolute right-0 bottom-0 top-0 w-1/4 pointer-events-none hidden lg:block overflow-hidden opacity-90 select-none">
      {/* Wave overlays to match the poster's smooth blue gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-50/75 to-transparent z-0" />
      
      {/* Curved blue abstract vector wave at the bottom-right */}
      <svg className="absolute bottom-0 right-0 w-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M300 300 C 180 300, 100 240, 100 100 L 300 0 Z" fill="url(#bottomWaveGrad)" opacity="0.12" />
        <defs>
          <linearGradient id="bottomWaveGrad" x1="300" y1="300" x2="100" y2="100">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Styled vector illustration representing modern container cranes and port container ship */}
      <div className="absolute bottom-16 right-6 left-0 h-96 flex flex-col justify-end items-end z-10">

        {/* Dynamic Industrial Cargo Crane 1 */}
        <svg className="w-40 h-56 text-blue-900/15 mr-4" viewBox="0 0 200 250" fill="currentColor">
          {/* Main vertical lattice tower */}
          <rect x="130" y="80" width="12" height="150" />
          <rect x="155" y="80" width="12" height="150" />
          {/* Diagonal braces */}
          <line x1="130" y1="90" x2="167" y2="120" stroke="currentColor" strokeWidth="3" />
          <line x1="167" y1="120" x2="130" y2="150" stroke="currentColor" strokeWidth="3" />
          <line x1="130" y1="150" x2="167" y2="180" stroke="currentColor" strokeWidth="3" />
          <line x1="167" y1="180" x2="130" y2="210" stroke="currentColor" strokeWidth="3" />
          <line x1="130" y1="210" x2="167" y2="230" stroke="currentColor" strokeWidth="3" />

          {/* Top machine deck */}
          <rect x="120" y="65" width="55" height="15" rx="1" />

          {/* Boom / Jib arm stretching left (over the ship) */}
          <rect x="10" y="68" width="115" height="6" />
          <rect x="30" y="54" width="95" height="4" transform="rotate(6, 125, 54)" />
          {/* Vertical stay lines */}
          <line x1="10" y1="71" x2="130" y2="65" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="71" x2="130" y2="65" stroke="currentColor" strokeWidth="1.5" />
          <line x1="90" y1="71" x2="130" y2="65" stroke="currentColor" strokeWidth="1.5" />

          {/* Trolley and Spreader (container hook) */}
          <rect x="45" y="74" width="10" height="6" />
          <line x1="50" y1="80" x2="50" y2="120" stroke="currentColor" strokeWidth="1" />
          <rect x="42" y="120" width="16" height="6" fill="#F59E0B" opacity="0.8" /> {/* Container hook yellow */}

          {/* Crane legs base */}
          <rect x="110" y="225" width="70" height="10" rx="2" />
        </svg>

        {/* Industrial Container Ship (Cargo vessel) docked */}
        <div className="relative w-full h-32 mr-2">
          <svg className="w-full h-full text-blue-900/30" viewBox="0 0 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cargo Vessel Hull */}
            <path d="M 50 82 L 180 82 Q 220 82 230 68 L 240 68 L 225 100 L 50 100 Z" fill="#1E3A8A" opacity="0.7" />
            
            {/* Ship Cabin / Bridge superstructure */}
            <rect x="60" y="48" width="25" height="34" fill="#1E3A8A" opacity="0.85" />
            <rect x="65" y="36" width="15" height="12" fill="#1E3A8A" opacity="0.85" />
            <line x1="72" y1="36" x2="72" y2="20" stroke="#1E3A8A" strokeWidth="1.5" /> {/* Radar mast */}

            {/* Containers loaded on deck */}
            {/* Container stacks - colored blocks to make it look realistic */}
            <rect x="95" y="62" width="20" height="20" fill="#EF4444" opacity="0.8" rx="1" /> {/* Red */}
            <rect x="117" y="62" width="20" height="20" fill="#3B82F6" opacity="0.8" rx="1" /> {/* Blue */}
            <rect x="139" y="62" width="20" height="20" fill="#10B981" opacity="0.8" rx="1" /> {/* Green */}
            
            <rect x="161" y="68" width="20" height="14" fill="#F59E0B" opacity="0.8" rx="1" /> {/* Orange */}
            <rect x="183" y="72" width="20" height="10" fill="#8B5CF6" opacity="0.8" rx="1" /> {/* Purple */}
            
            <rect x="100" y="44" width="20" height="18" fill="#10B981" opacity="0.7" rx="1" /> {/* Second tier */}
            <rect x="122" y="48" width="20" height="14" fill="#EF4444" opacity="0.7" rx="1" />
            
            {/* Port Water Dock waves */}
            <path d="M 0 98 Q 45 96 90 98 T 180 98 T 270 98 L 270 120 L 0 120 Z" fill="#0284C7" opacity="0.15" />
            <path d="M 0 104 Q 35 102 70 104 T 140 104 T 210 104 T 280 104 L 280 120 L 0 120 Z" fill="#1E3A8A" opacity="0.2" />
          </svg>
        </div>

      </div>
    </div>
  );
};
