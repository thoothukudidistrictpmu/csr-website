/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LaunchPoster } from './components/LaunchPoster';

export default function App() {
  // Confetti Canvas Ref
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isLaunched, setIsLaunched] = React.useState<boolean>(false);

  // Trigger grand celebration confetti when site is launched
  React.useEffect(() => {
    if (!isLaunched || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    class ConfettiParticle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = -20 - Math.random() * 100;
        this.size = Math.random() * 8 + 6;
        const colors = ['#F59E0B', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#D4AF37'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 5 + 4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    const particles: ConfettiParticle[] = Array.from({ length: 140 }, () => new ConfettiParticle());

    // Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Redirect or open window after a short celebration
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://thoothukudi-district-administration.vercel.app/";
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(redirectTimeout);
    };
  }, [isLaunched]);

  const handleLaunch = () => {
    setIsLaunched(true);
    // Open in a new tab immediately as well to bypass popups, and also do the redirect
    try {
      window.open("https://thoothukudi-district-administration.vercel.app/", "_blank");
    } catch (err) {
      console.error("Popup blocked:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative" id="csr-app-root">
      
      {/* Floating Canvas for launch confetti celebration */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />

      {/* Main routing rendering logic based on launch state */}
      <div className="flex-1 flex flex-col" id="view-layer">
        <LaunchPoster 
          onLaunch={handleLaunch}
          onOpenSponsors={() => {}}
          onOpenFisheries={() => {}}
          onOpenCollector={() => {}}
        />
      </div>

    </div>
  );
}

