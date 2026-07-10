import React from 'react';
import { Calendar, Globe } from 'lucide-react';
import { TamilNaduEmblem } from './TamilNaduEmblem';
import { LeftMaritimeDecoration } from './LeftMaritimeDecoration';
import { RightMaritimeDecoration } from './RightMaritimeDecoration';
import bgImage from '../assets/images/thoothukudi_beach_sunset_1783275719929.jpg';

interface LaunchPosterProps {
  onLaunch: () => void;
  onOpenSponsors: () => void;
  onOpenFisheries: () => void;
  onOpenCollector: () => void;
}

export const LaunchPoster: React.FC<LaunchPosterProps> = ({
  onLaunch,
  onOpenSponsors,
  onOpenFisheries,
  onOpenCollector
}) => {
  const [isLaunching, setIsLaunching] = React.useState(false);
  const [countdown, setCountdown] = React.useState<number | null>(null);

  const handleLaunchClick = () => {
    setIsLaunching(true);
    setCountdown(3);

    // Play a lovely HTML5 Audio Synthesized beep pattern for the countdown!
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        
        const playBeep = (freq: number, duration: number, delay: number) => {
          setTimeout(() => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.start();
            osc.stop(ctx.currentTime + duration);
          }, delay);
        };

        // 3... 2... 1... Launch chimes
        playBeep(440, 0.15, 0);       // beep 3
        playBeep(440, 0.15, 1000);    // beep 2
        playBeep(440, 0.15, 2000);    // beep 1
        playBeep(880, 0.6, 3000);     // LAUNCH FANFARE CHIME!
      }
    } catch (e) {
      console.warn("Web Audio API not supported or blocked: ", e);
    }

    // Countdown interval
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(() => {
            onLaunch();
          }, 800);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div 
      className="h-screen max-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex flex-col justify-between p-2 md:p-6" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('${bgImage}')` 
      }}
      id="launch-poster-portal"
    >
      
      {/* Main Content Container - Entirely transparent, letting the beautiful original Thoothukudi background display natively with no layout boxes */}
      <div 
        className="max-w-4xl w-full mx-auto my-auto relative z-30 flex flex-col items-center py-2 px-4"
      >
        
        {/* TOP: Tamil Nadu Government Emblem (No background box) */}
        <div className="mb-3 md:mb-4 flex items-center justify-center" id="main-header-emblem">
          <TamilNaduEmblem size={85} />
        </div>
 
        {/* Center Title Layout with clear high contrast text-shadows */}
        <div className="text-center space-y-2 md:space-y-3 max-w-3xl w-full">
          <div>
            <p className="text-amber-300 font-serif italic text-2xl md:text-4xl font-black tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Welcome to
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none uppercase font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            CSR Website
          </h1>

          {/* Subtitle "LAUNCH PROGRAM" enclosed with clean gold trim lines and text-shadow */}
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="h-[2.5px] bg-amber-400 w-12 md:w-24 shadow-md" />
            <h2 className="text-sm md:text-2xl font-black tracking-[0.25em] text-yellow-300 uppercase font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Launch Program
            </h2>
            <div className="h-[2.5px] bg-amber-400 w-12 md:w-24 shadow-md" />
          </div>
        </div>

        {/* CENTER ACTION: LAUNCH WEBSITE BUTTON */}
        <div className="my-4 md:my-6 relative">
          {isLaunching ? (
            <div className="flex flex-col items-center gap-3 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-2xl min-w-[300px] animate-fade-in">
              {countdown === 0 ? (
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-black text-emerald-900 animate-bounce">🚀 LAUNCHING...</span>
                  <p className="text-[10px] text-slate-700 font-bold">Connecting to Thoothukudi Public Portal</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin flex items-center justify-center">
                    <span className="font-mono text-lg font-black text-emerald-900">{countdown}</span>
                  </div>
                  <p className="text-[10px] text-slate-700 font-bold tracking-wide">Inaugurating Site in Real Time</p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLaunchClick}
              className="group relative cursor-pointer outline-none select-none active:scale-95 transition-all duration-300"
              id="main-launch-button"
            >
              {/* Outer gold metallic bevel frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 rounded-full p-[3px] shadow-lg group-hover:shadow-xl group-hover:scale-102 transition-all duration-300" />
              
              {/* Golden inner ring glow on hover */}
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-45 transition-opacity duration-300" />

              {/* Main Button Body with deep emerald green gradient matching TN Government styling */}
              <div className="relative bg-gradient-to-r from-[#14532D] via-[#166534] to-[#15803d] rounded-full px-6 py-3 flex items-center gap-4 justify-between min-w-[280px] md:min-w-[340px]">
                
                {/* Globe Icon in white */}
                <div className="p-2 bg-white/10 rounded-full border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Globe className="w-6 h-6 text-white animate-spin-slow" />
                </div>

                {/* Button Text */}
                <div className="text-left flex-1 pl-1">
                  <span className="block text-xl font-black text-white tracking-wider leading-none font-sans">
                    LAUNCH
                  </span>
                  <span className="block text-lg font-bold text-yellow-300 tracking-widest leading-none mt-1 font-sans">
                    CSR WEBSITE
                  </span>
                </div>

              </div>
            </button>
          )}
        </div>

        {/* DATE DISPLAY */}
        <div className="flex items-center gap-2.5 py-1.5 px-4">
          <Calendar className="w-5 h-5 text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
          <div className="h-4.5 w-[1px] bg-white/40" />
          <span className="font-mono text-sm md:text-base font-black tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            12th JULY 2026
          </span>
        </div>

        {/* BOTTOM SECTION: 4 KEY FIGURES IN A 3-COLUMN GRID */}
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 md:gap-x-8 md:gap-y-6 w-full mt-6 md:mt-8 pt-4 md:pt-6">
          
          {/* Column 1: MSME Minister */}
          <div 
            className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 p-1 transition-all duration-300 group"
          >
            {/* Custom vector icon representing MSME / Industry & Growth */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Gear representation */}
                <circle cx="18" cy="28" r="6" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="18" cy="28" r="2" fill="currentColor" />
                {/* Teeth of gear */}
                <path d="M 18 19 L 18 21 M 18 35 L 18 37 M 9 28 L 11 28 M 25 28 L 27 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Growing bar chart / industry building */}
                <path d="M 30 38 L 30 24 L 36 24 L 36 38" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.7" />
                <path d="M 38 38 L 38 18 L 44 18 L 44 38" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                {/* Base ground line */}
                <path d="M 10 38 L 44 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            
            <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-black tracking-wide text-white uppercase font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-left leading-tight whitespace-nowrap">
              MSME Minister
            </h3>
          </div>

          {/* Column 2: Fisheries Minister */}
          <div 
            className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 p-1 transition-all duration-300 group"
          >
            {/* Custom vector icon representing a leaping fish over sea waves */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Leaping Fish body */}
                <path d="M 36 12 C 30 14, 20 20, 16 28 C 19 28, 24 26, 28 24 Z" fill="currentColor" />
                <path d="M 36 12 C 24 12, 14 22, 14 34 C 18 32, 22 32, 28 34 C 28 24, 34 16, 36 12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                {/* Tail fin */}
                <path d="M 14 34 L 6 38 L 10 30 Z" fill="currentColor" />
                {/* Eye */}
                <circle cx="31" cy="17" r="1.5" fill="#FFF" />
                
                {/* Sea waves */}
                <path d="M 8 38 Q 16 35 24 38 T 40 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 12 42 Q 20 39 28 42 T 44 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            
            <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-black tracking-wide text-white uppercase font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-left leading-tight whitespace-nowrap">
              Fisheries Minister
            </h3>
          </div>

          {/* Column 3: District Collectorate */}
          <div 
            className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 p-1 transition-all duration-300 group"
          >
            {/* Custom vector icon representing a government collectorate building with flag */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dome / Sanchi Stupa style dome */}
                <path d="M 14 32 C 14 20, 34 20, 34 32 Z" fill="currentColor" opacity="0.8" />
                {/* Pillar Pillars */}
                <rect x="12" y="32" width="24" height="8" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
                <rect x="15" y="34" width="2" height="6" fill="#FFF" />
                <rect x="20" y="34" width="2" height="6" fill="#FFF" />
                <rect x="26" y="34" width="2" height="6" fill="#FFF" />
                <rect x="31" y="34" width="2" height="6" fill="#FFF" />
                
                {/* Foundation base */}
                <rect x="8" y="40" width="32" height="3" rx="1" fill="currentColor" />
 
                {/* Dome central spindle and flag */}
                <line x1="24" y1="22" x2="24" y2="10" stroke="currentColor" strokeWidth="2" />
                <path d="M 24 10 L 32 14 L 24 18 Z" fill="#D4AF37" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            
            <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-black tracking-wide text-white uppercase font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-left leading-tight whitespace-nowrap">
              District Collectorate
            </h3>
          </div>

          {/* Row 2: Company Heads (Centered in 3-column layout using col-span-3) */}
          <div 
            className="col-span-3 flex flex-row items-center justify-center gap-1.5 sm:gap-2 p-1 transition-all duration-300 group"
          >
            {/* Custom vector icon representing three company heads */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-11 md:h-11" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Figure */}
                <path d="M 12 38 C 12 34, 15 32, 18 32 C 19 32, 20 32.5, 21 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="16" cy="24" r="4.5" fill="currentColor" />
                
                {/* Right Figure */}
                <path d="M 36 38 C 36 34, 33 32, 30 32 C 29 32, 28 32.5, 27 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="32" cy="24" r="4.5" fill="currentColor" />
                
                {/* Center / Leader Figure (Large, highlighted with gold trim) */}
                <path d="M 24 38 L 24 28" stroke="currentColor" strokeWidth="2.5" />
                <path d="M 16 38 C 16 31, 20 29, 24 29 C 28 29, 32 31, 32 38 Z" fill="currentColor" />
                <circle cx="24" cy="18" r="5" fill="#D4AF37" stroke="currentColor" strokeWidth="1.5" />
                {/* Gold tie on center leader */}
                <polygon points="24,24 22,28 26,28" fill="#D4AF37" />
              </svg>
            </div>
            
            <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-black tracking-wide text-white uppercase font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-left leading-tight whitespace-nowrap">
              Company Heads
            </h3>
          </div>

        </div>

      </div>

      {/* Credit footer */}
      <div className="text-center py-2 relative z-30">
        <p className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-widest font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Thoothukudi District Corporate Social Responsibility Board
        </p>
      </div>

    </div>
  );
};
