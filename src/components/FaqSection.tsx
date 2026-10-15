import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  FileQuestion,
  Search,
  Lock,
  RefreshCw,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onOpenSpecialist?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSpecialist }) => {
  const { t } = useLanguage();

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'por-que-comprar-trustpilot': true,
    'es-seguro-comprar': false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(t.faq.categoryAll);

  const faqItems = t.faq.items;

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    faqItems.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const categories = [t.faq.categoryAll, ...Array.from(new Set(faqItems.map((i) => i.category)))];

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory =
      selectedCategory === t.faq.categoryAll ||
      item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortSnippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.keyPoints && item.keyPoints.some((kp) => kp.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#050607] via-[#090c10] to-[#040507] text-white overflow-hidden border-t border-white/10"
    >
      {/* Luces y texturas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#00b67a]/15 via-[#bcff48]/5 to-transparent blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#00b67a]/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#bcff48]/5 blur-[130px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO CENTRADO */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/30 text-[#00b67a] text-[10px] sm:text-xs font-semibold tracking-wide uppercase shadow-sm mb-4 sm:mb-5 backdrop-blur-md max-w-full">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b67a] animate-pulse shrink-0" />
              <span className="truncate">{t.faq.badge}</span>
            </div>

            {/* Título principal */}
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              {t.faq.title}
            </h2>

            {/* Subtítulo de sección */}
            <div className="inline-block relative">
              <h3 className="section-title text-lg sm:text-2xl md:text-3xl font-bold text-[#bcff48] pb-2">
                {t.faq.subtitle}
              </h3>
              <div className="h-1 w-20 sm:w-36 mx-auto bg-gradient-to-r from-[#00b67a] to-[#bcff48] rounded-full mb-4" />
            </div>

            {/* Párrafo contextual */}
            <p className="section-copy text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.faq.context}
            </p>

            {/* Buscador y control expandir/colapsar */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-2 sm:p-2.5 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-xl">
              <div className="relative w-full sm:w-72 md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t.faq.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 min-h-[44px] bg-slate-800/70 border border-slate-700/60 rounded-xl text-base sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-xs text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-3 py-2 min-h-[40px] text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700 flex items-center justify-center active:scale-95"
                >
                  {t.faq.expandAll}
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-3 py-2 min-h-[40px] text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700 flex items-center justify-center active:scale-95"
                >
                  {t.faq.collapseAll}
                </button>
              </div>
            </div>

            {/* Píldoras de Categorías con scroll horizontal móvil suave */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 touch-pan-x sm:flex-wrap sm:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-semibold rounded-full transition-all border shrink-0 flex items-center justify-center active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* LISTA DE PREGUNTAS Y RESPUESTAS */}
        <ScrollReveal direction="up" distance={30} delay={80}>
          <div className="space-y-3.5 sm:space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                <FileQuestion className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-300 font-medium">{t.faq.noResults}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(t.faq.categoryAll);
                  }}
                  className="mt-3 text-xs text-emerald-400 hover:underline min-h-[40px] px-3 py-1 inline-flex items-center"
                >
                  {t.faq.resetFilters}
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = !!openItems[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-gradient-to-b from-slate-900/90 to-slate-900/60 border-emerald-500/40 shadow-[0_8px_30px_rgba(16,185,129,0.08)]'
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
                    }`}
                  >
                    {/* ENCABEZADO DE LA PREGUNTA */}
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                        {/* Número de pregunta */}
                        <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-800/90 text-emerald-400 text-xs sm:text-sm font-bold border border-slate-700/80 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold border ${faq.badgeColor}`}
                            >
                              {faq.category}
                            </span>
                            {faq.highlight && (
                              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                {faq.highlight}
                              </span>
                            )}
                          </div>
                          <h4 className="section-title text-sm sm:text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                            {faq.question}
                          </h4>
                          {!isOpen && (
                            <p className="mt-1 text-xs text-slate-400 line-clamp-1 section-copy">
                              {faq.shortSnippet}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Botón Chevron interactivo */}
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'rotate-0 bg-slate-800 text-slate-400 border-slate-700 group-hover:text-white group-hover:border-slate-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* CONTENIDO DESPLEGABLE */}
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-6 sm:pb-7 pt-1 border-t border-slate-800/60 animate-hero-entrance">
                        {/* Párrafos principales */}
                        <div className="space-y-3 text-slate-300 text-xs sm:text-base leading-relaxed section-copy">
                          {faq.answer.map((para, pIdx) => (
                            <p key={pIdx} className="text-slate-300">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Puntos clave / Highlights */}
                        {faq.keyPoints && faq.keyPoints.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-800/60">
                            <p className="section-copy text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{t.faq.keyPointsTitle}</span>
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                              {faq.keyPoints.map((point, kpIdx) => (
                                <div
                                  key={kpIdx}
                                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs sm:text-sm text-slate-200"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </ScrollReveal>

        {/* BANNER INFERIOR DE ACCIÓN Y CONTACTO */}
        <ScrollReveal direction="up" distance={20} delay={150}>
          <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/50 border border-emerald-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="section-title text-base sm:text-xl font-bold text-white mb-1">
                    {t.faq.banner.title}
                  </h4>
                  <p className="section-copy text-slate-300 text-xs sm:text-sm max-w-xl">
                    {t.faq.banner.desc}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenSpecialist}
                  className="section-copy w-full md:w-auto min-h-[46px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{t.faq.banner.btn}</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Insignias de Confianza */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.faq.trustBadges.b1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{t.faq.trustBadges.b2}</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{t.faq.trustBadges.b3}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
