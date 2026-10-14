import React from 'react';

export const ReviewProcessIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00E599]/20 via-[#bcff48]/15 to-transparent rounded-3xl blur-3xl pointer-events-none -z-10" />

      {/* Tarjeta contenedora con estética cyber-glass */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0f141a] to-[#07090c] border border-white/10 p-4 sm:p-6 shadow-2xl overflow-visible">
        {/* SVG Vectorial de alta definición que reproduce y mejora la imagen del usuario */}
        <svg
          viewBox="0 0 500 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          <defs>
            {/* Gradiente para la flecha ascendente */}
            <linearGradient id="growthArrowGrad" x1="120" y1="380" x2="380" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E599" />
              <stop offset="100%" stopColor="#bcff48" />
            </linearGradient>

            {/* Filtro de resplandor para la flecha y estrellas */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gradiente para pantalla interior */}
            <linearGradient id="screenBg" x1="250" y1="210" x2="250" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0a0f14" />
              <stop offset="100%" stopColor="#050709" />
            </linearGradient>
          </defs>

          {/* 1. BASE Y PIE DEL MONITOR */}
          <path
            d="M 200 470 L 300 470"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 235 425 L 235 470"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 265 425 L 265 470"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* 2. CHASIS DEL MONITOR */}
          <rect
            x="85"
            y="210"
            width="340"
            height="215"
            rx="16"
            fill="url(#screenBg)"
            stroke="white"
            strokeWidth="4"
          />

          {/* 3. ELEMENTOS INTERNOS DEL MONITOR */}
          {/* Globo terráqueo wireframe */}
          <g opacity="0.35" transform="translate(195, 325)">
            <circle cx="0" cy="0" r="58" stroke="white" strokeWidth="2" fill="none" />
            {/* Línea ecuador */}
            <line x1="-58" y1="0" x2="58" y2="0" stroke="white" strokeWidth="1.8" />
            {/* Paralelos */}
            <ellipse cx="0" cy="-22" rx="53" ry="10" stroke="white" strokeWidth="1.6" fill="none" />
            <ellipse cx="0" cy="22" rx="53" ry="10" stroke="white" strokeWidth="1.6" fill="none" />
            {/* Meridianos */}
            <ellipse cx="0" cy="0" rx="30" ry="58" stroke="white" strokeWidth="1.8" fill="none" />
            <line x1="0" y1="-58" x2="0" y2="58" stroke="white" strokeWidth="1.8" />
          </g>

          {/* Widget de gráfico de barras (arriba a la izquierda dentro del monitor) */}
          <g transform="translate(120, 175)">
            <rect
              x="0"
              y="0"
              width="66"
              height="52"
              rx="6"
              fill="#0d141c"
              stroke="white"
              strokeWidth="2.5"
            />
            {/* Barras de crecimiento */}
            <rect x="10" y="32" width="6" height="12" rx="1.5" fill="#bcff48" />
            <rect x="22" y="24" width="6" height="20" rx="1.5" fill="#00E599" />
            <rect x="34" y="16" width="6" height="28" rx="1.5" fill="#bcff48" />
            <rect x="46" y="8" width="6" height="36" rx="1.5" fill="#00E599" />
            <line x1="6" y1="44" x2="60" y2="44" stroke="white" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* Widget de ventana/consola (abajo a la derecha dentro del monitor) */}
          <g transform="translate(305, 365)">
            <rect
              x="0"
              y="0"
              width="85"
              height="50"
              rx="6"
              fill="#0d141c"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="15" cy="14" r="4" stroke="white" strokeWidth="1.5" fill="none" />
            <line x1="28" y1="14" x2="55" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <line x1="72" y1="11" x2="78" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="78" y1="11" x2="72" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="10" y="27" width="65" height="15" rx="3" fill="#141f2b" stroke="white" strokeWidth="1" opacity="0.8" />
          </g>

          {/* 4. GRAN FLECHA ASCENDENTE VERDE ESMERALDA */}
          <g filter="url(#neonGlow)">
            <path
              d="M 120 375 L 235 295 L 260 345 L 380 260 L 375 320 L 350 320 L 378 245 L 305 260 L 315 285 L 260 295 L 235 255 Z"
              fill="url(#growthArrowGrad)"
              stroke="#bcff48"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </g>

          {/* 5. PERSONAJE SENTADO SOBRE EL MONITOR */}
          <g transform="translate(0, 0)">
            {/* Cabeza */}
            <circle cx="335" cy="80" r="18" fill="white" stroke="#00E599" strokeWidth="1" />
            {/* Cabello estilizado oscuro */}
            <path
              d="M 322 75 C 322 62, 345 62, 350 72 C 352 78, 350 85, 348 88 C 344 88, 340 76, 330 76 Z"
              fill="#0a0e14"
            />

            {/* Cuello */}
            <rect x="330" y="96" width="10" height="9" fill="white" />

            {/* Torso / Camisa blanca con línea limpia */}
            <path
              d="M 308 105 C 318 104, 350 104, 362 108 L 358 178 L 310 178 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2"
            />

            {/* Brazo izquierdo / Manga */}
            <path
              d="M 348 108 L 358 145 L 344 148 L 336 120 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="1.5"
            />

            {/* Brazo derecho y manos sosteniendo la laptop */}
            <path
              d="M 315 110 L 290 150 L 308 160 L 328 125 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="1.5"
            />

            {/* Laptop sobre las piernas */}
            <rect
              x="248"
              y="158"
              width="62"
              height="45"
              rx="4"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2.5"
            />
            {/* Teclado/base */}
            <path d="M 244 203 L 314 203" stroke="#0a0e14" strokeWidth="3" strokeLinecap="round" />

            {/* Manos tecleando */}
            <ellipse cx="288" cy="165" rx="6" ry="4" fill="white" stroke="#0a0e14" strokeWidth="1.5" />
            <ellipse cx="298" cy="165" rx="6" ry="4" fill="white" stroke="#0a0e14" strokeWidth="1.5" />

            {/* Piernas sentadas colgando sobre el monitor */}
            {/* Pierna izquierda */}
            <path
              d="M 315 178 L 305 250 L 270 295 L 285 305 L 325 255 L 335 178 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2"
            />
            {/* Zapato izquierdo */}
            <path
              d="M 268 295 C 260 298, 250 305, 240 308 C 248 314, 266 312, 276 304 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2"
            />

            {/* Pierna derecha */}
            <path
              d="M 335 178 L 345 250 L 312 295 L 326 305 L 362 250 L 355 178 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2"
            />
            {/* Zapato derecho */}
            <path
              d="M 310 295 C 300 298, 290 305, 280 308 C 288 314, 305 312, 318 304 Z"
              fill="white"
              stroke="#0a0e14"
              strokeWidth="2"
            />
          </g>

          {/* 6. WIDGET DE 5 ESTRELLAS (Abajo a la izquierda flotando) */}
          <g transform="translate(48, 400)">
            {/* Tarjeta cápsula blanca con sombra */}
            <rect
              x="0"
              y="0"
              width="190"
              height="40"
              rx="10"
              fill="#0d131a"
              stroke="white"
              strokeWidth="2.5"
            />
            {/* 5 Estrellas verdes brillantes */}
            <g transform="translate(14, 10)">
              {/* Estrella 1 */}
              <polygon points="10,1 12.8,7 19.5,7.6 14.5,12 16,18.5 10,15 4,18.5 5.5,12 0.5,7.6 7.2,7" fill="#00E599" stroke="#bcff48" strokeWidth="0.8" />
              {/* Estrella 2 */}
              <polygon points="44,1 46.8,7 53.5,7.6 48.5,12 50,18.5 44,15 38,18.5 39.5,12 34.5,7.6 41.2,7" fill="#00E599" stroke="#bcff48" strokeWidth="0.8" />
              {/* Estrella 3 */}
              <polygon points="78,1 80.8,7 87.5,7.6 82.5,12 84,18.5 78,15 72,18.5 73.5,12 68.5,7.6 75.2,7" fill="#00E599" stroke="#bcff48" strokeWidth="0.8" />
              {/* Estrella 4 */}
              <polygon points="112,1 114.8,7 121.5,7.6 116.5,12 118,18.5 112,15 106,18.5 107.5,12 102.5,7.6 109.2,7" fill="#00E599" stroke="#bcff48" strokeWidth="0.8" />
              {/* Estrella 5 (4.9 / media o llena) */}
              <polygon points="146,1 148.8,7 155.5,7.6 150.5,12 152,18.5 146,15 140,18.5 141.5,12 136.5,7.6 143.2,7" fill="#00E599" stroke="#bcff48" strokeWidth="0.8" />
            </g>
          </g>

          {/* 7. BURBUJA DE MENSAJE FLOTANTE (Arriba a la izquierda) */}
          <g transform="translate(172, 95)">
            <rect
              x="0"
              y="0"
              width="100"
              height="34"
              rx="12"
              fill="#0d141c"
              stroke="white"
              strokeWidth="2.5"
            />
            {/* Cola del bocadillo */}
            <polygon points="85,34 90,42 93,34" fill="#0d141c" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 85 34 L 93 34" stroke="#0d141c" strokeWidth="3" />
            {/* Punto verde de notificación */}
            <circle cx="20" cy="17" r="5" fill="#00E599" />
            {/* Línea simulada de texto */}
            <rect x="34" y="14" width="50" height="6" rx="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
          </g>

          {/* 8. MICRO ELEMENTOS FLOTANTES DE ENGAGEMENT */}
          {/* Checkmark verde en caja blanca */}
          <g transform="translate(385, 172)">
            <rect x="0" y="0" width="22" height="22" rx="5" fill="#0d141c" stroke="white" strokeWidth="2" />
            <path d="M 5 11 L 9 15 L 17 6" stroke="#00E599" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Corazón en círculo flotante */}
          <g transform="translate(398, 318)">
            <circle cx="18" cy="18" r="18" fill="#0d141c" stroke="white" strokeWidth="2" />
            <path
              d="M 18 24 C 18 24, 11 19, 11 14.5 C 11 12, 13 10, 15.5 10 C 17 10, 18 11, 18 11 C 18 11, 19 10, 20.5 10 C 23 10, 25 12, 25 14.5 C 25 19, 18 24, 18 24 Z"
              fill="#00E599"
            />
          </g>

          {/* Mini corazón verde flotando */}
          <g transform="translate(435, 298)">
            <path
              d="M 8 11 C 8 11, 4 8, 4 5.5 C 4 4, 5.2 3, 6.7 3 C 7.6 3, 8 3.6, 8 3.6 C 8 3.6, 8.4 3, 9.3 3 C 10.8 3, 12 4, 12 5.5 C 12 8, 8 11, 8 11 Z"
              fill="#bcff48"
            />
          </g>

          {/* Asterisco / destello */}
          <g transform="translate(395, 288)" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="0" y1="0" x2="8" y2="8" />
            <line x1="0" y1="8" x2="8" y2="0" />
            <line x1="4" y1="0" x2="4" y2="8" />
          </g>
        </svg>

        {/* Resumen interactivo al pie de la ilustración */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#f7f7f2]/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
            <span className="font-mono text-[11px] font-bold text-white tracking-wide">
              CAMPAÑA ACTIVA 24/7
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#bcff48] font-semibold">
            +3 a 50 RESEÑAS / DÍA
          </span>
        </div>
      </div>
    </div>
  );
};
