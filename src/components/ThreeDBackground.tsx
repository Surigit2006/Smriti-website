import React, { useEffect, useRef } from 'react';

interface ThreeDBackgroundProps {
  accentColor?: string;
}

export const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ accentColor = '#f59e0b' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position for 3D camera drift
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles in a sphere / field
    const PARTICLE_COUNT = 75;
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
    }

    const particles: Particle3D[] = [];
    const colors = [accentColor, '#ec4899', '#8b5cf6', '#38bdf8', '#facc15'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedZ: Math.random() * 0.8 + 0.2,
      });
    }

    const fov = 400;

    const render = () => {
      // Smooth camera drift
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render 3D particles with perspective projection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= p.speedZ;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const scale = fov / (fov + p.z);
        const projX = (p.x - mouseX) * scale + width / 2;
        const projY = (p.y - mouseY) * scale + height / 2;

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const alpha = (1 - p.z / 1000) * 0.6;
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.shadowBlur = 10 * scale;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

