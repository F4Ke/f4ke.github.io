import { useEffect, useRef } from "react";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Améliore les performances sans accélération matérielle
    });
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    setCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles - 55 particules avec optimisations FPS
    for (let i = 0; i < 55; i++) {
      const direction = Math.random();
      let vx, vy;

      // 50% des particules vont horizontalement, 50% verticalement
      if (direction < 0.5) {
        // Mouvement horizontal
        vx = (Math.random() - 0.5) * 0.6;
        vy = (Math.random() - 0.5) * 0.1; // Très peu de mouvement vertical
      } else {
        // Mouvement vertical - vitesse augmentée
        vx = (Math.random() - 0.5) * 0.1; // Très peu de mouvement horizontal
        vy = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.3 + 0.3); // Vitesse verticale plus visible: 0.3-0.6
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        size: Math.random() * 2.2 + 0.4, // Range: 0.40-2.60 px
        opacity: Math.random() * 0.5 + 0.6, // 0.6-1.1 (capped à 1)
      });
    }

    let animationId: number;
    let lastFrameTime = 0;
    const targetFPS = 30; // Limite à 30 FPS pour économiser les ressources
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime;

      // Throttle animation to target FPS
      if (deltaTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles - Optimisé avec distance réduite
      const maxDistanceSquared = 100 * 100; // Réduit de 120 à 100 pour moins de calculs

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 100) * 0.4;
            ctx.strokeStyle = `rgba(102, 126, 234, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-background" />;
};

export default ParticlesBackground;
