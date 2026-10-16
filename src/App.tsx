import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Star,
  Check,
  ShieldCheck,
  ArrowRight,
  Zap,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Play,
  Pause,
  Clock,
  Trash2,
  ShieldAlert,
  UserX,
  FileWarning,
  CheckCircle2,
  Search,
  Award,
  Users,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { ReviewProcessIllustration } from './components/ReviewProcessIllustration';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { HeroCinematicBackground } from './components/HeroCinematicBackground';
import { GlobalCursorAura } from './components/GlobalCursorAura';
import { ScrollReveal } from './components/ScrollReveal';
import { TelegramButton } from './components/TelegramButton';
import { useLanguage } from './context/LanguageContext';
import { PlatformCatalogData } from './i18n/translations';

function PlatformSectionImage({
  platform,
  catalogData,
}: {
  platform: string;
  catalogData?: PlatformCatalogData;
}) {
  if (!catalogData) return null;

  const sample = catalogData.sampleReview;

  if (platform === 'Google Reviews') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#ff5a42]/30 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Google Reviews fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-[#ff5a42] shrink-0 shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#ff5a42]">
                  Google Maps & Business Profile
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                  {sample.subBadge}
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                {sample.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <span className="section-title text-2xl sm:text-3xl font-extrabold text-white">{sample.score}</span>
            <div className="flex text-amber-400 text-lg">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">{sample.count}</span>
          </div>
        </div>

        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold text-xs flex items-center justify-center shrink-0">
            D
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{sample.author}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-medium">
                {sample.badge}
              </span>
              <span className="text-[10px] text-white/40">{sample.time}</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              {sample.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (platform === 'Trustpilot') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#00b67a]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
            alt="Trustpilot fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#00b67a]/20 border border-[#00b67a]/40 flex items-center justify-center text-2xl font-bold text-[#00b67a] shrink-0 shadow-inner">
              ★
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#bcff48]">
                  Trustpilot Reviews
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00b67a]/25 text-[#00b67a] font-semibold border border-[#00b67a]/35">
                  {sample.subBadge}
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                {sample.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="w-6 h-6 rounded bg-[#00b67a] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  ★
                </span>
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">{sample.count}</span>
          </div>
        </div>

        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b67a] to-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            E
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{sample.author}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                {sample.badge}
              </span>
              <span className="text-[10px] text-white/40">{sample.time}</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              {sample.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (platform === 'TripAdvisor') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#34e0a1]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="TripAdvisor fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#34e0a1]/20 border border-[#34e0a1]/40 flex items-center justify-center text-2xl font-bold text-[#34e0a1] shrink-0 shadow-inner">
              ◎
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#bcff48]">
                  TripAdvisor Travellers' Choice
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#34e0a1]/25 text-[#34e0a1] font-semibold border border-[#34e0a1]/35">
                  {sample.subBadge}
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                {sample.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <span className="section-title text-2xl sm:text-3xl font-extrabold text-white">{sample.score}</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((circle) => (
                <span key={circle} className="w-4 h-4 rounded-full bg-[#00aa6c] border border-white/30 shadow-sm" />
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">{sample.count}</span>
          </div>
        </div>

        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00aa6c] to-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            M
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{sample.author}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 font-medium">
                {sample.badge}
              </span>
              <span className="text-[10px] text-white/40">{sample.time}</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              {sample.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Facebook
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#1877f2]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
          alt="Facebook fondo"
          className="w-full h-full object-cover object-center opacity-25 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1877f2]/20 border border-[#1877f2]/40 flex items-center justify-center text-2xl font-bold text-[#1877f2] shrink-0 shadow-inner">
            f
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#ff5a42]">
                Facebook Recommendations
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                {sample.subBadge}
              </span>
            </div>
            <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
              {sample.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
          <span className="px-2.5 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-xs font-bold text-blue-300">
            {sample.score}
          </span>
          <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">{sample.count}</span>
        </div>
      </div>

      <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1877f2] to-blue-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
          P
        </div>
        <div className="section-copy text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{sample.author}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-medium">
              {sample.badge}
            </span>
            <span className="text-[10px] text-white/40">{sample.time}</span>
          </div>
          <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
            {sample.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { language, setLanguage, t } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  // Estado para el catálogo interactivo de precios
  const [selectedCatalogPlatform, setSelectedCatalogPlatform] = useState<string | null>(null);
  const [selectedPlanSuccess, setSelectedPlanSuccess] = useState<{ planName: string; platform: string; price: string } | null>(null);

  // Estado para el modal de contacto con especialista
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);
  const [specialistSuccess, setSpecialistSuccess] = useState(false);
  const [specialistForm, setSpecialistForm] = useState({
    name: '',
    business: '',
    phone: '',
    platform: 'Google Reviews',
    notes: '',
  });

  // Animación interactiva de mensajes y calificaciones en el celular
  const [activePhoneMsgIdx, setActivePhoneMsgIdx] = useState(0);
  const [phoneCategory, setPhoneCategory] = useState<'trustpilot' | 'google' | 'tripadvisor' | 'facebook'>('trustpilot');
  const [isAutoPlayingPhone, setIsAutoPlayingPhone] = useState(true);

  const phoneNotifications = t.about.phone.notifications;

  const handleSelectPhoneCategory = (cat: 'trustpilot' | 'google' | 'tripadvisor' | 'facebook') => {
    setPhoneCategory(cat);
    const targetIdx = phoneNotifications.findIndex((item) => item.category === cat);
    if (targetIdx !== -1) {
      setActivePhoneMsgIdx(targetIdx);
    }
  };

  const getDynamicIslandData = () => {
    if (phoneCategory === 'trustpilot') {
      return {
        title: t.about.phone.island.trustpilotTitle,
        badge: t.about.phone.island.trustpilotBadge,
        badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1]',
        dotColor: 'bg-[#00b67a]',
        borderGlow: 'border-[#00b67a]/70 shadow-[0_0_20px_rgba(0,182,122,0.45)]',
        icon: (
          <span className="w-4 h-4 rounded bg-[#00b67a] text-white font-black text-[9px] flex items-center justify-center shrink-0 shadow-sm">
            ★
          </span>
        ),
      };
    }
    if (phoneCategory === 'google') {
      return {
        title: t.about.phone.island.googleTitle,
        badge: t.about.phone.island.googleBadge,
        badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42]',
        dotColor: 'bg-[#ff5a42]',
        borderGlow: 'border-[#ff5a42]/70 shadow-[0_0_20px_rgba(255,90,66,0.4)]',
        icon: (
          <span className="w-4 h-4 rounded-full bg-[#ff5a42] text-white font-black text-[9px] flex items-center justify-center shrink-0">
            G
          </span>
        ),
      };
    }
    if (phoneCategory === 'tripadvisor') {
      return {
        title: t.about.phone.island.tripadvisorTitle,
        badge: t.about.phone.island.tripadvisorBadge,
        badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1]',
        dotColor: 'bg-[#00aa6c]',
        borderGlow: 'border-[#00aa6c]/70 shadow-[0_0_20px_rgba(0,170,108,0.4)]',
        icon: (
          <span className="w-4 h-4 rounded-full bg-[#00aa6c] text-white font-black text-[9px] flex items-center justify-center shrink-0">
            🦉
          </span>
        ),
      };
    }
    return {
      title: t.about.phone.island.facebookTitle,
      badge: t.about.phone.island.facebookBadge,
      badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa]',
      dotColor: 'bg-[#1877F2]',
      borderGlow: 'border-[#1877F2]/70 shadow-[0_0_20px_rgba(24,119,242,0.4)]',
      icon: (
        <span className="w-4 h-4 rounded-full bg-[#1877F2] text-white font-black text-[9px] flex items-center justify-center shrink-0">
          f
        </span>
      ),
    };
  };

  const dynamicIsland = getDynamicIslandData();

  useEffect(() => {
    if (!isAutoPlayingPhone) return;
    const interval = setInterval(() => {
      const categories: ('trustpilot' | 'google' | 'tripadvisor' | 'facebook')[] = [
        'trustpilot',
        'google',
        'tripadvisor',
        'facebook',
      ];
      setPhoneCategory((prev) => {
        const nextCat = categories[(categories.indexOf(prev) + 1) % categories.length];
        const targetIdx = phoneNotifications.findIndex((item) => item.category === nextCat);
        if (targetIdx !== -1) setActivePhoneMsgIdx(targetIdx);
        return nextCat;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlayingPhone, phoneNotifications]);

  // Progreso de scroll para guía interactiva
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);

  // Estados de introducción cinematográfica
  const [introDark, setIntroDark] = useState(true);
  const [headerLettersVisible, setHeaderLettersVisible] = useState(false);
  const [titleLettersVisible, setTitleLettersVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);

  useEffect(() => {
    const tDark = setTimeout(() => {
      setIntroDark(false);
    }, 200);

    const tHeader = setTimeout(() => {
      setHeaderLettersVisible(true);
    }, 450);

    const tTitle = setTimeout(() => {
      setTitleLettersVisible(true);
    }, 850);

    const tArrow = setTimeout(() => {
      setArrowVisible(true);
    }, 1200);

    return () => {
      clearTimeout(tDark);
      clearTimeout(tHeader);
      clearTimeout(tTitle);
      clearTimeout(tArrow);
    };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = Math.max(docHeight - winHeight, 1);
      const progress = Math.min(Math.max(currentScrollY / totalScrollable, 0), 1);

      scrollProgressRef.current = progress;
      setScrollProgress(progress);

      const sections = ['inicio', 'portfolio', 'estrategia', 'nosotros', 'diferenciales', 'proceso', 'garantia', 'faq', 'contacto'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= winHeight * 0.4 && rect.bottom >= winHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animación de entrada para la sección portfolio al entrar en pantalla
  useEffect(() => {
    const portfolioElem = portfolioRef.current;
    if (!portfolioElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPortfolioVisible(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(portfolioElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevenir scroll cuando el menú móvil o el catálogo están abiertos
  useEffect(() => {
    if (mobileMenuOpen || selectedCatalogPlatform !== null || specialistModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedCatalogPlatform, specialistModalOpen]);

  // Manejo de tecla ESC para cerrar modales
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPlanSuccess) {
          setSelectedPlanSuccess(null);
        } else if (selectedCatalogPlatform) {
          setSelectedCatalogPlatform(null);
        } else if (specialistModalOpen) {
          setSpecialistModalOpen(false);
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCatalogPlatform, selectedPlanSuccess, specialistModalOpen, mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.services, href: '#portfolio' },
    { label: t.nav.strategy, href: '#estrategia' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.differentials, href: '#diferenciales' },
    { label: t.nav.process, href: '#proceso' },
    { label: t.nav.guarantee, href: '#garantia' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  const projects = t.services.projects;
  const activeCatalog = selectedCatalogPlatform ? t.catalogs[selectedCatalogPlatform] : null;

  return (
    <div className="relative w-full bg-black text-[#f7f7f2] min-h-screen selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* TELÓN CINEMATOGRÁFICO DE ENTRADA */}
      <div
        className={`fixed inset-0 z-40 bg-black pointer-events-none transition-opacity duration-1000 ease-out ${
          introDark ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* FONDO CINEMATOGRÁFICO INTERACTIVO */}
      <HeroCinematicBackground scrollProgress={scrollProgress} />

      {/* AURA DEL CURSOR EN ESCRITORIO */}
      <GlobalCursorAura />

      {/* HEADER / BARRA DE NAVEGACIÓN FIJA */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85)] px-4 sm:px-6 md:px-12 pt-[max(0.6rem,env(safe-area-inset-top))] ${
          headerLettersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        } py-2.5 sm:py-3`}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {/* BRAND / LOGO */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bcff48] to-[#00E599] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(188,255,72,0.3)] group-hover:shadow-[0_0_20px_rgba(188,255,72,0.5)] transition-shadow">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <Star className="w-4 h-4 fill-[#bcff48] text-[#bcff48]" />
                </div>
              </div>
              <span className="section-title text-xl md:text-2xl font-bold tracking-tight text-[#f7f7f2]">
                Lacoste
              </span>
            </a>

            {/* NAVEGACIÓN EN ESCRITORIO + SELECTOR DE IDIOMA */}
            <div className="flex items-center gap-3 lg:gap-6">
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-outfit text-[11px] xl:text-xs tracking-wider uppercase text-white/90 text-small-shadow">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === '#contacto') {
                          e.preventDefault();
                          setSpecialistModalOpen(true);
                        }
                      }}
                      className={`relative transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-lg px-2.5 py-1.5 ${
                        link.href === '#contacto'
                          ? 'bg-[#bcff48] text-black font-extrabold px-4 py-1.5 rounded-full hover:bg-[#a6ea34] shadow-[0_0_15px_rgba(188,255,72,0.35)] hover:text-black ml-1 active:scale-95'
                          : isActive
                          ? 'text-[#bcff48] font-bold bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && link.href !== '#contacto' && (
                        <span className="absolute -bottom-1 inset-x-2 h-[2px] bg-[#bcff48] shadow-[0_0_8px_#bcff48] rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* SELECTOR DE IDIOMA PREMIUM (ESCRITORIO) */}
              <div
                role="group"
                aria-label="Selector de idioma / Language Switcher"
                className="hidden sm:inline-flex items-center rounded-full bg-white/10 p-0.5 border border-white/15 text-[11px] font-bold shadow-inner"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 min-h-[30px] flex items-center justify-center ${
                    language === 'es'
                      ? 'bg-[#bcff48] text-black shadow-md font-extrabold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-pressed={language === 'es'}
                  aria-label="Cambiar a Español"
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 min-h-[30px] flex items-center justify-center ${
                    language === 'en'
                      ? 'bg-[#bcff48] text-black shadow-md font-extrabold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-pressed={language === 'en'}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* SELECTOR RÁPIDO MÓVIL EN LA CABECERA (MINIMAL) */}
              <button
                type="button"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="sm:hidden px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-mono font-bold text-[#bcff48] active:scale-95 flex items-center gap-1.5 min-h-[38px] transition-colors"
                aria-label="Alternar idioma / Toggle language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language.toUpperCase()}</span>
              </button>

              {/* BOTÓN HAMBURGUESA MÓVIL (TOGGLE) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-[#bcff48] focus-visible:outline-none rounded-xl border active:scale-95 ${
                  mobileMenuOpen
                    ? 'bg-[#bcff48]/20 border-[#bcff48]/50 text-[#bcff48] shadow-[0_0_15px_rgba(188,255,72,0.3)]'
                    : 'text-white hover:opacity-80 bg-white/10 hover:bg-white/15 border-white/15'
                }`}
                aria-label={mobileMenuOpen ? t.nav.ariaCloseMenu : t.nav.ariaOpenMenu}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#bcff48]" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* TIRA DE ACCESO RÁPIDO PARA MÓVILES */}
          <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1 touch-pan-x">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === '#contacto') {
                      e.preventDefault();
                      setSpecialistModalOpen(true);
                    }
                  }}
                  className={`shrink-0 px-3 py-1.5 min-h-[34px] flex items-center justify-center rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all whitespace-nowrap active:scale-95 ${
                    link.href === '#contacto'
                      ? 'bg-[#bcff48] text-black font-extrabold shadow-[0_0_10px_rgba(188,255,72,0.35)]'
                      : isActive
                      ? 'bg-white/15 text-[#bcff48] font-bold border border-[#bcff48]/40'
                      : 'bg-white/5 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* SECCIÓN HERO */}
      <main
        ref={heroRef}
        id="inicio"
        className="relative z-10 w-full min-h-[100svh] flex flex-col justify-between overflow-hidden text-white pt-28 sm:pt-32"
      >
        <div className="relative z-10 flex flex-col justify-between min-h-[calc(100svh-7rem)] w-full">
          {/* TÍTULO HERO */}
          <div
            className={`flex-1 flex flex-col justify-end items-start text-left px-4 sm:px-8 md:px-12 lg:px-16 pb-6 md:pb-10 w-full max-w-7xl mx-auto will-change-transform transition-all duration-1000 ease-out ${
              titleLettersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transform: titleLettersVisible
                ? `translate3d(0, ${scrollProgress * 30}px, 0) scale(${1 - scrollProgress * 0.03})`
                : undefined,
              opacity: titleLettersVisible ? Math.max(1 - scrollProgress * 0.75, 0.25) : 0,
              transition: 'transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            <h1 className="section-title text-[#f7f7f2] font-black tracking-tight text-3xl min-[360px]:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[104px] leading-[0.95] text-left flex items-center flex-wrap sm:flex-nowrap gap-x-2">
              <Star className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 fill-[#bcff48] text-[#bcff48] shrink-0 transition-transform duration-700" />
              <span className="tracking-tight">{t.hero.title}</span>
            </h1>
            <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base md:text-lg text-white/80 font-normal tracking-wide max-w-xl">
              {t.hero.subtitle}
            </p>
          </div>

          {/* FLECHA CENTRADA */}
          <footer className="w-full pb-8 md:pb-12 pt-2 flex items-center justify-center max-w-7xl mx-auto">
            <a
              href="#portfolio"
              aria-label={t.hero.ariaNextSection}
              className={`group flex flex-col items-center justify-center transition-all duration-1000 ease-out focus-visible:ring-2 focus-visible:ring-[#bcff48] rounded-full p-2 ${
                arrowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:border-[#bcff48]/70 group-hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] transition-all">
                <ChevronDown className="w-6 h-6 text-white group-hover:text-[#bcff48] transition-colors animate-bounce" />
              </div>
            </a>
          </footer>
        </div>
      </main>

      {/* SECCIÓN PORTFOLIO CON CATÁLOGO CLICABLE */}
      <section
        id="portfolio"
        ref={portfolioRef}
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] overflow-hidden"
      >
        <div
          className={`w-full max-w-[1380px] mx-auto flex flex-col gap-8 sm:gap-10 ${
            portfolioVisible ? 'animate-portfolio-entrance' : 'opacity-0'
          }`}
        >
          {/* CABECERA */}
          <ScrollReveal direction="up" distance={20} duration={650}>
            <div className="w-full">
              <div className="section-nav flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3 sm:mb-4 gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-xs font-mono font-bold tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#bcff48]" />
                  <span>{t.services.badge}</span>
                </span>
                <span className="text-xs text-white/50 font-mono hidden sm:inline-flex items-center gap-1.5">
                  <span>{t.services.hint}</span>
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2
                  className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                  style={{ fontSize: 'clamp(34px, 6.5vw, 96px)' }}
                >
                  {t.services.heading}
                </h2>
                <p className="section-copy text-xs sm:text-sm md:text-base text-[#f7f7f2]/75 max-w-lg leading-relaxed pb-1">
                  {t.services.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RETÍCULA DE CUATRO PROYECTOS */}
          <div className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {projects.map((proj, idx) => (
              <ScrollReveal
                key={proj.id}
                direction="up"
                distance={35}
                delay={idx * 110}
                duration={750}
                className="h-full"
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setSelectedCatalogPlatform(proj.platform)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCatalogPlatform(proj.platform);
                    }
                  }}
                  className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-[#0d0e14] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer text-left"
                >
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                    style={{
                      boxShadow: `inset 0 0 20px ${proj.accentColor}25, 0 0 30px ${proj.accentColor}20`,
                      borderColor: `${proj.accentColor}60`,
                      borderWidth: '1px',
                    }}
                  />

                  <div className="relative h-52 min-[440px]:h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#14161f]">
                    <img
                      src={proj.image}
                      alt={proj.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/50 to-black/40 pointer-events-none" />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${proj.accentColor} 0%, transparent 70%)`,
                      }}
                    />

                    <div className="absolute top-3.5 inset-x-3.5 z-10 flex items-center justify-between gap-2">
                      <span className="section-copy text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-md">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{
                            backgroundColor: proj.accentColor,
                            boxShadow: `0 0 8px ${proj.accentColor}`,
                          }}
                        />
                        {proj.platform}
                      </span>
                      <span
                        className="section-copy text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-1 shadow-md"
                        style={{ color: proj.accentColor }}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        {proj.rating}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white shadow-sm">
                        {proj.reviewsCount}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#bcff48] text-black shadow-md">
                        {proj.startingPrice}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4 bg-[#0d0e14]">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className="text-[11px] uppercase font-mono tracking-wider font-bold"
                          style={{ color: proj.accentColor }}
                        >
                          {proj.subtitle}
                        </span>
                        <span className="text-[10px] text-white/50 font-mono hidden min-[440px]:inline">
                          {proj.tag}
                        </span>
                      </div>

                      <h3 className="section-title text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      <p className="section-copy text-xs text-[#f7f7f2]/75 mt-1.5 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>

                      <ul className="space-y-1.5 mt-3 pt-3 border-t border-white/10">
                        {proj.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-white/85">
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: proj.accentColor }}
                            />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-[#f7f7f2]/90">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#bcff48] shrink-0" />
                        <span className="truncate">{proj.metric}</span>
                      </span>
                    </div>

                    <div className="w-full mt-1 min-h-[46px] py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-[#bcff48] border border-white/10 group-hover:border-[#bcff48] text-xs font-semibold text-[#f7f7f2] group-hover:text-black flex items-center justify-between transition-all duration-300 shadow-sm active:scale-95">
                      <span className="font-bold tracking-wide">{t.services.cardAction}</span>
                      <span className="flex items-center gap-1 text-[#bcff48] group-hover:text-black font-extrabold transition-colors">
                        <span>{t.services.cardOpen}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS Y PILARES DE REPUTACIÓN */}
      <section
        id="estrategia"
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] overflow-hidden"
      >
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-8 sm:gap-10">
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full">
              <div className="section-nav flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#bcff48] shadow-[0_0_8px_#bcff48] animate-pulse" />
                <span>{t.strategy.badge}</span>
              </div>

              <h2
                className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                style={{ fontSize: 'clamp(34px, 6vw, 92px)' }}
              >
                {t.strategy.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* CUADRO 1: Eliminación */}
            <ScrollReveal direction="up" distance={30} delay={0}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#ff5a42]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(255,90,66,0.2)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a42] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#ff5a42] bg-[#ff5a42]/10 border border-[#ff5a42]/25 px-3 py-1 rounded-full">
                      {t.strategy.card1.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5a42] group-hover:scale-110 group-hover:bg-[#ff5a42]/15 transition-all shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#ff5a42] transition-colors">
                    {t.strategy.card1.title}
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    {t.strategy.card1.desc}
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    {t.strategy.card1.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                        <Check className="w-4 h-4 text-[#ff5a42] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">{t.strategy.card1.statLabel}</span>
                  <span className="section-copy text-xs font-bold text-[#ff5a42] bg-[#ff5a42]/10 px-2.5 py-1 rounded-full border border-[#ff5a42]/20">
                    {t.strategy.card1.statValue}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* CUADRO 2: Credibilidad */}
            <ScrollReveal direction="up" distance={30} delay={120}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#bcff48]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(188,255,72,0.2)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#bcff48] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#bcff48] bg-[#bcff48]/10 border border-[#bcff48]/25 px-3 py-1 rounded-full">
                      {t.strategy.card2.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#bcff48] group-hover:scale-110 group-hover:bg-[#bcff48]/15 transition-all shadow-sm">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#bcff48] transition-colors">
                    {t.strategy.card2.title}
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    {t.strategy.card2.desc}
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    {t.strategy.card2.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                        <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">{t.strategy.card2.statLabel}</span>
                  <span className="section-copy text-xs font-bold text-[#bcff48] bg-[#bcff48]/10 px-2.5 py-1 rounded-full border border-[#bcff48]/20">
                    {t.strategy.card2.statValue}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* CUADRO 3: Fidelización */}
            <ScrollReveal direction="up" distance={30} delay={240}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#00b67a]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(0,182,122,0.2)] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00b67a] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#00b67a] bg-[#00b67a]/10 border border-[#00b67a]/25 px-3 py-1 rounded-full">
                      {t.strategy.card3.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00b67a] group-hover:scale-110 group-hover:bg-[#00b67a]/15 transition-all shadow-sm">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#00b67a] transition-colors">
                    {t.strategy.card3.title}
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    {t.strategy.card3.desc}
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    {t.strategy.card3.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                        <Check className="w-4 h-4 text-[#00b67a] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">{t.strategy.card3.statLabel}</span>
                  <span className="section-copy text-xs font-bold text-[#bcff48] bg-[#bcff48]/10 px-2.5 py-1 rounded">
                    {t.strategy.card3.statValue}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CUADRITO DE GARANTÍA Y ACCIÓN */}
          <ScrollReveal direction="up" distance={20} delay={150}>
            <div className="mt-8 md:mt-12 w-full max-w-2xl mx-auto rounded-xl p-5 sm:p-6 bg-[#141414]/90 border border-white/15 hover:border-[#bcff48]/50 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#bcff48]/15 border border-[#bcff48]/30 text-[#bcff48] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="section-title text-base sm:text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="text-[#bcff48] font-bold">&gt;</span>
                    <span>{t.strategy.ctaBox.title}</span>
                  </p>
                  <p className="section-copy text-xs sm:text-sm font-semibold text-[#bcff48] mt-1">
                    {t.strategy.ctaBox.guarantee}
                  </p>
                </div>
              </div>

              <a
                href="#portfolio"
                className="section-copy inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#bcff48] transition-colors shrink-0 shadow-md active:scale-95"
              >
                <span>{t.strategy.ctaBox.btn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECCIÓN 4: ¿QUIÉN ES TRUSTUPREVIEWS? + SIMULADOR */}
      <section
        id="nosotros"
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-between h-full py-10 md:py-16">
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full mb-8 md:mb-12">
              <div className="section-nav flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bcff48]" />
                <span>{t.about.badge}</span>
              </div>
              <h2
                className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                style={{ fontSize: 'clamp(34px, 6vw, 92px)' }}
              >
                {t.about.heading}
              </h2>
            </div>
          </ScrollReveal>

          {/* GRAN CUADRO DESTACADO: ¿QUIÉN ES TRUSTUPREVIEWS? */}
          <ScrollReveal direction="up" distance={30} delay={80}>
            <div className="relative rounded-3xl bg-gradient-to-b from-[#161616]/95 to-[#0d0d0d]/95 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#bcff48]/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff5a42]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit mb-5">
                    <Star className="w-3.5 h-3.5 fill-[#bcff48] text-[#bcff48]" />
                    <span className="section-copy text-xs font-bold tracking-[0.2em] uppercase text-[#f7f7f2]">
                      {t.about.officialBadge}
                    </span>
                  </div>

                  <h3 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {t.about.title}
                  </h3>

                  <p className="section-copy text-sm sm:text-base md:text-[17px] text-[#f7f7f2]/90 leading-relaxed mb-5 font-normal">
                    {t.about.p1}
                  </p>

                  <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/75 leading-relaxed mb-8 font-normal">
                    {t.about.p2}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-[#bcff48] block">
                        {t.about.stats.s1Value}
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        {t.about.stats.s1Label}
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-white block">
                        {t.about.stats.s2Value}
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        {t.about.stats.s2Label}
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-[#bcff48] block">
                        {t.about.stats.s3Value}
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        {t.about.stats.s3Label}
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-white block">
                        {t.about.stats.s4Value}
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        {t.about.stats.s4Label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#bcff48]/15 border border-[#bcff48]/30 text-[#bcff48] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        {t.about.pillars.p1Title}
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      {t.about.pillars.p1Desc}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#ff5a42]/15 border border-[#ff5a42]/30 text-[#ff5a42] flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        {t.about.pillars.p2Title}
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      {t.about.pillars.p2Desc}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-[#bcff48]" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        {t.about.pillars.p3Title}
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      {t.about.pillars.p3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SEGUNDO GRAN CUADRO DESTACADO: CELULAR Y ACELERACIÓN */}
          <ScrollReveal direction="up" distance={30} delay={120}>
            <div className="mt-10 md:mt-16 relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181818]/95 via-[#121212]/95 to-[#0b0b0b]/95 border border-white/15 p-4 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-[#bcff48]/40 transition-all duration-300">
              <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#bcff48]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5a42]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* LADO IZQUIERDO: Celular interactivo */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[310px] min-[400px]:max-w-[340px] sm:max-w-[370px]">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-[#bcff48]/25 via-white/10 to-[#ff5a42]/25 rounded-[52px] blur-2xl opacity-75 animate-pulse-glow" />

                    <div className="relative rounded-[40px] sm:rounded-[46px] bg-[#1a1a1a] border-[6px] sm:border-[8px] border-[#2c2c2c] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(188,255,72,0.15)] overflow-hidden">
                      <div className="absolute -left-2.5 top-24 w-1.5 h-10 bg-[#3d3d3d] rounded-r" />
                      <div className="absolute -left-2.5 top-38 w-1.5 h-10 bg-[#3d3d3d] rounded-r" />
                      <div className="absolute -right-2.5 top-28 w-1.5 h-14 bg-[#3d3d3d] rounded-l" />

                      <div className="relative h-[530px] sm:h-[630px] bg-[#0c0f0d] flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-0 right-0 w-56 h-56 bg-[#bcff48]/10 rounded-full blur-3xl" />
                          <div className="absolute bottom-10 left-0 w-48 h-48 bg-[#00b67a]/10 rounded-full blur-2xl" />
                          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                        </div>

                        {/* Notch / Dynamic Island */}
                        <div className="relative z-30 pt-3 px-3 sm:px-4 flex items-center justify-between text-[11px] text-white/80 font-medium">
                          <span className="font-semibold tracking-tight text-white/70">{t.about.phone.time}</span>

                          <div
                            className={`bg-black/95 transition-all duration-300 ease-out border rounded-full px-2.5 sm:px-3 py-1 flex items-center gap-1.5 sm:gap-2 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 ${dynamicIsland.borderGlow}`}
                            onClick={() => {
                              const categories: ('trustpilot' | 'google' | 'tripadvisor' | 'facebook')[] = [
                                'trustpilot',
                                'google',
                                'tripadvisor',
                                'facebook',
                              ];
                              const nextCat = categories[(categories.indexOf(phoneCategory) + 1) % categories.length];
                              handleSelectPhoneCategory(nextCat);
                            }}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${dynamicIsland.dotColor} animate-ping shrink-0`} />
                              {dynamicIsland.icon}
                            </div>
                            <span className="text-[10px] text-white font-bold tracking-wide truncate max-w-[105px] sm:max-w-[125px]">
                              {dynamicIsland.title}
                            </span>
                            <span
                              className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-full ${dynamicIsland.badgeBg} border border-white/10 shrink-0`}
                            >
                              {dynamicIsland.badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-xs">
                            <span className="text-[9px] font-semibold text-white/80">5G</span>
                            <div className="w-4 h-2 border border-white/60 rounded-sm p-0.5 flex items-center">
                              <div className="w-full h-full bg-[#bcff48] rounded-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* Cabecera interior */}
                        <div className="relative z-20 px-4 pt-3 pb-2 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#bcff48] animate-pulse" />
                            <span className="section-copy text-[11px] font-bold tracking-wider uppercase text-white">
                              {t.about.phone.realtimeFeed}
                            </span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#bcff48]/15 text-[#bcff48] font-bold border border-[#bcff48]/30">
                            {t.about.phone.shielded}
                          </span>
                        </div>

                        {/* Contenedor de reseñas */}
                        <div className="relative z-10 px-4 py-3 flex-1 overflow-y-auto no-scrollbar space-y-3">
                          {/* TARJETA DESTACADA: TRUSTSCORE */}
                          <div
                            onClick={() => handleSelectPhoneCategory('trustpilot')}
                            className={`rounded-2xl bg-gradient-to-br from-[#132212] via-[#0d160c] to-[#0a0a0a] border p-3.5 shadow-xl relative overflow-hidden cursor-pointer transition-all ${
                              phoneCategory === 'trustpilot'
                                ? 'border-[#00b67a] shadow-[0_0_20px_rgba(0,182,122,0.35)] ring-1 ring-[#00b67a]/40'
                                : 'border-[#bcff48]/40 hover:border-[#bcff48]/70'
                            }`}
                          >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00b67a]/15 rounded-full blur-xl pointer-events-none" />

                            <div className="relative z-10 flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded bg-[#00b67a] text-white text-xs font-black flex items-center justify-center shadow-sm">
                                  ★
                                </span>
                                <span className="text-xs font-bold text-white tracking-wide">
                                  {t.about.phone.trustScoreTitle}
                                </span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00b67a] text-white font-extrabold uppercase tracking-wider">
                                {t.about.phone.trustScoreBadge}
                              </span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-1.5">
                              <span className="section-title text-3xl sm:text-4xl font-black text-white tracking-tight">
                                4.9
                              </span>
                              <span className="text-xs text-[#bcff48] font-semibold">/ 5.0</span>
                              <div className="flex text-[#00b67a] text-base ml-1">
                                {'★★★★★'.split('').map((s, i) => (
                                  <span key={i} className="text-[#00b67a] drop-shadow-[0_0_8px_rgba(0,182,122,0.6)]">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-white/70 pt-2 border-t border-white/10">
                              <span>{t.about.phone.trustScoreReviews}</span>
                              <span className="text-[#bcff48] font-bold bg-[#bcff48]/10 px-2 py-0.5 rounded">
                                {t.about.phone.trustScoreLtv}
                              </span>
                            </div>
                          </div>

                          {/* BOTONES DE PLATAFORMAS */}
                          <div className="grid grid-cols-4 gap-1 w-full">
                            {(
                              [
                                {
                                  id: 'trustpilot',
                                  name: t.about.phone.categories.trustpilot,
                                  icon: '★',
                                  activeBg:
                                    'bg-[#00b67a] text-white shadow-[0_0_12px_rgba(0,182,122,0.6)] ring-1 ring-white/30',
                                },
                                {
                                  id: 'google',
                                  name: t.about.phone.categories.google,
                                  icon: '🔴',
                                  activeBg:
                                    'bg-[#ff5a42] text-white shadow-[0_0_12px_rgba(255,90,66,0.6)] ring-1 ring-white/30',
                                },
                                {
                                  id: 'tripadvisor',
                                  name: t.about.phone.categories.tripadvisor,
                                  icon: '🦉',
                                  activeBg:
                                    'bg-[#00aa6c] text-white shadow-[0_0_12px_rgba(0,170,108,0.6)] ring-1 ring-white/30',
                                },
                                {
                                  id: 'facebook',
                                  name: t.about.phone.categories.facebook,
                                  icon: '🔵',
                                  activeBg:
                                    'bg-[#1877F2] text-white shadow-[0_0_12px_rgba(24,119,242,0.6)] ring-1 ring-white/30',
                                },
                              ] as const
                            ).map((item) => {
                              const isSelected = phoneCategory === item.id;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => handleSelectPhoneCategory(item.id)}
                                  className={`py-2 px-1 rounded-xl text-center font-bold text-[9px] sm:text-[10px] transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 shadow-sm leading-tight active:scale-95 ${
                                    isSelected
                                      ? item.activeBg
                                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                                  }`}
                                >
                                  <span className="shrink-0 text-[10px]">{item.icon}</span>
                                  <span className="truncate max-w-full">{item.name}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* LISTA DE RESEÑAS DE LA PLATAFORMA */}
                          <div className="space-y-2.5">
                            {phoneNotifications
                              .filter((item) => item.category === phoneCategory)
                              .map((item) => {
                                const isCurrentActive = activePhoneMsgIdx === (item.id - 1);
                                return (
                                  <div
                                    key={item.id}
                                    onClick={() => setActivePhoneMsgIdx(item.id - 1)}
                                    className={`rounded-xl p-3 border transition-all duration-300 cursor-pointer ${
                                      isCurrentActive
                                        ? 'bg-[#152313] border-[#bcff48] shadow-[0_0_18px_rgba(188,255,72,0.2)] scale-[1.01]'
                                        : 'bg-[#111311] border-white/10 hover:border-white/20'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between mb-1.5">
                                      <div className="flex items-center gap-2">
                                        <div
                                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-bold text-[10px] flex items-center justify-center shadow`}
                                        >
                                          {item.avatarLetter}
                                        </div>
                                        <div>
                                          <p className="text-[11px] font-bold text-white leading-none">
                                            {item.platform}
                                          </p>
                                          <span className="text-[9px] text-white/50">{item.time}</span>
                                        </div>
                                      </div>
                                      <span
                                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${item.badgeBg}`}
                                      >
                                        {item.badge}
                                      </span>
                                    </div>

                                    {item.stars && (
                                      <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                                        {'★★★★★'}
                                      </div>
                                    )}

                                    <p className="text-[11px] text-white/90 leading-snug italic mb-1.5">
                                      {item.text}
                                    </p>

                                    <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px]">
                                      <span className="text-white/60 truncate max-w-[150px]">
                                        {item.sender}
                                      </span>
                                      <span className="text-[#bcff48] font-bold bg-[#bcff48]/15 px-1.5 py-0.5 rounded text-[9px]">
                                        {item.metricLabel}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        {/* Dock inferior del celular */}
                        <div className="relative z-20 px-4 py-2 bg-black/90 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {phoneNotifications
                              .filter((item) => item.category === phoneCategory)
                              .map((item) => (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => setActivePhoneMsgIdx(item.id - 1)}
                                  className="p-2 -m-1 inline-flex items-center justify-center focus-visible:outline-none"
                                >
                                  <span
                                    className={`h-1.5 rounded-full transition-all block ${
                                      activePhoneMsgIdx === (item.id - 1)
                                        ? 'w-5 bg-[#bcff48]'
                                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                                    }`}
                                  />
                                </button>
                              ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsAutoPlayingPhone(!isAutoPlayingPhone)}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none min-h-[36px] active:scale-95"
                          >
                            {isAutoPlayingPhone ? (
                              <>
                                <Pause className="w-3 h-3 text-[#bcff48]" />
                                <span>{t.about.phone.pause}</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3 h-3 text-[#bcff48]" />
                                <span>{t.about.phone.play}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-3/4 mx-auto h-4 bg-gradient-to-r from-transparent via-[#bcff48]/20 to-transparent blur-md mt-2" />
                  </div>
                </div>

                {/* LADO DERECHO: ACELERACIÓN 10X */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 w-fit mb-5">
                    <Zap className="w-3.5 h-3.5 text-[#bcff48]" />
                    <span className="section-copy text-xs font-bold tracking-[0.18em] uppercase text-[#bcff48]">
                      {t.about.rightCol.tag}
                    </span>
                  </div>

                  <h3 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
                    {t.about.rightCol.title}
                  </h3>

                  <p className="section-copy text-sm sm:text-base md:text-[17px] text-[#f7f7f2]/90 leading-relaxed mb-6 font-normal">
                    {t.about.rightCol.p1}
                  </p>

                  <div className="rounded-2xl bg-gradient-to-r from-[#bcff48]/10 via-white/[0.04] to-transparent border border-[#bcff48]/30 p-5 sm:p-6 mb-6 hover:border-[#bcff48]/60 transition-all">
                    <p className="section-title text-lg sm:text-xl font-bold text-[#bcff48] mb-1.5 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 shrink-0" />
                      <span>{t.about.rightCol.highlightBox1Title}</span>
                    </p>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-relaxed">
                      {t.about.rightCol.highlightBox1Desc}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 mb-6 space-y-3.5">
                    <p className="section-copy text-xs sm:text-sm md:text-[15px] text-[#f7f7f2]/85 leading-relaxed">
                      {t.about.rightCol.highlightBox2P1}
                    </p>

                    <p className="section-copy text-xs sm:text-sm md:text-[15px] text-[#f7f7f2]/80 leading-relaxed pt-2 border-t border-white/10">
                      {t.about.rightCol.highlightBox2P2}
                      <span className="text-[#bcff48] font-semibold">{t.about.rightCol.highlightBox2Emp}</span>
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="section-title text-lg sm:text-xl font-bold text-white mb-2">
                      {t.about.rightCol.ctaTitle}
                    </p>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                      {t.about.rightCol.ctaDesc}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSpecialistModalOpen(true)}
                        className="section-copy w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>{t.about.rightCol.btnSpecialist}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedCatalogPlatform('Google Reviews')}
                        className="section-copy w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95"
                      >
                        <span>{t.about.rightCol.btnCatalog}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-5 text-[11px] text-[#f7f7f2]/60 section-copy">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#bcff48]" />
                        <span>{t.about.rightCol.badges.b1}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#bcff48]" />
                        <span>{t.about.rightCol.badges.b2}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#bcff48]" />
                        <span>{t.about.rightCol.badges.b3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECCIÓN: EN QUÉ SOMOS DIFERENTES */}
      <section id="diferenciales" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#08090b] via-[#0d1015] to-[#08090b] border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff5a42]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LADO IZQUIERDO */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <ScrollReveal direction="up" distance={30}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 self-start">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.differentials.badge}</span>
                </div>

                <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                  {t.differentials.title}
                </h2>

                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 mb-6">
                  <p className="section-copy text-base sm:text-[17px] text-[#f7f7f2]/90 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">{t.differentials.intro}</strong>
                    {t.differentials.introEmp}
                    {t.differentials.introEnd}
                  </p>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {t.differentials.items.i1Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        {t.differentials.items.i1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {t.differentials.items.i2Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        {t.differentials.items.i2Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {t.differentials.items.i3Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        {t.differentials.items.i3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setSpecialistModalOpen(true)}
                    className="section-copy inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 min-h-[48px] rounded-full bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.differentials.btnAudit}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="section-copy text-[11px] text-[#f7f7f2]/60 mt-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#bcff48]" />
                    <span>{t.differentials.auditNote}</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DERECHO: 6 AMENAZAS */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={30} delay={120}>
                <div className="rounded-2xl sm:rounded-3xl bg-[#11141a]/90 border border-white/10 p-5 sm:p-7 md:p-8 backdrop-blur-sm relative">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#bcff48] font-bold">
                        {t.differentials.rightCol.badge}
                      </span>
                      <h3 className="section-title text-xl sm:text-2xl font-bold text-white mt-1">
                        {t.differentials.rightCol.title}
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#ff5a42]/10 border border-[#ff5a42]/30 text-[#ff5a42] text-[11px] font-mono font-bold">
                      {t.differentials.rightCol.successRate}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* T1 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <UserX className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t1Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t1Desc}
                      </p>
                    </div>

                    {/* T2 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <Star className="w-4 h-4 fill-[#ff5a42]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t2Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t2Desc}
                      </p>
                    </div>

                    {/* T3 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t3Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t3Desc}
                      </p>
                    </div>

                    {/* T4 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <Trash2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t4Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t4Desc}
                      </p>
                    </div>

                    {/* T5 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <FileWarning className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t5Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t5Desc}
                      </p>
                    </div>

                    {/* T6 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          {t.differentials.rightCol.threatBadge}
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        {t.differentials.rightCol.threats.t6Title}
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        {t.differentials.rightCol.threats.t6Desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#bcff48]/10 via-transparent to-[#ff5a42]/10 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#bcff48]/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-[#bcff48]" />
                      </div>
                      <div>
                        <p className="section-title text-xs sm:text-sm font-bold text-white">
                          {t.differentials.rightCol.footerTitle}
                        </p>
                        <p className="section-copy text-[11px] text-[#f7f7f2]/70">
                          {t.differentials.rightCol.footerDesc}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSpecialistModalOpen(true)}
                      className="section-copy text-xs font-bold text-[#bcff48] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors focus-visible:outline-none min-h-[36px]"
                    >
                      <span>{t.differentials.rightCol.footerLink}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: MÉTRICAS Y PROCESO DE PUBLICACIÓN */}
      <section id="proceso" className="relative py-16 sm:py-24 bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00E599]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-3.5 sm:p-5 mb-12 sm:mb-16 backdrop-blur-md shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    {t.process.metrics.m1Val}
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    {t.process.metrics.m1Desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    {t.process.metrics.m2Val}
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    {t.process.metrics.m2Desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    {t.process.metrics.m3Val}
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    {t.process.metrics.m3Desc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex flex-col items-center">
              <ScrollReveal direction="up" distance={30} delay={60}>
                <ReviewProcessIllustration />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={30} delay={140}>
                <div className="rounded-2xl sm:rounded-3xl bg-[#11141a]/90 border border-white/10 p-6 sm:p-8 md:p-9 backdrop-blur-sm relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.process.badge}</span>
                  </div>

                  <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                    {t.process.title}
                  </h2>

                  <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/85 leading-relaxed mb-7 font-normal">
                    {t.process.intro}
                  </p>

                  <div className="space-y-4">
                    {/* Paso 01 */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Search className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            {t.process.steps.s1Title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {t.process.steps.s1Stage}
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        {t.process.steps.s1Desc}
                      </p>
                    </div>

                    {/* Paso 02 */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            {t.process.steps.s2Title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {t.process.steps.s2Stage}
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        {t.process.steps.s2Desc}
                      </p>
                    </div>

                    {/* Paso 03 */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Zap className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            {t.process.steps.s3Title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {t.process.steps.s3Stage}
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        {t.process.steps.s3Desc}
                      </p>
                    </div>

                    {/* Paso 04 */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#bcff48]/15 via-white/[0.03] to-transparent border border-[#bcff48]/40 hover:border-[#bcff48]/70 hover:translate-x-1 transition-all duration-300 shadow-[0_4px_25px_rgba(188,255,72,0.1)]">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48] text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-4 h-4 text-black" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-[#bcff48]">
                            {t.process.steps.s4Title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-black px-2 py-0.5 rounded bg-[#bcff48]">
                          {t.process.steps.s4Stage}
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-relaxed pl-11">
                        {t.process.steps.s4Desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSpecialistModalOpen(true)}
                      className="section-copy inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.process.btnStart}</span>
                    </button>
                    <span className="section-copy text-xs text-[#f7f7f2]/60 font-mono">
                      {t.process.trackingNote}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: GARANTÍA Y TESTIMONIOS */}
      <GuaranteeSection onOpenSpecialist={() => setSpecialistModalOpen(true)} />

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES */}
      <FaqSection onOpenSpecialist={() => setSpecialistModalOpen(true)} />

      {/* SECCIÓN 9: CONTACTO */}
      <section id="contacto" className="relative py-20 sm:py-24 pb-28 lg:pb-24 bg-gradient-to-b from-[#040507] via-black to-black border-t border-white/10 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" distance={30}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.contact.badge}</span>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              {t.contact.title}
            </h2>

            <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setSpecialistModalOpen(true)}
                className="section-copy inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] rounded-full bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#a6ea34] transition-all shadow-[0_0_30px_rgba(188,255,72,0.4)] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.btnSpecialist}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCatalogPlatform('Google Reviews')}
                className="section-copy inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
              >
                <span>{t.contact.btnCatalog}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#f7f7f2]/50 gap-3">
            <p>© {new Date().getFullYear()} {t.contact.copyright}</p>
            <div className="flex items-center gap-4">
              <a href="#inicio" className="hover:text-white transition-colors py-1">{t.contact.backToTop}</a>
              <span>·</span>
              <button
                type="button"
                onClick={() => setSpecialistModalOpen(true)}
                className="hover:text-[#bcff48] transition-colors py-1"
              >
                {t.contact.support247}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL CATÁLOGO DE PRECIOS */}
      {selectedCatalogPlatform && activeCatalog && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${t.catalogModal.title} para ${activeCatalog.platform}`}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-hero-entrance"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSelectedCatalogPlatform(null)}
          />

          <div className="relative z-10 w-full max-w-5xl bg-[#141414] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-2xl shadow-2xl p-4 sm:p-7 md:p-9 max-sm:max-h-[92vh] my-0 sm:my-auto max-h-[92vh] overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="section-copy text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${activeCatalog.accentColor}20`,
                      color: activeCatalog.accentColor,
                      border: `1px solid ${activeCatalog.accentColor}40`,
                    }}
                  >
                    {activeCatalog.badge}
                  </span>
                  <span className="section-copy text-xs text-[#f7f7f2]/50 font-medium">
                    {activeCatalog.projectCode}
                  </span>
                </div>
                <h3 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#f7f7f2] leading-tight">
                  {activeCatalog.headline}
                </h3>
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/70 max-w-2xl mt-2 leading-relaxed">
                  {activeCatalog.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCatalogPlatform(null)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#f7f7f2] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] shrink-0 active:scale-95"
                aria-label={t.catalogModal.closeAria}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Selector de plataforma */}
            <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-white/10 no-scrollbar touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="section-copy text-xs text-[#f7f7f2]/50 uppercase tracking-wider font-semibold whitespace-nowrap mr-1">
                {t.catalogModal.viewOther}
              </span>
              {Object.keys(t.catalogs).map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setSelectedCatalogPlatform(plat)}
                  className={`section-copy text-xs font-semibold px-4 py-2 min-h-[38px] flex items-center justify-center rounded-full transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95 ${
                    selectedCatalogPlatform === plat
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/5 text-[#f7f7f2]/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>

            {/* Muestra gráfica representativa */}
            <div className="pt-5 pb-1">
              <PlatformSectionImage platform={activeCatalog.platform} catalogData={activeCatalog} />
            </div>

            {/* Cuadrícula de planes y precios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
              {activeCatalog.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-lg p-5 border transition-all ${
                    plan.popular
                      ? 'bg-[#1b1b1b] border-[#bcff48]/70 shadow-[0_0_25px_rgba(188,255,72,0.15)] ring-1 ring-[#bcff48]/50'
                      : 'bg-[#161616] border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 section-copy text-[10px] font-bold tracking-widest uppercase bg-[#bcff48] text-black px-3 py-0.5 rounded-full shadow-md">
                      {t.catalogModal.popularBadge}
                    </div>
                  )}

                  <div>
                    <p className="section-copy text-xs uppercase tracking-wider text-[#f7f7f2]/60 font-semibold mb-1">
                      {plan.name}
                    </p>
                    <h4 className="section-title text-base sm:text-lg font-bold text-[#f7f7f2] mb-3 leading-snug">
                      {plan.reviewsCount}
                    </h4>

                    <div className="mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="section-title text-3xl font-bold text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="section-copy text-xs text-[#f7f7f2]/40 line-through">
                          {plan.originalPrice}
                        </span>
                      </div>
                      <span className="section-copy text-[11px] text-[#f7f7f2]/50 font-medium">
                        {t.catalogModal.oneTimePay}
                      </span>

                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f7f7f2]/80 bg-white/5 px-2.5 py-1 rounded">
                        <Zap className="w-3 h-3 text-[#bcff48]" />
                        <span>{plan.delivery}</span>
                      </div>
                    </div>

                    <ul className="section-copy space-y-2 mb-6">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#f7f7f2]/80 leading-tight">
                          <Check className="w-3.5 h-3.5 text-[#bcff48] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPlanSuccess({
                        planName: plan.name,
                        platform: activeCatalog.platform,
                        price: plan.price,
                      })
                    }
                    className={`section-copy w-full min-h-[46px] py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95 ${
                      plan.popular
                        ? 'bg-[#bcff48] text-black hover:bg-[#a9eb38] shadow-md hover:shadow-lg'
                        : 'bg-white text-black hover:bg-stone-200'
                    }`}
                  >
                    <span>{t.catalogModal.choosePlan}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#f7f7f2]/60 section-copy">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
                <span>{t.catalogModal.footerSafe}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff5a42]" />
                <span>{t.catalogModal.footerWritten}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMACIÓN DE PLAN SELECCIONADO */}
      {selectedPlanSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-hero-entrance"
        >
          <div className="relative w-full max-w-md bg-[#161616] border border-[#bcff48]/40 rounded-2xl p-6 sm:p-7 shadow-2xl text-center pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="w-12 h-12 rounded-full bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center mx-auto mb-4 border border-[#bcff48]/30">
              <Check className="w-6 h-6" />
            </div>

            <h4 className="section-title text-xl sm:text-2xl font-bold text-white mb-2">
              {t.planSuccessModal.title}
            </h4>
            <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 mb-4">
              {t.planSuccessModal.msg(
                selectedPlanSuccess.planName,
                selectedPlanSuccess.platform,
                selectedPlanSuccess.price
              )}
            </p>
            <p className="section-copy text-xs text-[#f7f7f2]/60 mb-6">
              {t.planSuccessModal.subMsg}
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedPlanSuccess(null);
                  setSelectedCatalogPlatform(null);
                }}
                className="section-copy w-full min-h-[46px] py-3 rounded-xl bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a8eb37] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95"
              >
                {t.planSuccessModal.confirmBtn}
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanSuccess(null)}
                className="section-copy w-full min-h-[40px] py-2 text-xs text-[#f7f7f2]/70 hover:text-white transition-colors active:scale-95"
              >
                {t.planSuccessModal.backBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONTACTO CON ESPECIALISTAS */}
      {specialistModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.specialistModal.title}
          className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-0 sm:p-5 bg-black/85 backdrop-blur-md animate-hero-entrance overflow-y-auto"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSpecialistModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg bg-[#141414] border-t sm:border border-[#bcff48]/40 rounded-t-3xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl max-sm:max-h-[92vh] my-0 sm:my-auto max-h-[92vh] overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="section-copy text-[11px] font-bold text-[#bcff48] uppercase tracking-wider">
                  {t.specialistModal.badge}
                </span>
                <h3 className="section-title text-2xl font-bold text-white mt-0.5">
                  {t.specialistModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSpecialistModalOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all active:scale-95 shrink-0"
                aria-label={t.specialistModal.closeAria}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {specialistSuccess ? (
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#bcff48]/15 text-[#bcff48] border border-[#bcff48]/30 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="section-title text-xl font-bold text-white mb-2">
                  {t.specialistModal.successTitle}
                </h4>
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 mb-6 leading-relaxed">
                  {t.specialistModal.successMsg}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSpecialistSuccess(false);
                    setSpecialistModalOpen(false);
                  }}
                  className="section-copy w-full min-h-[48px] py-3 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a9eb38] transition-all active:scale-95"
                >
                  {t.specialistModal.successBtn}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSpecialistSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="specialist-name" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    {t.specialistModal.labels.name} <span className="text-[#bcff48]">*</span>
                  </label>
                  <input
                    id="specialist-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={specialistForm.name}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, name: e.target.value })}
                    placeholder={t.specialistModal.labels.namePlaceholder}
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="specialist-business" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                      {t.specialistModal.labels.business} <span className="text-[#bcff48]">*</span>
                    </label>
                    <input
                      id="specialist-business"
                      name="organization"
                      type="text"
                      required
                      aria-required="true"
                      autoComplete="organization"
                      value={specialistForm.business}
                      onChange={(e) => setSpecialistForm({ ...specialistForm, business: e.target.value })}
                      placeholder={t.specialistModal.labels.businessPlaceholder}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialist-phone" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                      {t.specialistModal.labels.phone} <span className="text-[#bcff48]">*</span>
                    </label>
                    <input
                      id="specialist-phone"
                      name="tel"
                      type="tel"
                      required
                      aria-required="true"
                      autoComplete="tel"
                      value={specialistForm.phone}
                      onChange={(e) => setSpecialistForm({ ...specialistForm, phone: e.target.value })}
                      placeholder={t.specialistModal.labels.phonePlaceholder}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialist-platform" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    {t.specialistModal.labels.platform}
                  </label>
                  <select
                    id="specialist-platform"
                    name="platform"
                    value={specialistForm.platform}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, platform: e.target.value })}
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/15 text-white text-base sm:text-xs focus:border-[#bcff48] focus:outline-none"
                  >
                    <option value="Google Reviews">{t.specialistModal.labels.platformOptions.google}</option>
                    <option value="Trustpilot">{t.specialistModal.labels.platformOptions.trustpilot}</option>
                    <option value="TripAdvisor">{t.specialistModal.labels.platformOptions.tripadvisor}</option>
                    <option value="Facebook">{t.specialistModal.labels.platformOptions.facebook}</option>
                    <option value="Eliminación">{t.specialistModal.labels.platformOptions.removal}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialist-notes" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    {t.specialistModal.labels.notes}
                  </label>
                  <textarea
                    id="specialist-notes"
                    name="notes"
                    rows={2}
                    value={specialistForm.notes}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, notes: e.target.value })}
                    placeholder={t.specialistModal.labels.notesPlaceholder}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="section-copy w-full min-h-[48px] py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a9eb38] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.specialistModal.labels.submitBtn}</span>
                </button>

                <p className="section-copy text-[10px] text-center text-[#f7f7f2]/50">
                  {t.specialistModal.labels.privacyNote}
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MENÚ MÓVIL A PANTALLA COMPLETA CON DISEÑO CYBER-LUXURY (ROOT-LEVEL Z-60) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.brandTagline}
          className="fixed inset-0 z-60 bg-[#07080a]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overscroll-contain animate-menu-drawer p-4 sm:p-7 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:hidden select-none"
        >
          {/* CABECERA DEL MENÚ MÓVIL */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 shrink-0">
            {/* LOGO */}
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 transition-opacity active:scale-95"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bcff48] to-[#00E599] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(188,255,72,0.35)]">
                <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                  <Star className="w-4 h-4 fill-[#bcff48] text-[#bcff48]" />
                </div>
              </div>
              <span className="section-title text-xl font-bold text-white tracking-wider">
                Lacoste
              </span>
            </a>

            {/* BOTÓN CERRAR DEDICADO CON TOUCH TARGET ERGONÓMICO */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#bcff48] hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-[#bcff48] focus-visible:outline-none rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95 shadow-sm"
              aria-label={t.nav.ariaCloseMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* SELECTOR DE IDIOMA Y DIVISA DENTRO DEL MENÚ MÓVIL */}
          <div className="py-2.5 px-3 my-3 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
              <Globe className="w-4 h-4 text-[#bcff48]" />
              <span className="font-semibold">Idioma / Currency:</span>
            </div>
            <div className="inline-flex rounded-full bg-black/70 p-1 border border-white/15 shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all min-h-[30px] flex items-center gap-1.5 ${
                  language === 'es'
                    ? 'bg-[#bcff48] text-black font-black shadow-[0_0_12px_rgba(188,255,72,0.4)]'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-pressed={language === 'es'}
              >
                <span>ES</span>
                <span className="text-[10px] opacity-75 font-mono">€</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all min-h-[30px] flex items-center gap-1.5 ${
                  language === 'en'
                    ? 'bg-[#bcff48] text-black font-black shadow-[0_0_12px_rgba(188,255,72,0.4)]'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-pressed={language === 'en'}
              >
                <span>EN</span>
                <span className="text-[10px] opacity-75 font-mono">$</span>
              </button>
            </div>
          </div>

          {/* ENLACES DE NAVEGACIÓN */}
          <nav className="flex flex-col items-stretch gap-1.5 my-auto font-outfit text-sm tracking-wider uppercase text-white py-1 overflow-y-auto max-w-md mx-auto w-full no-scrollbar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isContact = link.href === '#contacto';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (isContact) {
                      e.preventDefault();
                      setSpecialistModalOpen(true);
                    }
                  }}
                  className={`group transition-all min-h-[48px] px-4 py-2.5 flex items-center justify-between rounded-xl font-semibold border active:scale-98 ${
                    isContact
                      ? 'bg-gradient-to-r from-[#bcff48] to-[#9deb2c] text-black font-black shadow-[0_0_20px_rgba(188,255,72,0.35)] border-[#bcff48] mt-1.5'
                      : isActive
                      ? 'bg-[#bcff48]/15 border-[#bcff48]/40 text-[#bcff48] shadow-[0_0_15px_rgba(188,255,72,0.15)]'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/90 border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isActive && !isContact && (
                      <span className="w-2 h-2 rounded-full bg-[#bcff48] shadow-[0_0_8px_#bcff48]" />
                    )}
                    <span>{link.label}</span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isContact ? 'text-black' : isActive ? 'text-[#bcff48]' : 'text-white/40'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* ACCIONES INFERIORES: CATÁLOGO Y TELEGRAM DIRECTO */}
          <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2 max-w-md mx-auto w-full shrink-0">
            {/* BOTÓN VER CATÁLOGO */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSelectedCatalogPlatform('Google Reviews');
              }}
              className="w-full min-h-[46px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-all shadow-sm"
            >
              <span>{t.nav.openCatalogBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#bcff48]" />
            </button>

            {/* ACCESO DIRECTO TELEGRAM @SknnyZ */}
            <a
              href="https://t.me/SknnyZ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] rounded-xl bg-gradient-to-r from-[#0088cc]/20 via-[#229ed9]/20 to-[#0088cc]/10 border border-[#229ed9]/40 hover:border-[#229ed9]/70 text-cyan-200 font-bold text-xs flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
              <span>Telegram: @SknnyZ (Online 24/7)</span>
            </a>

            <p className="text-[10px] text-white/50 text-center mt-0.5 section-copy">
              {t.nav.brandTagline}
            </p>
          </div>
        </div>
      )}

      {/* BARRA DE ACCIÓN FLOTANTE PARA MÓVILES */}
      {scrollProgress > 0.15 && !mobileMenuOpen && !selectedCatalogPlatform && !specialistModalOpen && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.85rem,env(safe-area-inset-bottom))] bg-black/90 backdrop-blur-xl border-t border-white/15 lg:hidden flex items-center gap-3 animate-hero-entrance shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
          <button
            type="button"
            onClick={() => setSelectedCatalogPlatform('Google Reviews')}
            className="section-copy flex-1 min-h-[46px] py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 text-center active:scale-95 transition-transform flex items-center justify-center gap-1.5"
          >
            <span>{t.mobileStickyBar.viewPlans}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#bcff48]" />
          </button>
          <button
            type="button"
            onClick={() => setSpecialistModalOpen(true)}
            className="section-copy flex-1 min-h-[46px] py-3 px-3 rounded-xl bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(188,255,72,0.35)] text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.mobileStickyBar.specialist}</span>
          </button>
        </div>
      )}

      {/* BOTÓN DE TELEGRAM FIJO (ALWAYS-ON PERSISTENT FLOATING FAB) */}
      <TelegramButton
        telegramUrl="https://t.me/SknnyZ"
        hasBottomStickyBar={
          scrollProgress > 0.15 && !mobileMenuOpen && !selectedCatalogPlatform && !specialistModalOpen
        }
      />
    </div>
  );
}
