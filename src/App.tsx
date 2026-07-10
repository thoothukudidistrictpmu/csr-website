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
  // Confetti/Blast Canvas Ref
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isLaunched, setIsLaunched] = React.useState<boolean>(false);

  // Trigger grand celebration fireworks blast when site is launched
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

    // Particle class representing firework blasts and sparkling debris
    class BlastParticle {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      decay: number;
      shape: 'circle' | 'square' | 'star';
      gravity: number;
      friction: number;
      rotation: number;
      rotationSpeed: number;

      constructor(originX: number, originY: number) {
        this.x = originX;
        this.y = originY;
        this.size = Math.random() * 6 + 4;
        
        // Beautiful bright festival colors (TND gold, emerald, magenta, turquoise, etc.)
        const colors = [
          '#FFD700', // Gold
          '#FF5722', // Deep Orange
          '#E91E63', // Magenta / Pink
          '#4CAF50', // Emerald Green
          '#00BCD4', // Turquoise Blue
          '#9C27B0', // Royal Violet
          '#FFEB3B', // Neon Yellow
          '#FFFFFF'  // White Flash
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Generate velocity in a full 360-degree radial blast pattern
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 14 + 4; // High initial velocity
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 2; // Slight upward bias
        
        this.alpha = 1.0;
        this.decay = Math.random() * 0.015 + 0.01; // Fade out slowly
        this.gravity = 0.22; // Falling downward
        this.friction = 0.96; // Air resistance slow down
        
        const shapes: ('circle' | 'square' | 'star')[] = ['circle', 'square', 'star'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 12 - 6;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.rotation += this.rotationSpeed;
        this.alpha -= this.decay;
      }

      draw() {
        if (!ctx || this.alpha <= 0) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        
        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === 'square') {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === 'star') {
          // Draw a sparkling 5-pointed star
          let rot = Math.PI / 2 * 3;
          const spikes = 5;
          const outerRadius = this.size;
          const innerRadius = this.size / 2;
          const step = Math.PI / spikes;
          
          ctx.beginPath();
          ctx.moveTo(0, -outerRadius);
          for (let i = 0; i < spikes; i++) {
            let sx = Math.cos(rot) * outerRadius;
            let sy = Math.sin(rot) * outerRadius;
            ctx.lineTo(sx, sy);
            rot += step;

            sx = Math.cos(rot) * innerRadius;
            sy = Math.sin(rot) * innerRadius;
            ctx.lineTo(sx, sy);
            rot += step;
          }
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Create multiple grand bursts at different strategic positions
    const particles: BlastParticle[] = [];
    
    // 1. Center button burst
    const spawnBlast = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push(new BlastParticle(x, y));
      }
    };

    // Trigger initial central blast & left/right bottom corner blasts (like stage fountains)
    spawnBlast(width / 2, height / 2, 100);
    spawnBlast(width * 0.15, height * 0.8, 60);
    spawnBlast(width * 0.85, height * 0.8, 60);

    // Keep spawning smaller mini-blasts continuously for a lively festival atmosphere
    const miniBlastInterval = setInterval(() => {
      const rx = Math.random() * width;
      const ry = Math.random() * (height * 0.7);
      spawnBlast(rx, ry, 30);
    }, 450);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Filter out faded particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Redirect the same tab after a beautiful 3-second celebratory preview
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://thoothukudi-district-administration.vercel.app/";
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(miniBlastInterval);
      clearTimeout(redirectTimeout);
    };
  }, [isLaunched]);

  const handleLaunch = () => {
    setIsLaunched(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative" id="csr-app-root">
      
      {/* Floating Canvas for stunning fireworks blast launch celebration */}
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

