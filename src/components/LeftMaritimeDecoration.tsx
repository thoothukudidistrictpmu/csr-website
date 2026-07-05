import React from 'react';

export const LeftMaritimeDecoration: React.FC = () => {
  return (
    <div className="absolute left-0 bottom-0 top-0 w-1/4 pointer-events-none hidden lg:block overflow-hidden opacity-90 select-none">
      {/* Wave overlays to match the poster's smooth blue gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/75 to-transparent z-0" />
      
      {/* Curved blue abstract vector wave at the top-left */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C 120 0, 240 80, 200 200 L 0 200 Z" fill="url(#topWaveGrad)" opacity="0.15" />
        <defs>
          <linearGradient id="topWaveGrad" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Styled vector illustration representing traditional fishermen, lighthouse, and seagulls */}
      <div className="absolute bottom-16 left-6 right-0 h-96 flex flex-col justify-end z-10">
        
        {/* Seagulls flying */}
        <div className="relative h-24 mb-12">
          {/* Seagull 1 */}
          <svg className="absolute left-8 top-2 w-10 h-6 text-slate-400 animate-pulse" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 2 10 Q 8 2 12 10 Q 16 2 22 10" strokeLinecap="round" />
          </svg>
          {/* Seagull 2 */}
          <svg className="absolute left-24 top-10 w-8 h-5 text-slate-400" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M 2 10 Q 8 2 12 10 Q 16 2 22 10" strokeLinecap="round" />
          </svg>
          {/* Seagull 3 */}
          <svg className="absolute left-16 top-18 w-7 h-4 text-slate-300" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M 2 10 Q 8 2 12 10 Q 16 2 22 10" strokeLinecap="round" />
          </svg>
        </div>

        {/* Lighthouse in background */}
        <svg className="w-16 h-40 text-blue-900/10 ml-4 self-start" viewBox="0 0 100 250" fill="currentColor">
          {/* Base rock */}
          <path d="M 10 240 Q 50 220 90 240 L 90 250 L 10 250 Z" />
          {/* Tower body */}
          <path d="M 35 240 L 42 60 L 58 60 L 65 240 Z" />
          {/* Tower red/blue stripes (represented by cutouts or lines in SVG) */}
          <line x1="39" y1="180" x2="61" y2="180" stroke="#FFF" strokeWidth="12" />
          <line x1="41" y1="120" x2="59" y2="120" stroke="#FFF" strokeWidth="12" />
          {/* Gallery deck */}
          <rect x="36" y="52" width="28" height="8" rx="2" />
          {/* Lantern house */}
          <rect x="42" y="32" width="16" height="20" />
          {/* Dome roof */}
          <path d="M 42 32 Q 50 15 58 32 Z" />
          {/* Light rays (yellow gradient) */}
          <polygon points="50,42 -30,10 -30,90" fill="url(#lighthouseBeam)" opacity="0.3" />
          <defs>
            <linearGradient id="lighthouseBeam" x1="50" y1="42" x2="-30" y2="50">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Traditional Country Boat & Fishermen casting a net */}
        <div className="relative w-full h-36 mt-4">
          <svg className="w-full h-full text-blue-900/30" viewBox="0 0 250 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Net being cast */}
            <path d="M 90 70 C 130 50, 190 70, 220 110 C 160 115, 110 100, 90 70 Z" fill="url(#netPattern)" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
            
            {/* Country Fishing Boat */}
            <path d="M 15 85 C 35 85, 45 92, 95 90 C 125 88, 145 78, 155 60 C 145 95, 105 105, 15 105 Z" fill="#1E3A8A" opacity="0.75" />
            
            {/* Fishermen silhouettes standing in the boat */}
            {/* Fisherman 1 (pushing oar) */}
            <path d="M 32 85 Q 35 60 40 50 Q 45 60 42 85 Z" fill="#1E3A8A" opacity="0.9" />
            <circle cx="38" cy="46" r="3.5" fill="#1E3A8A" opacity="0.9" />
            <line x1="38" y1="52" x2="5" y2="88" stroke="#1E3A8A" strokeWidth="1.5" /> {/* Oar */}

            {/* Fisherman 2 (holding net) */}
            <path d="M 85 86 Q 90 62 93 54 Q 98 64 94 86 Z" fill="#1E3A8A" opacity="0.9" />
            <circle cx="91" cy="50" r="3.5" fill="#1E3A8A" opacity="0.9" />
            {/* Net strings in hand */}
            <line x1="91" y1="58" x2="110" y2="70" stroke="#1E3A8A" strokeWidth="1" />

            {/* Ocean Waves */}
            <path d="M 0 102 Q 35 98 70 102 T 140 102 T 210 102 T 280 102 L 280 120 L 0 120 Z" fill="#1D4ED8" opacity="0.15" />
            <path d="M 0 108 Q 45 105 90 108 T 180 108 T 270 108 L 270 120 L 0 120 Z" fill="#1E3A8A" opacity="0.25" />

            <defs>
              <pattern id="netPattern" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              </pattern>
            </defs>
          </svg>
        </div>

      </div>
    </div>
  );
};
