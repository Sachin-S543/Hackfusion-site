import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#2D7FF9' : '#00E5FF'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#071322] select-none pointer-events-none">
      {/* 1. Subtle Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>

      {/* 2. Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>

      {/* 3. Large Blue Radial Glow (Top Left) */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(45,127,249,0.15)_0%,rgba(45,127,249,0)_70%)] will-change-transform"
      />

      {/* 4. Large Purple Radial Glow (Middle Right) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] -right-[10%] w-[50%] h-[65%] bg-[radial-gradient(circle,rgba(124,92,255,0.12)_0%,rgba(124,92,255,0)_70%)] will-change-transform"
      />

      {/* 5. Teal Glow (Bottom Left) */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[15%] left-[5%] w-[45%] h-[50%] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,rgba(0,229,255,0)_70%)] will-change-transform"
      />

      {/* 6. Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
