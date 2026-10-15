import React from 'react';
import { Star, ShieldCheck, CheckCircle2, RotateCcw, Quote, ArrowRight, Award, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface GuaranteeSectionProps {
  onOpenSpecialist?: () => void;
}

// Logo 1: Viller Valla (Villervalla - Swedish organic kids clothing brand)
const VillerVallaLogo: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#006aa7] to-[#fecc00]/80 p-0.5 shadow-md flex items-center justify-center">
      <div className="w-full h-full bg-[#0a111a] rounded-[10px] flex items-center justify-center">
        {/* Scandinavian geometric stars symbol */}
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="13" stroke="#006aa7" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M16 6L18.5 12.5L25 13L20 17.5L21.5 24L16 20.5L10.5 24L12 17.5L7 13L13.5 12.5L16 6Z" fill="#fecc00" />
          <circle cx="16" cy="16" r="3" fill="#ffffff" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-base font-extrabold tracking-wider text-white uppercase font-sans">
        VILLER <span className="text-[#fecc00]">VALLA</span>
      </span>
      <span className="text-[10px] tracking-widest text-[#f7f7f2]/50 uppercase font-mono">
        SWEDISH APPAREL & FRANCHISE
      </span>
    </div>
  </div>
);

// Logo 2: Peaches (Peaches Skincare & Ecommerce brand)
const PeachesLogo: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7b72] via-[#ff9b82] to-[#ffa07a] p-0.5 shadow-md flex items-center justify-center">
      <div className="w-full h-full bg-[#180e12] rounded-[10px] flex items-center justify-center">
        {/* Modern minimal peach emblem */}
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Peach leaf */}
          <path d="M16 6C17 9 20 10 23 9C22 12 19 13 16 11" stroke="#bcff48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Peach silhouette */}
          <path d="M16 11C13.5 8.5 8 9 7 15C6 21 11.5 26 16 27C20.5 26 26 21 25 15C24 9 18.5 8.5 16 11Z" fill="url(#peachGradient)" />
          {/* Center heart cleft */}
          <path d="M16 12C15.5 15 15.5 18 16 21" stroke="#ff4d6d" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <defs>
            <linearGradient id="peachGradient" x1="7" y1="9" x2="25" y2="27" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff9a8b" />
              <stop offset="1" stopColor="#ff6a88" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-base font-extrabold tracking-widest text-white uppercase font-sans">
        PEACHES<span className="text-[#ff7b72]">.</span>
      </span>
      <span className="text-[10px] tracking-widest text-[#f7f7f2]/50 uppercase font-mono">
        E-COMMERCE & BEAUTY
      </span>
    </div>
  </div>
);

// Logo 3: Honest Paws (Famous premium pet wellness / Pet Niche brand)
const HonestPawsLogo: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] p-0.5 shadow-md flex items-center justify-center">
      <div className="w-full h-full bg-[#0a1510] rounded-[10px] flex items-center justify-center">
        {/* Honest Paws Iconic Pet Paw with health leaf */}
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Paw pads */}
          <ellipse cx="10" cy="11" rx="2.2" ry="3" fill="#34d399" />
          <ellipse cx="16" cy="8.5" rx="2.2" ry="3.2" fill="#34d399" />
          <ellipse cx="22" cy="11" rx="2.2" ry="3" fill="#34d399" />
          <ellipse cx="7" cy="16.5" rx="1.8" ry="2.5" fill="#34d399" />
          {/* Main paw heel with leaf accent */}
          <path d="M11 17C11 15 13 14 16 14C19 14 21 15 21 17C21 21 23 23 21 26C19 28 17 27 16 27C15 27 13 28 11 26C9 23 11 21 11 17Z" fill="#10b981" />
          <circle cx="16" cy="20" r="1.5" fill="#ffffff" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-base font-extrabold tracking-wider text-white uppercase font-sans">
        HONEST <span className="text-[#34d399]">PAWS</span>
      </span>
      <span className="text-[10px] tracking-widest text-[#f7f7f2]/50 uppercase font-mono">
        PREMIUM PET WELLNESS · USA
      </span>
    </div>
  </div>
);

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenSpecialist }) => {
  return (
    <section id="garantia" className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-[#08090b] to-[#050607] border-t border-white/10 overflow-hidden">
      {/* Resplandor y halo central de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#bcff48]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid patrón tecnológico sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE SUPERIOR: CABECERA TOTALMENTE CENTRADA */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Badge de garantía */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(188,255,72,0.15)]">
              <RotateCcw className="w-4 h-4 text-[#bcff48]" />
              <span className="section-copy text-xs font-bold uppercase tracking-widest text-[#bcff48]">
                100% GARANTÍA DE SATISFACCIÓN O REEMBOLSO
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#bcff48]" />
            </div>

            {/* Título principal solicitado */}
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              La garantía de confianza
            </h2>

            {/* Párrafo central solicitado */}
            <div className="space-y-3">
              <p className="section-title text-lg sm:text-xl md:text-2xl font-bold text-[#bcff48] leading-snug">
                Ofrecemos una garantía de devolución del dinero del 100% en Reseñas de TrustUp
              </p>
              <p className="section-copy text-sm sm:text-base md:text-lg text-[#f7f7f2]/80 leading-relaxed max-w-2xl mx-auto">
                En casos excepcionales en los que no vea los resultados esperados, le ofreceremos un reembolso de su dinero. No preguntas formuladas.
              </p>
            </div>

            {/* Sellos de respaldo y confianza */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#f7f7f2]/70 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
                <span>Garantía Contractual</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#bcff48]" />
                <span>Cero Preguntas Formuladas</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                <Award className="w-4 h-4 text-[#bcff48]" />
                <span>Protección 100% Sin Riesgo</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* PARTE INFERIOR: 3 CUADROS CON TESTIMONIOS, LOGOS Y RESULTADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* ========================================================
              CUADRO 1: Viller Valla
             ======================================================== */}
          <ScrollReveal direction="up" distance={30} delay={0}>
            <div className="relative group rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#bcff48]/40 p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              {/* Resplandor decorativo interno en hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fecc00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#bcff48]/10 transition-all" />

              <div>
                {/* Cabecera del cuadro: Logo de la marca */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                  <VillerVallaLogo />
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#f7f7f2]/60 uppercase tracking-wider">
                    Verificado
                  </span>
                </div>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fecc00] text-[#fecc00]" />
                    ))}
                  </div>
                  <span className="section-copy text-xs font-bold text-[#fecc00] tracking-wide">
                    5 star rating
                  </span>
                </div>

                {/* Título entrecomillado del cliente */}
                <h3 className="section-title text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-1">
                  <Quote className="w-4 h-4 text-[#bcff48] shrink-0 rotate-180 mt-1" />
                  <span>"Excelente servicio. ¡Lo usaré de nuevo!"</span>
                </h3>

                {/* Texto exacto del testimonio */}
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                  Al principio nos enfrentamos a críticas ilegítimas, buscamos TrustUpReviews' ayuda, lo que resultó en la eliminación de más de 1000+ reseñas y la adición de más de 150 reseñas mensualmente. Esto permitió que nuestros propietarios de franquicias deben centrarse en los aspectos principales y al mismo tiempo ahorrarnos aproximadamente 28.000 minutos en conjunto.
                </p>
              </div>

              {/* Pie del cuadro: Métricas clave y Autor */}
              <div className="mt-6 pt-5 border-t border-white/10">
                {/* Chips de métricas clave */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#bcff48] font-mono">-1,000+</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Eliminadas</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-white font-mono">+150/mes</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Nuevas</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#fecc00] font-mono">28,000 m</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Ahorrados</span>
                  </div>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#006aa7] to-[#fecc00] flex items-center justify-center font-bold text-xs text-white shadow">
                    HH
                  </div>
                  <div>
                    <div className="section-title text-xs sm:text-sm font-bold text-white">
                      Hanna Håkansson
                    </div>
                    <div className="section-copy text-[11px] text-[#bcff48]">
                      Directora ejecutiva, Viller Valla
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================
              CUADRO 2: Peaches
             ======================================================== */}
          <ScrollReveal direction="up" distance={30} delay={120}>
            <div className="relative group rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#bcff48]/40 p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              {/* Resplandor decorativo interno en hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7b72]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#bcff48]/10 transition-all" />

              <div>
                {/* Cabecera del cuadro: Logo de la marca */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                  <PeachesLogo />
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#f7f7f2]/60 uppercase tracking-wider">
                    Verificado
                  </span>
                </div>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fecc00] text-[#fecc00]" />
                    ))}
                  </div>
                  <span className="section-copy text-xs font-bold text-[#fecc00] tracking-wide">
                    5 star rating
                  </span>
                </div>

                {/* Título entrecomillado del cliente */}
                <h3 className="section-title text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-1">
                  <Quote className="w-4 h-4 text-[#bcff48] shrink-0 rotate-180 mt-1" />
                  <span>"Una verdadera extensión de nuestro equipo..."</span>
                </h3>

                {/* Texto exacto del testimonio */}
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                  "TrustUpReviews publicó más de 391 nuevas reseñas positivas y elevó nuestra calificación de marca a 4,8 al tiempo que aumentó nuestra tasa de conversión en un 15%. Sus resultados hablan por sí solos, pero son una verdadera extensión de nuestro equipo”
                </p>
              </div>

              {/* Pie del cuadro: Métricas clave y Autor */}
              <div className="mt-6 pt-5 border-t border-white/10">
                {/* Chips de métricas clave */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#bcff48] font-mono">+391</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Reseñas</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-white font-mono">4.8 ⭐</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Calificación</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#ff7b72] font-mono">+15%</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Conversión</span>
                  </div>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff7b72] to-[#ffa07a] flex items-center justify-center font-bold text-xs text-white shadow">
                    LE
                  </div>
                  <div>
                    <div className="section-title text-xs sm:text-sm font-bold text-white">
                      Lindsay Eccleston
                    </div>
                    <div className="section-copy text-[11px] text-[#bcff48]">
                      Directora de Comercio Electrónico, Peaches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================
              CUADRO 3: Honest Paws
             ======================================================== */}
          <ScrollReveal direction="up" distance={30} delay={240}>
            <div className="relative group rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#bcff48]/40 p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              {/* Resplandor decorativo interno en hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#bcff48]/10 transition-all" />

              <div>
                {/* Cabecera del cuadro: Logo de la marca */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                  <HonestPawsLogo />
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#f7f7f2]/60 uppercase tracking-wider">
                    Verificado
                  </span>
                </div>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fecc00] text-[#fecc00]" />
                    ))}
                  </div>
                  <span className="section-copy text-xs font-bold text-[#fecc00] tracking-wide">
                    5 star rating
                  </span>
                </div>

                {/* Título entrecomillado del cliente */}
                <h3 className="section-title text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-1">
                  <Quote className="w-4 h-4 text-[#bcff48] shrink-0 rotate-180 mt-1" />
                  <span>"Lo recomendaría a cualquier otro comercio electrónico ¡propietarios!"</span>
                </h3>

                {/* Texto exacto del testimonio */}
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                  Nuestro equipo está muy contento de tener 600+ reseñas publicadas en nuestro sitios, lo cual es fantástico. Tenemos una de las calificaciones de tp más altas en Pet Niche en EE. UU. Le debemos eso para TrustUpReviews. Están muy atentos a nuestras necesidades y respaldaron el crecimiento de la satisfacción con nuestras revisiones 2022-&gt; 2025. Simplemente los amamos. A menudo, las personas son proveedores; no queremos proveedores; queremos socios. TrustUpReviews es un socio número uno.
                </p>
              </div>

              {/* Pie del cuadro: Métricas clave y Autor */}
              <div className="mt-6 pt-5 border-t border-white/10">
                {/* Chips de métricas clave */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#bcff48] font-mono">600+</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Publicadas</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-white font-mono">Top #1</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">Pet Niche US</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="block text-xs font-bold text-[#34d399] font-mono">Partner</span>
                    <span className="text-[9px] text-[#f7f7f2]/60 leading-tight block">2022-2025</span>
                  </div>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center font-bold text-xs text-white shadow">
                    MS
                  </div>
                  <div>
                    <div className="section-title text-xs sm:text-sm font-bold text-white">
                      Marko Skulic
                    </div>
                    <div className="section-copy text-[11px] text-[#bcff48]">
                      Director de adquisiciones remuneradas, Honest Paws
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Banner inferior de confianza y CTA */}
        <ScrollReveal direction="up" distance={20} delay={150}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-[#bcff48]/10 to-white/[0.04] border border-[#bcff48]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#bcff48] text-black flex items-center justify-center shrink-0 font-bold shadow-lg shadow-[#bcff48]/30">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="section-title text-base sm:text-lg font-bold text-white">
                  Garantía incondicional respaldada por contrato
                </h4>
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75">
                  Si no logramos la meta pactada para tu marca, te reembolsamos el 100% de tu dinero inmediatamente.
                </p>
              </div>
            </div>
            {onOpenSpecialist && (
              <button
                type="button"
                onClick={onOpenSpecialist}
                className="section-copy shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48]"
              >
                <span>Hablar con un especialista</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
