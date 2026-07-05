import React from 'react';

interface TamilNaduEmblemProps {
  className?: string;
  size?: number;
}

export const TamilNaduEmblem: React.FC<TamilNaduEmblemProps> = ({ className = '', size = 115 }) => {
  const logoCandidates = [
    "/tamilnadu_logo.jpg",
    "/tamilnadu_logo.png",
    "/assets/tamilnadu_logo.jpg",
    "/assets/tamilnadu_logo.png",
  ];
  const [candidateIndex, setCandidateIndex] = React.useState(0);

  const handleImageError = () => {
    setCandidateIndex((prev) => prev + 1);
  };

  const showImage = candidateIndex < logoCandidates.length;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {showImage ? (
        <img
          src={logoCandidates[candidateIndex]}
          alt="Government of Tamil Nadu Emblem"
          style={{ width: size, height: size }}
          className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
          referrerPolicy="no-referrer"
          id="uploaded-tn-logo"
        />
      ) : (
        /* High-fidelity Vector Representation of the Tamil Nadu Government Emblem (Matches User Uploaded Image) */
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md hover:scale-105 transition-transform duration-300"
          id="tn-government-seal"
        >
        {/* Outer Deep Green Circular Border */}
        <circle cx="100" cy="100" r="95" fill="white" stroke="#14532D" strokeWidth="5" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#166534" strokeWidth="1" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="#166534" strokeWidth="1" strokeDasharray="3,1" />

        {/* Outer Text Circle Paths */}
        <defs>
          {/* Top text path (clockwise, arched over the top) */}
          <path id="textPathTop" d="M 28 100 A 72 72 0 0 1 172 100" />
          {/* Bottom text path (clockwise but at the bottom, so it reads left-to-right upright at bottom) */}
          <path id="textPathBottom" d="M 172 100 A 72 72 0 0 1 28 100" />
        </defs>

        {/* Circular text in Tamil from uploaded image: "தமிழ்நாடு அரசு" at top, "வாய்மையே வெல்லும்" at bottom */}
        <text fontFamily="Inter, 'Noto Sans Tamil', system-ui, sans-serif" fontSize="15" fontWeight="900" fill="#14532D" letterSpacing="0.5">
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            தமிழ்நாடு அரசு
          </textPath>
        </text>

        <text fontFamily="Inter, 'Noto Sans Tamil', system-ui, sans-serif" fontSize="12" fontWeight="900" fill="#14532D" letterSpacing="0.5">
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            வாய்மையே வெல்லும்
          </textPath>
        </text>

        {/* Inner Border Ring */}
        <circle cx="100" cy="100" r="68" fill="none" stroke="#14532D" strokeWidth="2.5" />

        {/* Laurel/Palm Leaf Branches on left and right, matching the uploaded emblem */}
        {/* Left Palm Branch */}
        <g id="left-branch" stroke="#14532D" strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
          <path d="M 44 115 C 38 100, 38 80, 48 65" fill="none" />
          {/* Leaflets */}
          <line x1="42" y1="110" x2="34" y2="108" />
          <line x1="40" y1="102" x2="31" y2="99" />
          <line x1="39" y1="94" x2="30" y2="90" />
          <line x1="39" y1="86" x2="30" y2="81" />
          <line x1="41" y1="78" x2="33" y2="72" />
          <line x1="44" y1="71" x2="38" y2="65" />
          <line x1="48" y1="65" x2="43" y2="59" />
        </g>

        {/* Right Palm Branch */}
        <g id="right-branch" stroke="#14532D" strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
          <path d="M 156 115 C 162 100, 162 80, 152 65" fill="none" />
          {/* Leaflets */}
          <line x1="158" y1="110" x2="166" y2="108" />
          <line x1="160" y1="102" x2="169" y2="99" />
          <line x1="161" y1="94" x2="170" y2="90" />
          <line x1="161" y1="86" x2="170" y2="81" />
          <line x1="159" y1="78" x2="167" y2="72" />
          <line x1="156" y1="71" x2="162" y2="65" />
          <line x1="152" y1="65" x2="157" y2="59" />
        </g>

        {/* Srivilliputhur Andal Temple Gopuram (Tower) - Rendered beautifully in Golden Orange */}
        <g id="gopuram" transform="translate(100, 110) scale(0.72)">
          {/* Base foundation platform */}
          <rect x="-45" y="0" width="90" height="10" fill="#CA8A04" stroke="#854D0E" strokeWidth="1.5" rx="1" />
          
          {/* Tier 1 */}
          <path d="M -38 0 L -32 -25 L 32 -25 L 38 0 Z" fill="#EAB308" stroke="#854D0E" strokeWidth="1.5" />
          {/* Windows on Tier 1 */}
          <rect x="-24" y="-17" width="8" height="11" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />
          <rect x="-4" y="-17" width="8" height="11" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />
          <rect x="16" y="-17" width="8" height="11" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />
          
          {/* Tier 2 */}
          <path d="M -31 -25 L -25 -48 L 25 -48 L 31 -25 Z" fill="#F59E0B" stroke="#854D0E" strokeWidth="1.5" />
          {/* Windows on Tier 2 */}
          <rect x="-18" y="-40" width="7" height="9" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />
          <rect x="-3.5" y="-40" width="7" height="9" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />
          <rect x="11" y="-40" width="7" height="9" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" rx="0.5" />

          {/* Tier 3 */}
          <path d="M -24 -48 L -18 -68 L 18 -68 L 24 -48 Z" fill="#EAB308" stroke="#854D0E" strokeWidth="1.5" />
          {/* Windows on Tier 3 */}
          <rect x="-12" y="-60" width="6" height="8" fill="#FEF08A" stroke="#78350F" strokeWidth="1" rx="0.5" />
          <rect x="-3" y="-60" width="6" height="8" fill="#FEF08A" stroke="#78350F" strokeWidth="1" rx="0.5" />
          <rect x="6" y="-60" width="6" height="8" fill="#FEF08A" stroke="#78350F" strokeWidth="1" rx="0.5" />

          {/* Tier 4 */}
          <path d="M -17 -68 L -12 -85 L 12 -85 L 17 -68 Z" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
          {/* Windows on Tier 4 */}
          <rect x="-7" y="-78" width="5" height="6" fill="#FEF08A" stroke="#78350F" strokeWidth="1" rx="0.5" />
          <rect x="2" y="-78" width="5" height="6" fill="#FEF08A" stroke="#78350F" strokeWidth="1" rx="0.5" />

          {/* Tier 5 (Top deck) */}
          <path d="M -11 -85 L -7 -98 L 7 -98 L 11 -85 Z" fill="#EAB308" stroke="#78350F" strokeWidth="1.5" />
          
          {/* Top Dome (Kalasams) */}
          <path d="M -7 -98 L 7 -98 L 5 -105 L -5 -105 Z" fill="#CA8A04" stroke="#78350F" strokeWidth="1" />
          <circle cx="0" cy="-110" r="3.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
          <circle cx="-6" cy="-108" r="2.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
          <circle cx="6" cy="-108" r="2.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />

          {/* White detailing lines across tiers */}
          <line x1="-34" y1="-1" x2="34" y2="-1" stroke="#FFF" strokeWidth="1" opacity="0.6" />
          <line x1="-28" y1="-26" x2="28" y2="-26" stroke="#FFF" strokeWidth="1" opacity="0.6" />
          <line x1="-21" y1="-49" x2="21" y2="-49" stroke="#FFF" strokeWidth="1" opacity="0.6" />
          <line x1="-15" y1="-69" x2="15" y2="-69" stroke="#FFF" strokeWidth="1" opacity="0.6" />
          <line x1="-9" y1="-86" x2="9" y2="-86" stroke="#FFF" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Ashoka Lion Capital (Foreground overlay, matching the red/saffron color scheme of the uploaded emblem) */}
        <g id="ashoka-lions" transform="translate(100, 118) scale(0.7)">
          {/* Pedestal with Indian Flag Tricolor */}
          <rect x="-18" y="12" width="36" height="8" fill="#F97316" rx="1" /> {/* Saffron layer */}
          <rect x="-18" y="16" width="36" height="4" fill="#FFFFFF" /> {/* White layer */}
          <rect x="-18" y="18" width="36" height="2" fill="#16A34A" /> {/* Green layer */}
          
          {/* Ashok Chakra blue wheel at center of white layer */}
          <circle cx="0" cy="16" r="2" fill="none" stroke="#1D4ED8" strokeWidth="0.8" />
          <line x1="0" y1="14" x2="0" y2="18" stroke="#1D4ED8" strokeWidth="0.5" />
          <line x1="-2" y1="16" x2="2" y2="16" stroke="#1D4ED8" strokeWidth="0.5" />

          {/* Lions in vibrant Crimson/Red-Orange matching the logo */}
          <g fill="#EF4444" stroke="#991B1B" strokeWidth="1">
            {/* Left Lion face/chest */}
            <path d="M -14 12 C -18 -6, -6 -8, -6 12 Z" />
            {/* Right Lion face/chest */}
            <path d="M 14 12 C 18 -6, 6 -8, 6 12 Z" />
            {/* Center Main Lion profile */}
            <path d="M -8 12 Q 0 -18 8 12 Z" />
            {/* Mane fluff & head outline */}
            <path d="M -4 -2 Q 0 -14 4 -2 Z" fill="#FEE2E2" stroke="#991B1B" strokeWidth="0.8" />
            <circle cx="0" cy="-4" r="2.5" fill="#EF4444" />
          </g>
        </g>
      </svg>
      )}

      {/* Bilingual Emblem Titles below the seal */}
      <div className="text-center mt-2.5" id="emblem-labels">
        <p className="text-[12px] font-black tracking-widest text-[#14532D] font-sans leading-none uppercase">
          Government of Tamil Nadu
        </p>
        <p className="text-[10px] font-bold text-slate-500 font-sans mt-1">
          Thoothukudi District Administration
        </p>
      </div>
    </div>
  );
};

