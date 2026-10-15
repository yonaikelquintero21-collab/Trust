import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TelegramButtonProps {
  telegramUrl?: string;
  hasBottomStickyBar?: boolean;
}

export const TelegramButton: React.FC<TelegramButtonProps> = ({
  telegramUrl = 'https://t.me/SknnyZ',
  hasBottomStickyBar = false,
}) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label={t.telegram.ariaLabel}
      className={`fixed z-40 right-4 sm:right-6 transition-all duration-300 pointer-events-auto ${
        hasBottomStickyBar
          ? 'bottom-[calc(5rem+env(safe-area-inset-bottom))] lg:bottom-[max(1.5rem,env(safe-area-inset-bottom))]'
          : 'bottom-[max(1.5rem,env(safe-area-inset-bottom))]'
      }`}
    >
      <div className="relative flex items-center gap-2 group">
        {/* Tooltip flotante con diseño glassmorphism y microinteracción */}
        <div
          className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-cyan-400/30 text-white text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-200 pointer-events-none whitespace-nowrap ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span>{t.telegram.tooltip}</span>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-400/20">
            {t.telegram.badgeOnline}
          </span>
        </div>

        {/* Botón flotante de Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0088cc] via-[#229ed9] to-[#29b6f6] text-white shadow-[0_8px_30px_rgba(0,136,204,0.45)] hover:shadow-[0_12px_40px_rgba(0,136,204,0.65)] hover:scale-108 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={t.telegram.ariaLabel}
        >
          {/* Anillo de pulso sutil */}
          <span className="absolute -inset-1 rounded-full bg-[#229ed9] opacity-30 animate-ping pointer-events-none" />

          {/* Indicador de estado en línea */}
          <span
            className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00E599] border-2 border-black shadow-[0_0_8px_#00E599] z-10"
            title={t.telegram.badgeOnline}
          />

          {/* Icono vectorial oficial de Telegram (avión de papel con trazos limpios) */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 -translate-x-0.5 translate-y-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.42 2.58C21.05 2.22 20.5 2.11 20.02 2.31L2.83 9.47C2.26 9.71 1.94 10.29 2.01 10.9C2.08 11.51 2.52 12 3.13 12.14L7.54 13.25L9.61 19.46C9.79 20 10.25 20.37 10.8 20.4C10.86 20.4 10.93 20.4 11 20.4C11.45 20.4 11.87 20.19 12.13 19.82L14.77 16.05L18.89 19.14C19.26 19.42 19.74 19.48 20.16 19.29C20.58 19.1 20.88 18.7 20.97 18.25L21.97 3.96C22.01 3.47 21.79 2.94 21.42 2.58ZM18.94 5.34L8.71 13.91L4.85 11.16L18.94 5.34ZM11.17 17.58L9.93 13.86L17.75 7.29L11.17 17.58Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </aside>
  );
};
