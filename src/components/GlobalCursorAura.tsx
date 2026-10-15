import React, { useEffect, useRef } from 'react';

interface StardustSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  isStar?: boolean;
}

export const GlobalCursorAura: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Solo activar en dispositivos con puntero fino (ratón / trackpad)
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      active: false,
    };

    const sparks: StardustSpark[] = [];
    const sparkPalette = [
      '#bcff48', // Verde Lima Neón Trust
      '#00b67a', // Verde Esmeralda Trustpilot
      '#38bdf8', // Azul Cian Cibernético
      '#ffd166', // Oro Estelar 5★
      '#ffffff', // Blanco Puro Radiante
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.active = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      if (mouse.prevX === -1000) {
        mouse.prevX = e.clientX;
        mouse.prevY = e.clientY;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      const dx = e.clientX - mouse.prevX;
      const dy = e.clientY - mouse.prevY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      // Emitir ráfagas de estelas de luz según la velocidad del ratón
      const spawnCount = Math.min(Math.floor(mouse.speed * 0.45) + 1, 6);

      for (let i = 0; i < spawnCount; i++) {
        if (sparks.length > 120) sparks.shift(); // Evitar sobrecarga de memoria

        const color = sparkPalette[Math.floor(Math.random() * sparkPalette.length)];
        const spread = (Math.random() - 0.5) * 16;
        const speedMult = Math.random() * 1.5 + 0.5;

        sparks.push({
          x: e.clientX + spread,
          y: e.clientY + spread,
          vx: -(dx * 0.12) + (Math.random() - 0.5) * 1.8 * speedMult,
          vy: -(dy * 0.12) + (Math.random() - 0.5) * 1.8 * speedMult,
          size: Math.random() * 3 + 1.2,
          alpha: Math.random() * 0.4 + 0.6,
          color,
          decay: Math.random() * 0.025 + 0.02,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          isStar: Math.random() > 0.65,
        });
      }

      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Dibujar pequeñas estrellas de luz de 4 puntas en la estela
    const drawSparkleStar = (cx: number, cy: number, size: number, rot: number, color: string, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(0, -size * 2);
      ctx.quadraticCurveTo(0, 0, size * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, size * 2);
      ctx.quadraticCurveTo(0, 0, -size * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, -size * 2);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Suavizar posición del halo principal
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      // 1. DIBUJAR HALO RADIANTE MULTI-CAPA QUE SIGUE AL CURSOR
      if (mouse.x > -50 && mouse.y > -50 && mouse.x < width + 50 && mouse.y < height + 50) {
        // Haz de luz exterior envolvente
        const outerGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
        outerGlow.addColorStop(0, 'rgba(188, 255, 72, 0.13)');
        outerGlow.addColorStop(0.35, 'rgba(0, 182, 122, 0.06)');
        outerGlow.addColorStop(0.7, 'rgba(56, 189, 248, 0.02)');
        outerGlow.addColorStop(1, 'transparent');

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante centrado de alta energía
        const innerGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 65);
        innerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        innerGlow.addColorStop(0.35, 'rgba(188, 255, 72, 0.28)');
        innerGlow.addColorStop(1, 'transparent');

        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 65, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. DIBUJAR Y ACTUALIZAR ESTELA DE CHISPAS Y PARTÍCULAS
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];

        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94; // Fricción suave
        s.vy *= 0.94;
        s.alpha -= s.decay;
        s.rotation += s.rotationSpeed;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        if (s.isStar) {
          drawSparkleStar(s.x, s.y, s.size, s.rotation, s.color, s.alpha);
        } else {
          // Micro-partícula con halo
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.alpha;
          ctx.shadowBlur = 8;
          ctx.shadowColor = s.color;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1.0;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-35 pointer-events-none select-none overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
};
