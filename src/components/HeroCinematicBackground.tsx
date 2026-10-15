import React, { useEffect, useRef, useState } from 'react';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroCinematicBackgroundProps {
  scrollProgress: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  pulsePhase: number;
  isStarNode?: boolean;
}

export const HeroCinematicBackground: React.FC<HeroCinematicBackgroundProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Cantidad de partículas adaptativa según tamaño de pantalla
    const isMobile = width < 768;
    const particleCount = isMobile ? 26 : 58;

    // Paleta de reputación y confianza de alto nivel
    const colors = [
      { fill: '#bcff48', glow: 'rgba(188, 255, 72, 0.4)' }, // Neon Lime
      { fill: '#00b67a', glow: 'rgba(0, 182, 122, 0.4)' },  // Trustpilot Emerald
      { fill: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)' }, // Cyber Blue
      { fill: '#ffffff', glow: 'rgba(255, 255, 255, 0.3)' },  // Pure White
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const palette = colors[i % colors.length];
      const isStarNode = i % 6 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // 3D depth layer
        vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.45),
        vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.45),
        radius: isStarNode ? Math.random() * 1.5 + 2.5 : Math.random() * 1.6 + 1.2,
        color: palette.fill,
        glowColor: palette.glow,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        isStarNode,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Dibujar estrella estilizada de 5 puntas en nodos destacados
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    // Bucle de animación a 60fps con cálculo de constelación de trust nodes
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Suavizar seguimiento del cursor (lerp)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;

      // Resplandor sutil del cursor cuando está dentro del viewport
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const mouseGradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          180
        );
        mouseGradient.addColorStop(0, 'rgba(188, 255, 72, 0.09)');
        mouseGradient.addColorStop(0.5, 'rgba(0, 182, 122, 0.03)');
        mouseGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Dibujar líneas de interconexión de reputación (red de confianza)
      const maxConnectDist = isMobile ? 85 : 125;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.22 * particles[i].z;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(188, 255, 72, ${alpha})`;
            ctx.lineWidth = 0.75 * particles[i].z;
            ctx.stroke();
          }
        }
      }

      // Actualizar y renderizar cada partícula
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * p.z;
          p.y += p.vy * p.z;
          p.pulsePhase += p.pulseSpeed;

          // Rebotar o re-entrar en bordes de forma fluida
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          // Física magnética con el ratón: deflexión orgánica
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxRepelDist = 150;

          if (mdist < maxRepelDist && mdist > 0) {
            const force = (1 - mdist / maxRepelDist) * 3;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }
        }

        const pulse = Math.sin(p.pulsePhase) * 0.35 + 0.65;
        const currentRadius = p.radius * pulse;

        // Halo de resplandor
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.globalAlpha = 0.25 * pulse * p.z;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Núcleo del nodo
        ctx.fillStyle = p.color;
        if (p.isStarNode) {
          drawStar(p.x, p.y, 5, currentRadius * 1.6, currentRadius * 0.7);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

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
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#060709]"
      aria-hidden="true"
    >
      {/* 1. AURORA AMBIENTAL MULTI-CAPA (RESPLANDORES PROFUNDOS CON RESPIRACIÓN SUAVE) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Nebulosa principal Verde Lima/Esmeralda (Superior Derecha) */}
        <div
          className="absolute -top-32 -right-32 w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full blur-[120px] md:blur-[160px] opacity-25 md:opacity-30 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(188,255,72,0.35) 0%, rgba(0,182,122,0.2) 40%, transparent 75%)',
            transform: `translate3d(0, ${scrollProgress * 40}px, 0)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        />

        {/* Nebulosa secundaria Cian/Teal Profundo (Centro Izquierda) */}
        <div
          className="absolute top-1/4 -left-36 w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full blur-[110px] md:blur-[140px] opacity-20 md:opacity-25 animate-subtle-float"
          style={{
            background: 'radial-gradient(circle, rgba(0,182,122,0.3) 0%, rgba(56,189,248,0.15) 45%, transparent 75%)',
            transform: `translate3d(0, ${scrollProgress * -30}px, 0)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        />

        {/* Resplandor cálido sutil de contraste (Inferior Centro) */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[130px] opacity-15"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,90,66,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Matriz de micro-puntos de precisión digital */}
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />
      </div>

      {/* 2. PERSPECTIVA DE HORIZONTE CIBERNÉTICO (LINEAS DE GRID Y RADAR DE FONDO) */}
      <div
        className="absolute bottom-0 inset-x-0 h-72 md:h-96 pointer-events-none opacity-20 md:opacity-30"
        style={{
          maskImage: 'linear-gradient(to top, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 100%)',
        }}
      >
        {/* Línea de horizonte luminoso */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#bcff48]/60 to-transparent" />

        {/* Retícula de perspectiva hacia el horizonte */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(188,255,72,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: 'perspective(450px) rotateX(65deg) translateY(-25%)',
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* 3. LIENZO INTERACTIVO DE CONSTELACIÓN DE NODOS DE CONFIANZA */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{
          opacity: Math.max(1 - scrollProgress * 1.1, 0.15),
          transition: 'opacity 0.5s ease-out',
        }}
      />

      {/* 4. CAPSULAS FLOTANTES DE AUTORIDAD Y PRUEBA SOCIAL EN TIEMPO REAL */}
      <div
        className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden md:block"
        style={{
          opacity: Math.max(1 - scrollProgress * 1.5, 0),
          transform: `translate3d(0, ${scrollProgress * -40}px, 0)`,
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        {/* Cápsula 1: Superior Derecha (Trustpilot 4.9★) */}
        <div className="absolute top-28 right-8 lg:right-16 animate-subtle-float">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#00b67a]/50 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00b67a] shadow-[0_0_8px_#00b67a] animate-pulse" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-white tracking-wide">
              <Star className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a] shrink-0" />
              <span>TrustScore 4.9</span>
              <span className="text-white/40">·</span>
              <span className="text-white/75 font-normal">Excelente</span>
            </div>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#00b67a]/20 text-[#00b67a] font-bold border border-[#00b67a]/30">
              Verificado
            </span>
          </div>
        </div>

        {/* Cápsula 2: Mitad Derecha (Escudo de Blindaje de Reputación) */}
        <div className="absolute top-64 right-12 lg:right-28 animate-subtle-float-delayed">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-[#bcff48]/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
            <span className="text-xs font-semibold text-white/90">
              Shield Protocol <strong className="text-[#bcff48] font-bold">100% Blindado</strong>
            </span>
            <Sparkles className="w-3 h-3 text-[#bcff48]" />
          </div>
        </div>

        {/* Cápsula 3: Lateral Izquierda Superior (Google Business 5★) */}
        <div className="absolute top-44 left-8 lg:left-14 animate-subtle-float-slow">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <span className="w-5 h-5 rounded-md bg-[#ff5a42] text-white font-black text-[11px] flex items-center justify-center shadow-sm">
              G
            </span>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Google Local Pack</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                <span className="font-bold mr-0.5">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. VIÑETA RADIAL PROFUNDA PARA GARANTIZAR CONTRASTE DE TIPOGRAFÍA */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 85% at 50% 50%, transparent 20%, rgba(6,7,9,0.7) 70%, #060709 100%)',
          opacity: 0.85 + scrollProgress * 0.15,
        }}
      />
    </div>
  );
};
