import React, { useEffect, useRef } from 'react';

interface ThreeDBackgroundProps {
  accentColor?: string;
  isDark?: boolean;
}

export const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ 
  accentColor = '#00F076',
  isDark = true 
}) => {
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

    // Mouse position for subtle 3D camera drift
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle ambient dust/particles from the tech palette
    const PARTICLE_COUNT = 55;
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
    }

    const particles: Particle3D[] = [];
    const colors = isDark 
      ? [accentColor, '#00F076', '#00E5FF', '#8B5CF6', '#3B82F6', '#10B981']
      : [accentColor, '#0F4C81', '#059669', '#4F46E5', '#2563EB', '#D97706'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedZ: Math.random() * 0.4 + 0.15,
      });
    }

    const fov = 420;

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const projectedCoords: { x: number; y: number; z: number }[] = [];

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

        projectedCoords.push({ x: projX, y: projY, z: p.z });

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const alpha = (1 - p.z / 1000) * (isDark ? 0.45 : 0.25);
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      }

      // Draw faint geometric constellation lines between nearby 3D points
      for (let i = 0; i < projectedCoords.length; i++) {
        for (let j = i + 1; j < projectedCoords.length; j++) {
          const dx = projectedCoords[i].x - projectedCoords[j].x;
          const dy = projectedCoords[i].y - projectedCoords[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * (isDark ? 0.08 : 0.05) * (1 - projectedCoords[i].z / 1000);
            ctx.beginPath();
            ctx.moveTo(projectedCoords[i].x, projectedCoords[i].y);
            ctx.lineTo(projectedCoords[j].x, projectedCoords[j].y);
            ctx.strokeStyle = isDark ? '#00F076' : '#0F4C81';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
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
  }, [accentColor, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.65 : 0.4 }}
    />
  );
};
